'use strict'

let Dot = {
    init(canvas, color) {
        this.color = color;
        this.canvas = canvas;
        this.context = this.canvas.getContext();
        // Draw the face
        this.context.strokeColor = 'black';
        this.context.lineWidth = 2;
        this.context.stroke();
        this.context.fillStyle = "black";
        this.context.fill();

    }
}