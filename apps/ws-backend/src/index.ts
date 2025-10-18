import { WebSocket, WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common";
import { prismaClient } from "@repo/db";

const wss = new WebSocketServer({
    port: 8080
})

interface User {
    ws: WebSocket,
    rooms: string[],
    userId: string
}

const users: User[] = [];

function checkUser(token: string) : string | null {
    try{
        const decoded = jwt.verify(token, JWT_SECRET);

        if (typeof decoded == "string"){
            return null;
        }

        if(!decoded || !(decoded as JwtPayload).userId){
            return null;
        }
        
        return decoded.userId;
    } catch(e){
        return null;
    }
    return null;
}

wss.on('connection', function connection(ws, request){
    ws.on('error', console.error);

    const url = request.url;
    if(!url){
        return;
    }

    const queryParams = new URLSearchParams(url.split('?')[1]);
    const token = queryParams.get('token') || "";
    const userId = checkUser(token);
    
    if(userId == null){
        ws.close()
        return null;
    }

    users.push({
        userId,
        rooms: [],
        ws
    })

    ws.on('message',async function message(data){
        const parsedData = JSON.parse(data as unknown as string); // {type: "join_room", roomId: 1}

        const response = await prismaClient.room.findFirst({
            where: {
                id: parsedData.roomId
            }
        })
        if(!response?.id){
            return;
        }

        if (parsedData.type === "join_room"){
            const user = users.find(x => x.ws === ws);
            user?.rooms.push(parsedData.roomId);
        }

        if (parsedData.type === "leave_room"){
            const user = users.find(x => x.ws === ws);
            if (!user){
                return;
            }
            user.rooms = user?.rooms.filter(x => x === parsedData.room);
        }

        if (parsedData.type == "chat"){
            const roomId = parsedData.roomId;
            const message = parsedData.message;

            //use Queues for storing onto the db [better approach]
            await prismaClient.chat.create({
                data: {
                    roomId,
                    message,
                    userId
                }
            })

            users.forEach(user => {
                if (user.rooms.includes(roomId)){
                    user.ws.send(JSON.stringify({
                        type: "chat",
                        message: message,
                        roomId
                    }))
                }
            })
        }
    })
})