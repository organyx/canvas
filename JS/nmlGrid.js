'use strict'

let Grid = {
    init(canvas, color) {
        this.canvas = canvas;
        this.color = color;
        this.height = canvas.canvas.height;
        this.width = canvas.canvas.width;
        this.padding = 10;
        this.cellNumberX = 10;
        this.cellNumberY = 10;

        // for (var x = 0; x <= this.width; x += 100) {
        //     this.canvas.getContext().moveTo(0.5 + x + this.padding, this.padding);
        //     this.canvas.getContext().lineTo(0.5 + x + this.padding, this.height + this.padding);
        // }


        // for (var x = 0; x <= this.height; x += 100) {
        //     this.canvas.getContext().moveTo(this.padding, 0.5 + x + this.padding);
        //     this.canvas.getContext().lineTo(this.width + this.padding, 0.5 + x + this.padding);
        // }

        // this.canvas.getContext().strokeStyle = "black";
        // this.canvas.getContext().stroke();

        // VERTICAL - Y
        for (var x = 0; x <= this.height; x += (this.height / this.cellNumberX)) {
            this.canvas.getContext().moveTo(0, x);
            this.canvas.getContext().lineTo(this.width, x);
        }

        // HORIZONAL - X
        for (var x = 0; x <= this.width; x += (this.width / this.cellNumberY)) {
            this.canvas.getContext().moveTo(x, 0);
            this.canvas.getContext().lineTo(x, this.height);
        }

        this.canvas.getContext().strokeStyle = "black";
        this.canvas.getContext().stroke();
    },

    normalizeX(coordX) {
        return Math.ceil((coordX * this.cellNumberX) / this.height);
    },

    normalizeY(coordY) {
        return Math.ceil((coordY * this.cellNumberY) / this.width);
    }
}