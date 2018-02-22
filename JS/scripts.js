var arr = [];
var canvas;

// var redraw = function () {
//     //                canvas.clear();     // clear canvas
//     //                canvas.prep();      // prep canvas with background color
//     for (var i = 0; i < arr.length; i++) {
//         arr[i].move();
//         arr[i].draw();
//     }
// }

var repeater = function () {
    setInterval(redraw, 100);
}

var initialize = function () {
    $('b1').addEventListener('click', moveShapes); // a couple of button eventlisteners 
    $('b2').addEventListener('click', moveShapes);
    $('b3').addEventListener('click', moveShapes);
    $('b4').addEventListener('click', moveShapes);

    mycv = Object.create(Canvas); // create canvas object
    mycv.init('myCanvas', 'transparent');


    let shape1 = Object.create(Shape); // create objects
    shape1.init(mycv, 20, 10, 120, 40, 'blue'); // put in array

    let shape2 = Object.create(Shape);
    shape2.init(mycv, 200, 100, 80, 60, 'green');

    let shape3 = Object.create(Shape);
    shape3.init(mycv, 50, 200, 160, 40, 'red');

    let shape4 = Object.create(Shape);
    shape4.init(mycv, 300, 50, 90, 80, 'yellow');

    shapes.push(shape1);
    shapes.push(shape2);
    shapes.push(shape3);
    shapes.push(shape4);
    redraw(mycv, shapes);
}

let redraw = function (cv, arr) {
    cv.clear();
    cv.prep();
    for (let i = 0; i < arr.length; i++) { // loop through array of shapes and draw
        arr[i].draw();
    }
}

let moveShapes = function (ev) {
    if (ev.target.id === 'b1') { // which button was hit
        shapes[0].move(2, 4);
    } else if (ev.target.id === 'b2') {
        shapes[1].move(3, -3);
    } else if (ev.target.id === 'b3') {
        shapes[2].move(3, -3);
    } else {
        shapes[3].move(3, -3);
    }
    redraw(mycv, shapes);
}

var shapes = [];
var mycv;

// var initialize = function () {
//     let canvas = Object.create(Canvas);
//     canvas.init('canvas', '#ffff88');
//     let u = Object.create(Umo);
//     u.init(canvas, 'red');
//     arr.push(u);
//     u = Object.create(Umo);
//     u.init(canvas, 'blue');
//     arr.push(u);
//     /*
//                     u = new Umo(canvas, '#cc0000');
//                     arr.push(u);
//                     u = new Umo(canvas, '#009900');
//                     arr.push(u);
//     */
//     repeater();
// }

// var initialize = function () {
//     let canvas = Object.create(Canvas);
//     canvas.init('canvas', '#ffffff');

//     let grid = Object.create(Grid);
//     grid.init(canvas, 'red');

//     let smiley = Object.create(Smiley);
//     smiley.init(canvas, '00ff00');
//     // let dot = Object.create(Dot);
//     // dot.init(canvas, 'black');

//     let rectangle = Object.create(Rectangle);
//     rectangle.init(canvas, 'red', [115, 215, 315, 215]);

//     let rectangle2 = Object.create(Rectangle);
//     rectangle2.init(canvas, 'blue', [165, 265, 315, 215]);

//     document.getElementById('canvas').addEventListener('click', function (event) {
//         var x = event.clientX - 10;
//         var y = event.clientY - 10;
//         // var normX = normalizeCoords(x, y)[0];
//         // var normY = normalizeCoords(x, y)[1];
//         var normX = grid.normalizeX(x);
//         var normY = grid.normalizeY(y);
//         var coords = "X coordinates: " + normX + ", Y coordinates: " + normY;
//         // console.log(coords);
//         document.getElementById('coords').innerHTML = coords;
//     });
// }

var nml = window.addEventListener('load', initialize, false);