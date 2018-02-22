var arr = [];
var canvas;

var redraw = function () {
    //                canvas.clear();     // clear canvas
    //                canvas.prep();      // prep canvas with background color
    for (var i = 0; i < arr.length; i++) {
        arr[i].move();
        arr[i].draw();
    }
}

var repeater = function () {
    setInterval(redraw, 100);
}

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

var initialize = function () {
    let canvas = Object.create(Canvas);
    canvas.init('canvas', '#ffffff');

    let grid = Object.create(Grid);
    grid.init(canvas, 'red');

    let smiley = Object.create(Smiley);
    smiley.init(canvas, '00ff00');
    // let dot = Object.create(Dot);
    // dot.init(canvas, 'black');

    let rectangle = Object.create(Rectangle);
    rectangle.init(canvas, 'red', [115, 215, 315, 215]);

    let rectangle2 = Object.create(Rectangle);
    rectangle2.init(canvas, 'blue', [165, 265, 315, 215]);

    document.getElementById('canvas').addEventListener('click', function (event) {
        var x = event.clientX - 10;
        var y = event.clientY - 10;
        // var normX = normalizeCoords(x, y)[0];
        // var normY = normalizeCoords(x, y)[1];
        var normX = grid.normalizeX(x);
        var normY = grid.normalizeY(y);
        var coords = "X coordinates: " + normX + ", Y coordinates: " + normY;
        // console.log(coords);
        document.getElementById('coords').innerHTML = coords;
    });
}

var nml = window.addEventListener('load', initialize, false);

var normalizeCoords = function (coordX, coordY) {
    // var normX = Math.round((Math.floor(coordX / 10)) / 4);
    // var normY = Math.round((Math.floor(coordY / 10)) / 4);

    return [normX, normY];
}

var normalize = function (coord) {
    return Math.ceil((coord * 10) / 500);
}