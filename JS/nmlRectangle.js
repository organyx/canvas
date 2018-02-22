'use strict'

let Rectangle = {
    init(canvas, color, size) {
        this.color = color;
        this.canvas = canvas;
        this.context = this.canvas.getContext();
        // Draw a rectangle
        this.context.fillStyle = color;
        this.context.strokeStyle = color;
        this.context.strokeRect(size[0], size[1], size[2], size[3]);
        this.context.lineWidth = 2;
        this.context.closePath();
        this.context.stroke();
        this.context.fill();
    }
}