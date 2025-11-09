"use client";
import { SparkleIcon } from "lucide-react";
import { ShineButton } from "./components/ui/ShineButton";
import { GrainGradient } from "@paper-design/shaders-react";
import Button from "./components/ui/Button";
import NavButton from "./components/ui/NavButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-8 w-screen h-screen flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full min-h-180 rounded-4xl relative overflow-clip">
        <GrainGradient
            style={{height: "100%", width: "100%", position: "absolute", zIndex: "0"}}
            colorBack="hsl(0, 0%, 8%)"
            colors={["#9929EA", "#EE66A6", "#63C8FF", "#F6DC43"]}
            softness={0.5}
            className="opacity-96"
            intensity={0.2}
            noise={0.3}
            shape="sphere"
            offsetX={0}
            offsetY={0}
            scale={0.9}
            rotation={0}
            speed={1}
          />
          <div className="p-6 absolute flex w-full justify-between">
            <h1 className="text-neutral-100 text-2xl">
              WIREDRAW
            </h1>
            <Link href={'/signin'}><NavButton label="login" /></Link>
          </div>
      </div>

      <section className="pt-20 flex flex-col items-center">
        <div className="flex p-4">
          <ShineButton label="Realtime Collaboration" Icon={SparkleIcon}/>
        </div>
        <h2 className="text-4xl w-100 text-center">
          Brainstorm with collegues & friends in realtime
        </h2>
      </section>
    </div>
  );
}
