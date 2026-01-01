import axios from "axios";
import { CANVAS_DEFAULT_BACKGROUND, CANVAS_DEFAULT_SHAPE_COLOR } from "../lib/constant";
import { HTTP_BACKEND } from "../config";

type Shape = {
    type: 'rect';
    x: number;
    y: number;
    height: number;
    width: number;
} | {
    type: 'circle';
    centerX: number;
    centerY: number;
    radius: number;
}

export default function initDraw(canvas : HTMLCanvasElement) {
    
    const ctx = canvas.getContext("2d");

    let existingShape: Shape[] = [];

    if(!ctx) return;

    ctx.fillStyle = CANVAS_DEFAULT_BACKGROUND
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    let clicked = false;
    let startX = 0
    let startY = 0

    canvas.addEventListener("mousedown", (e) => {
        clicked = true
        startX = e.clientX
        startY = e.clientY
    })

    canvas.addEventListener("mouseup", (e) => {
        clicked = false
        const width = e.clientX - startX
        const height = e.clientY - startY
        if (height !== 0 || width !== 0){
            existingShape.push({
                type: 'rect',
                x: startX,
                y: startY,
                height,
                width
            })
            console.log(existingShape)
        }
    })

    canvas.addEventListener("mousemove", (e) => {
        if(clicked){
            const width = e.clientX - startX
            const height = e.clientY - startY
            canvasDrawLogic(existingShape, canvas, ctx)
            ctx.strokeStyle = CANVAS_DEFAULT_SHAPE_COLOR
            ctx.strokeRect(startX, startY, width, height);
        }
    })
};

function canvasDrawLogic(existingShape: Shape[], canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = CANVAS_DEFAULT_BACKGROUND
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    existingShape.map((shape) => {
        if (shape.type === "rect"){
            ctx.strokeStyle = CANVAS_DEFAULT_SHAPE_COLOR
            ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
        }
    })
}

function getExistingShapes(roomId: string){
    axios.get(`${HTTP_BACKEND}/chats/${roomId}`)
}