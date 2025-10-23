import express, { json } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common";
import { authMiddleware } from "./middlewares/auth";
import { CreateRoomSchema, CreateUserSchema, SignInSchema } from "@repo/common";
import { prismaClient } from "@repo/db";
import * as bcrypt from "bcrypt";

const app = express();

app.use(json());

app.post("/signup", async (req, res) => {
    const data = CreateUserSchema.safeParse(req.body);
    if(!data.success){
        return res.json({
            message : "Incorrect inputs"
        })
    }

    const email = data.data.email;
    const password = data.data.password;
    const hashedPassword = bcrypt.hashSync(password, 5);
    const name = data.data.name;
    const photo = data.data.photo;

    try {
        const user = await prismaClient.user.create({
            data : {
                email : email,
                password : hashedPassword,
                name : name,
                photo : photo
            }
        });

        res.json({
            userId : user.id
        });
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({
            message : "User with same email, already exists"
        });
    }
})

app.post("/signin", async (req, res) => {
    const data = SignInSchema.safeParse(req.body);
    if(!data.success){
        return res.json({
            message : "Incorrect inputs"
        })
    }

    const response = await prismaClient.user.findFirst({
        where: {
            email: data.data.email
        }
    })

    if(response?.password && bcrypt.compareSync(data.data.password, response?.password.toString())){
        const token = jwt.sign({
            userId: response.id.toString()
        }, JWT_SECRET);

        res.status(200).json({
            token
        })
    } else{
        res.status(403).json({
            message: "Not Authorized"
        })
    }
})

app.post("/room", authMiddleware, async (req, res) => {
    const parsedData = CreateRoomSchema.safeParse(req.body);
    if(!parsedData.success){
        return res.json({
            message : "Incorrect inputs"
        })
    }
    //@ts-ignore
    const userId = req.userId;

    try{
        const room = await prismaClient.room.create({
            data: {
                slug: parsedData.data.name,
                adminId: userId
            }
        })

        res.json({
            roomId : room.id
        })
    }catch(e){
        res.status(411).json({
            message: "Room already exits with this name"
        })
    }
})

app.get("/chats/:roomId", async (req, res) => {
    try{
        const roomId = Number(req.params.roomId);
        const messages = await prismaClient.chat.findMany({
            where: {
                roomId : roomId
            },
            orderBy: {
                id : "desc"
            },
            take : 50
        })

        res.json(
            messages
        )
    }catch(e){
        res.json({
            message : e
        })
    }
})

app.get("/chats/:slug", async (req, res) => {
    const slug = req.params.slug;
    const room = await prismaClient.room.findFirst({
        where: {
            slug
        }
    })

    res.json(
        room
    )
})

app.listen(3001, () => {
    console.log("App listening on port 3001")
})