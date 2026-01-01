"use client";
import { useEffect, useRef } from "react"
import initDraw from "../../../draw";

export default function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if(canvasRef.current){
            initDraw(canvasRef.current);
        }
    }, [canvasRef]);

    return(
        <section>
            <canvas ref={canvasRef} height={720} width={1280} className="border">

            </canvas>
        </section>
    )
};
