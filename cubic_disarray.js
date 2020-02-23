var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var size = 320;
var dpr = window.devicePixelRatio;
var widthAndHeight = size * dpr;
canvas.width = widthAndHeight;
canvas.height = widthAndHeight;

ctx.scale(dpr, dpr);
ctx.lineWidth = 2;
var SQUARE_SIZE = 30;


function draw(width, height) {
    ctx.beginPath();
    ctx.rect(-width / 2, -height / 2, width, height);
    ctx.stroke();
}


function drawSquares() {
    numOfSquares = widthAndHeight / SQUARE_SIZE;
    for (let i = SQUARE_SIZE; i <= size - SQUARE_SIZE; i += SQUARE_SIZE) {
        for (let j = SQUARE_SIZE; j <= size - SQUARE_SIZE; j += SQUARE_SIZE) {
            ctx.save();
            ctx.translate(i + 10, j + 10);
            draw(SQUARE_SIZE, SQUARE_SIZE);
            ctx.restore()
        }
    }
}

drawSquares();

