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

var randomDisplacement = 15
var rotateMultiplier = 20;
var offset = 10;

function draw(width, height) {
    ctx.beginPath();
    ctx.rect(-width / 2, -height / 2, width, height);
    ctx.stroke();
}


function drawSquares() {
    for (let i = SQUARE_SIZE; i <= size - SQUARE_SIZE; i += SQUARE_SIZE) {
        for (let j = SQUARE_SIZE; j <= size - SQUARE_SIZE; j += SQUARE_SIZE) {
            ctx.save();
            var plusOrMinus = Math.random() > 0.5 ? -1 : 1;
            var rotateAmt = j / size * Math.PI / 180 * plusOrMinus * Math.random() * rotateMultiplier;

            plusOrMinus = Math.random() > 0.5 ? -1 : 1;
            var translateAmt = j / size * plusOrMinus * Math.random() * randomDisplacement;

            ctx.translate(i + translateAmt + offset, j + offset);
            ctx.rotate(rotateAmt);
            draw(SQUARE_SIZE, SQUARE_SIZE);
            ctx.restore();
        }
    }
}

function fillBackgroundWhite(context) {
    // Fill background with white.
    context.save();
    context.globalCompositeOperation = 'destination-over';
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.restore();
}

drawSquares();
fillBackgroundWhite(ctx);

