"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();

  return (
    <div style={{
      "width" : "100vw",
      "height" : "100vh",
      "display" : "flex",
      "justifyContent" : "center",
      "alignItems" : "center",
      "backgroundColor" : "#FAF8F1"
    }}>
      <div style={{
        "display" : "flex",
        "flexDirection" : "column",
        "gap" : "8px",
        "width" : "210px",
        // "border" : "1px solid #fff",
        "padding" : "20px",
        "borderRadius" : "10px",
        "backgroundColor" : "#FFE6D4",
        "filter" : "drop-shadow(12px 12px 12px #FFC69D)"
      }}>
        <input 
          value={roomId}
          onChange={(e) => {
            setRoomId(e.target.value);
          }} 
          type="text" 
          placeholder="Room ID"
          className="border border-[#FAF8F1] p-1 rounded-sm bg-[#FAF8F1]"
        />
        <button 
          onClick={() => {
            router.push(`/room/${roomId}`);
          }}
          style={{
            "padding" : "4px",
            "borderRadius" : "6px",
            "border" : "1px solid #FFE6D4",
            "cursor" : "pointer",
            "backgroundColor" : "#FAF8F1",
            "color" : "#C66E52"
          }}
        >
          Join Room
        </button>
      </div>
    </div>
  );
}
