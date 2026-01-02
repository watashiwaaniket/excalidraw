import {
  ArrowRight,
  CircleIcon,
  RectangleHorizontal,
  Triangle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import initDraw from "../../draw";
import useWindowSize from "../../lib/hooks/useWindowSize";
import { NavButton } from "./NavButton";

type Shape = "circle" | "rect" | "triangle" | "line";

export default function Canvas({
  roomId,
  socket,
}: {
  roomId: string;
  socket: WebSocket;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { height, width } = useWindowSize();
  const [selectedShape, setSelectedShape] = useState<Shape>("circle");

  useEffect(() => {
    if (canvasRef.current) {
      initDraw(canvasRef.current, roomId, socket);
    }
  }, [canvasRef]);

  return (
    <section className="w-screen h-screen overflow-clip">
      <canvas
        ref={canvasRef}
        height={height}
        width={width}
        className="border"
      />
      <div className="absolute bottom-6 w-screen justify-center flex gap-2">
        <NavButton
          icon={<RectangleHorizontal />}
          activated={selectedShape === "rect"}
          onClick={() => {
            setSelectedShape("rect");
          }}
        />
        <NavButton
          icon={<CircleIcon />}
          activated={selectedShape === "circle"}
          onClick={() => {
            setSelectedShape("circle");
          }}
        />
        <NavButton
          icon={<Triangle />}
          activated={selectedShape === "triangle"}
          onClick={() => {
            setSelectedShape("triangle");
          }}
        />
        <NavButton
          icon={<ArrowRight />}
          activated={selectedShape === "line"}
          onClick={() => {
            setSelectedShape("line");
          }}
        />
      </div>
    </section>
  );
}
