/*globals document, window */
'use strict';

/**
 * Canvas object
 */
let Canvas = {
    init(canvasId, color) {
        this.canvas = $(canvasId);
        this.context = this.canvas.getContext("2d");
        this.color = color;
        this.prep();
    },
    prep() {
        this.context.fillStyle = this.color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.strokeStyle = '#ffffff';
        this.context.stroke();
    },
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    getContext() {
        return this.context;
    },
    getHeight() {
        return this.canvas.height;
    },
    getWidth() {
        return this.canvas.width;
    },
    getBoundingClientRect() {
        return this.canvas.getBoundingClientRect();
    },
    onMouseDown(event) {
        this.canvas.onmousedown = event;
    },
    onMouseUp(event) {
        this.canvas.onmouseup = event;
    },
    onMouseMove(event) {
        this.canvas.onmousemove = event;
    }
};