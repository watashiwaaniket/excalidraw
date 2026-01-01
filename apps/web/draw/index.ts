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

    ctx.fillStyle = "rgba(20, 20, 20)";
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
        existingShape.push({
            type: 'rect',
            x: startX,
            y: startY,
            height,
            width
        })
    })

    canvas.addEventListener("mousemove", (e) => {
        if(clicked){
            const width = e.clientX - startX
            const height = e.clientY - startY
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgba(20, 20, 20)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = "rgba(256, 256, 256)";
            ctx.strokeRect(startX, startY, width, height);
                    
        }
    })
};
