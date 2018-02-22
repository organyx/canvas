'use strict'

let Smiley = {
    init(canvas, color) {
        this.color = color;
        this.canvas = canvas;
        this.context = this.canvas.getContext();
        // Draw the face
        this.context.fillStyle = "yellow";
        this.context.beginPath();
        this.context.arc(95, 85, 40, 0, 2 * Math.PI);
        this.context.closePath();
        this.context.fill();
        this.context.lineWidth = 2;
        this.context.stroke();
        this.context.fillStyle = "black";

        // Draw the left eye
        this.context.beginPath();
        this.context.arc(75, 75, 5, 0, 2 * Math.PI);
        this.context.closePath();
        this.context.fill();

        // Draw the right eye
        this.context.beginPath();
        this.context.arc(114, 75, 5, 0, 2 * Math.PI);
        this.context.closePath();
        this.context.fill();

        // Draw the mouth
        this.context.beginPath();
        this.context.arc(95, 90, 26, Math.PI, 2 * Math.PI, true);
        this.context.closePath();
        this.context.fill();

        // Write "Hello, World!"
        this.context.font = "30px Garamond";
        this.context.fillText("Hello, World!", 15, 175);
    }
}