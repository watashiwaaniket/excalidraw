import { z } from "zod";

export const CreateUserSchema = z.object({
    email : z.string().email().min(3).max(50),
    password : z.string().min(5).max(20),
    name : z.string().min(3).max(20).optional(),
    photo : z.string().optional()
})

export const SignInSchema = z.object({
    email : z.string().email().min(3).max(50),
    password : z.string().min(5).max(20),
})

export const CreateRoomSchema = z.object({
    name : z.string().min(3).max(20),
})