"use client";
import { GrainGradient } from "@paper-design/shaders-react";
import Link from "next/link";
import NavButton from "./ui/NavButton";
import { SparkleIcon } from "lucide-react";
import { ShineButton } from "./ui/ShineButton";
import Hero from "./ui/landing/Hero";
import Features from "./ui/landing/Features";
import { MusicToggleButton } from "./ui/MusicToggleButton";

export default function Landing() {
    return(
        <div className="pt-8 w-screen h-screen flex flex-col items-center">
            <Hero />
            <Features />
        </div>
    )
};
