import { CircleIcon, RectangleHorizontal } from "lucide-react";
import { useEffect, useRef } from "react";
import initDraw from "../../draw";

export default function Canvas({
    roomId,
    socket
}: {
    roomId: string;
    socket: WebSocket;
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const buttonStyle = "bg-white p-3 rounded-full cursor-pointer"

    useEffect(() => {
        if(canvasRef.current){
            initDraw(canvasRef.current, roomId, socket);
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
