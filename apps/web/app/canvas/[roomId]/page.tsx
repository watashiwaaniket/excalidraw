"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { AUTH_TOKEN, WS_URL } from "../../../config";
import Canvas from "../../components/Canvas";

export default function Page() {
  const params = useParams<{ roomId: string }>();
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(
      `${WS_URL}?token=${AUTH_TOKEN}`
    );

    ws.onopen = () => {
      setSocket(ws);
      ws.send(
        JSON.stringify({
          type: "join_room",
          roomId: params.roomId,
        })
      );
    };
  }, []);

  if (!socket) {
    return (
      <section className="w-screen h-screen flex items-center justify-center">
        <p className="text-neutral-900 animate-pulse">
          Connecting to the server...
        </p>
      </section>
    );
  }

  return (
    <>
      <Canvas roomId={params.roomId} socket={socket} />
    </>
  );
}
