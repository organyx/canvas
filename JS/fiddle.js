var canvas, ctx, BB, offsetX, offsetY, WIDTH, HEIGHT, drag, startX, startY, rects;

function initialize() {
    // prepare canvas elements
    prepareCanvas();

    // drag related variables
    drag = false;

    // create objects for the canvas
    createObjects();

    // set up event listeners
    setEventListeners(canvas);

    // call to draw the scene
    draw();
}

function prepareCanvas() {
    // get canvas related references
    canvas = Object.create(Canvas);
    canvas.init('canvas', "#FAF7F8");
    ctx = canvas.getContext();
    BB = canvas.getBoundingClientRect();
    offsetX = BB.left;
    offsetY = BB.top;
    WIDTH = canvas.getWidth();
    HEIGHT = canvas.getHeight();
}

// create objects
function createObjects() {
    // an array of objects that define different rectangles
    rects = [];

    var rect1 = Object.create(Shape);
    rect1.init(canvas, 60, 35, 30, 30, '#444444');

    var rect2 = Object.create(Shape);
    rect2.init(canvas, 30, 85, 30, 30, '#ff550d');

    var rect3 = Object.create(Shape);
    rect3.init(canvas, 120, 40, 30, 30, '#800080');

    var rect4 = Object.create(Shape);
    rect4.init(canvas, 300, 120, 30, 30, '#0c64e8');

    rects.push(rect1);
    rects.push(rect2);
    rects.push(rect3);
    rects.push(rect4);

    console.log(rects);
}

// draw a single rect
function rect(x, y, w, h) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.fill();
}

// clear the canvas
function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

// redraw the scene
function draw() {
    clear();
    ctx.fillStyle = "#FAF7F8";
    rect(0, 0, WIDTH, HEIGHT);
    // redraw each rect in the rects[] array
    for (var i = 0; i < rects.length; i++) {
        var rectangle = rects[i];
        ctx.fillStyle = rectangle.fill;
        rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    }
}

// set event listeners
function setEventListeners(canvas) {
    // listen for mouse events
    canvas.onMouseDown(mDown);
    canvas.onMouseUp(mUp);
    canvas.onMouseMove(mMove);
}

// handle mousedown events
function mDown(e) {

    // tell the browser we're handling this mouse event
    e.preventDefault();
    e.stopPropagation();

    // get the current mouse position
    var mouseX = parseInt(e.clientX - offsetX);
    var mouseY = parseInt(e.clientY - offsetY);

    // test each rect to see if mouse is inside
    drag = false;
    for (var i = 0; i < rects.length; i++) {
        var rectangle = rects[i];
        if (mouseX > rectangle.x && mouseX < rectangle.x + rectangle.width && mouseY > rectangle.y && mouseY < rectangle.y + rectangle.height) {
            // if yes, set that rects isDragging=true
            drag = true;
            rectangle.isDragging = true;
        }
    }
    // save the current mouse position
    startX = mouseX;
    startY = mouseY;
}


// handle mouseup events
function mUp(e) {
    // tell the browser we're handling this mouse event
    e.preventDefault();
    e.stopPropagation();

    // clear all the dragging flags
    drag = false;
    for (var i = 0; i < rects.length; i++) {
        rects[i].isDragging = false;
    }
}


// handle mouse moves
function mMove(e) {
    // if we're dragging anything...
    if (drag) {

        // tell the browser we're handling this mouse event
        e.preventDefault();
        e.stopPropagation();

        // get the current mouse position
        var mouseX = parseInt(e.clientX - offsetX);
        var mouseY = parseInt(e.clientY - offsetY);

        // calculate the distance the mouse has moved
        // since the last mousemove
        var dx = mouseX - startX;
        var dy = mouseY - startY;

        // move each rect that isDragging 
        // by the distance the mouse has moved
        // since the last mousemove
        for (var i = 0; i < rects.length; i++) {
            var r = rects[i];
            if (r.isDragging) {
                r.x += dx;
                r.y += dy;
            }
        }

        // redraw the scene with the new rect positions
        draw();

        // reset the starting mouse position for the next mousemove
        startX = mouseX;
        startY = mouseY;

    }
}

var nml = window.addEventListener('load', initialize, false);