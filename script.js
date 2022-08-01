// gets canvas element in index.html
const canvas = document.getElementById('canvas1');
// sets canvas to 2d draw element
const ctx = canvas.getContext('2d');
// set canvas width and height to match style.css
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

// define game speed variable
let gameSpeed = 10;

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

// JS class to define properties of each background layer
class Layer {
    constructor(image, speedModifier){
        // sets x and y coordinates of each layer to 0
        this.x = 0;
        this.y = 0;
        // sets width and height to match image size
        this.width = 2400;
        this.height = 700;
        // sets repeat image to start at end of first image
        this.x2 = this.width;
        // sets image value to match image argument passed to function
        this.image = image;
        // sets speedModifier to match speedModifier argument passed to function
        this.speedModifier = speedModifier;
        // ties layer speed to global gameSpeed variable
        this.speed = gameSpeed * this.speedModifier;
    }
    // method to scroll layers horizontally and reset when off screen
    update(){
        this.speed = gameSpeed * this.speedModifier;
        // if image goes offscreen (width -2400px) 
        if (this.x <= -this.width){
            // set width to position of repeat image, 
            // offset by speed to prevent image gap
            this.x = this.width + this.x2 - this.speed;
        }
        if (this.x2 <= -this.width){
            // set width to position of repeat image, 
            // offset by speed to prevent image gap
            this.x2 = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }
    // method to draw 2 copies of layer on canvas at new position
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}

// creates new variables using Layer class for each image
const layer1 = new Layer(backgroundLayer1, 0.2);
const layer2 = new Layer(backgroundLayer2, 0.4);
const layer3 = new Layer(backgroundLayer3, 0.6);
const layer4 = new Layer(backgroundLayer4, 0.8);
const layer5 = new Layer(backgroundLayer5, 1);

// puts all five layers in one array variable
const gameObjects = [layer1, layer2, layer3, layer4, layer5];

function animate(){
    // clear canvas of 'old' animation frames
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gameObjects.forEach(object => {
        object.update();
        object.draw();
    });
    requestAnimationFrame(animate);
};
animate();