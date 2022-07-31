// gets canvas element in index.html
const canvas = document.getElementById('canvas1');
// sets canvas to 2d draw element
const ctx = canvas.getContext('2d');
// set canvas width and height to match style.css
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

// define game speed variable
let gameSpeed = 5;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'media/layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'media/layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'media/layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'media/layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'media/layer-5.png';

let x = 0;
let x2 = 2400;

function animate(){
    // clear canvas of 'old' animation frames
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // use built-in drawImage with ctx variable 
    // and position layer-1 in top-left of canvas
    ctx.drawImage(backgroundLayer4, x, 0);
    // make second copy of layer-1 to double image width
    ctx.drawImage(backgroundLayer4, x2, 0);
    // reset loops to keep image scrolling endlessly
    if (x < -2400) x = 2400 + x2 - gameSpeed;
    else x -= gameSpeed;
    if (x2 < -2400) x2 = 2400 + x - gameSpeed;
    else x2 -= gameSpeed;
    // animate layer-1 in loop
    requestAnimationFrame(animate);
};
animate();