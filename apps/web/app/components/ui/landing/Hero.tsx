import { GrainGradient } from "@paper-design/shaders-react";
import Link from "next/link";
import NavButton from "../NavButton";

export default function Hero() {
    return(
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
    )
};
