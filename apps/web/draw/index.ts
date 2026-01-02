import axios from "axios";
import {
  CANVAS_DEFAULT_BACKGROUND,
  CANVAS_DEFAULT_SHAPE_COLOR,
} from "../lib/constant";
import { HTTP_BACKEND } from "../config";

type Shape =
  | {
      type: "rect";
      x: number;
      y: number;
      height: number;
      width: number;
    }
  | {
      type: "circle";
      centerX: number;
      centerY: number;
      radius: number;
    };

export default async function initDraw(
  canvas: HTMLCanvasElement,
  roomId: string,
  socket: WebSocket
) {
  const ctx = canvas.getContext("2d");

  let existingShape: Shape[] = await getExistingShapes(roomId);

  if (!ctx) return;

  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);

    if (message.type == "chat") {
      const parsedShape = JSON.parse(message.message);
      existingShape.push(parsedShape.shape);
      canvasDrawLogic(existingShape, canvas, ctx);
    }
  };

  canvasDrawLogic(existingShape, canvas, ctx);
  let clicked = false;
  let startX = 0;
  let startY = 0;

  canvas.addEventListener("mousedown", (e) => {
    clicked = true;
    const rect = canvas.getBoundingClientRect();
    startX = e.clientX - rect.left;
    startY = e.clientY - rect.top;
  });

  canvas.addEventListener("mouseup", (e) => {
    clicked = false;
    const rect = canvas.getBoundingClientRect();
    const endX = e.clientX - rect.left;
    const endY = e.clientY - rect.top;
    const width = endX - startX;
    const height = endY - startY;
    const shape: Shape = {
      type: "rect",
      x: startX,
      y: startY,
      height,
      width,
    };

    if (height !== 0 || width !== 0) {
      existingShape.push(shape);
      console.log(existingShape);
      canvasDrawLogic(existingShape, canvas, ctx);

      socket.send(
        JSON.stringify({
          type: "chat",
          message: JSON.stringify({
            shape,
          }),
          roomId: Number(roomId),
        })
      );
    }
  });

  canvas.addEventListener("mousemove", (e) => {
    if (clicked) {
      const rect = canvas.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;
      const width = currentX - startX;
      const height = currentY - startY;
      canvasDrawLogic(existingShape, canvas, ctx);
      ctx.strokeStyle = CANVAS_DEFAULT_SHAPE_COLOR;
      ctx.strokeRect(startX, startY, width, height);
    }
  });
}

function canvasDrawLogic(
  existingShape: Shape[],
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = CANVAS_DEFAULT_BACKGROUND;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  existingShape.map((shape) => {
    if (shape.type === "rect") {
      ctx.strokeStyle = CANVAS_DEFAULT_SHAPE_COLOR;
      ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
    }
  });
}

async function getExistingShapes(roomId: string) {
  const res = await axios.get(`${HTTP_BACKEND}/chats/${roomId}`);
  const messages = res.data;
  console.log(messages);

  const shapes = messages.map((x: { message: string }) => {
    const messageData = JSON.parse(x.message);
    return messageData.shape;
  });

  return shapes;
}
