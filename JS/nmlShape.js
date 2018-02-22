/*globals document, window */
'use strict';

/**
 * nmlShape.js
 */
let Shape = {
    init(cv, x, y, width, height, color) {
        this.ctx = cv.context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        // this.color = color;
        this.fill = color;
        this.isDragging = false;
    },

    // draw() {
    //     this.ctx.fillStyle = this.color;
    //     this.ctx.fillRect(this.x, this.y, this.width, this.height);
    // },

    // move(dx, dy) {
    //     this.x += dx;
    //     this.y += dy;
    // }
};