"use client";
import { useState } from "react";
import Button from "./ui/Button"
import Input from "./ui/Input"
import Link from "next/link";

interface AuthPageProps{
    isSignin : boolean
}

export default function AuthPage({isSignin} : AuthPageProps) {
    const [username, setUsername] = useState("Enter your username");
    const [password, setPassword] = useState("Enter your password");
    return(
        <div className="flex flex-col gap-2">
            <h2 className="text-3xl sm:text-4xl font-bold">{isSignin ? "Welcome" : "Create an account"}</h2>
            <p className="text-sm font-light text-gray-500 pb-4 -mt-2">{isSignin ? "Please enter your details to login" : "Please enter your details to create an account"}</p>
            <Input label={username} onChange={(e) => setUsername(e.target.value)} type="username"/>
            <Input label={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
            <Link href="/forgotpassword" className="text-sm text-[#EE66A6] text-right">Forgot password?</Link>
            <Button isSignin={isSignin}/>
            <p className="text-sm text-gray-500 text-center">
                {isSignin ? 
                    <>
                        Don't have an account? <Link href="/signup" className="text-[#EE66A6]">Sign up</Link>
                    </> : 
                    <>
                        Already have an account? <Link href="/signin" className="text-[#EE66A6]">Sign in</Link>
                    </>
                }
                
            </p>
        </div>
    )
};
