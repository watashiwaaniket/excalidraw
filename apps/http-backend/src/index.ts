import express, { json } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common";
import { authMiddleware } from "./middlewares/auth";
import { CreateRoomSchema, CreateUserSchema, SignInSchema } from "@repo/common/types";

const app = express();

app.post("/signup", (req, res) => {
    const data = CreateUserSchema.safeParse(req.body);
    if(!data.success){
        return res.json({
            message : "Incorrect inputs"
        })
    }

    res.json({
        userId : "123"
    })

})

app.post("/signin", (req, res) => {
    const data = SignInSchema.safeParse(req.body);
    if(!data.success){
        return res.json({
            message : "Incorrect inputs"
        })
    }

    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        token
    })
})

app.post("/room", authMiddleware, (req, res) => {
    const data = CreateRoomSchema.safeParse(req.body);
    if(!data.success){
        return res.json({
            message : "Incorrect inputs"
        })
    }

    res.json({
        roomId : 123
    })
})

app.listen(3001, () => {
    console.log("App listening on port 3001")
})