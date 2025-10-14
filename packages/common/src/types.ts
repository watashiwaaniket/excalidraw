import { z } from "zod";

export const CreateUserSchema = z.object({
    email : z.email().min(3).max(20),
    password : z.string().min(5).max(20),
    name : z.string().min(3).max(20),
    photo : z.string(),
    chats : z.array,
    rooms : z.array

})

export const SignInSchema = z.object({
    username : z.string().min(3).max(20),
    password : z.string().min(5).max(20),
})

export const CreateRoomSchema = z.object({
    name : z.string().min(3).max(20),
})