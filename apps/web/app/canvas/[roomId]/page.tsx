"use client";
import { useEffect, useRef } from "react"
import initDraw from "../../../draw";
import { CircleIcon, RectangleHorizontal } from "lucide-react";

export default function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const buttonStyle = "bg-white p-3 rounded-full cursor-pointer"

    useEffect(() => {
        if(canvasRef.current){
            initDraw(canvasRef.current);
        }
    }, [canvasRef]);

    return(
        <section>
            <canvas ref={canvasRef} height={920} width={1680} className="border" />
            <div className="absolute bottom-6 right-1/2 flex gap-2">
                <button className={buttonStyle}><RectangleHorizontal color="black"/></button>
                <button className={buttonStyle}><CircleIcon color="black"/></button>
            </div>
        </section>
    )
};
