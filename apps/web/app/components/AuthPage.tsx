"use client";
import { useState } from "react";
import Button from "./ui/Button"
import Input from "./ui/Input"

interface AuthPageProps{
    isSignin : boolean
}

export default function AuthPage({isSignin} : AuthPageProps) {
    const [username, setUsername] = useState("username");
    const [password, setPassword] = useState("password");
    return(
        <div className="flex flex-col">
            <Input label={username} onChange={(e) => setUsername(e.target.value)}/>
            <Input label={password} onChange={(e) => setPassword(e.target.value)}/>
            <Button isSignin={isSignin} onClick={() => alert(password)}/>
        </div>
    )
};
