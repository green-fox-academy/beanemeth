
   
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters
// (the square size and the fill color)
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.



//NOT READY


let sqSize: number = 50;

let rainColors: string[] = ["red", "green", "aqua", "magenta", "yellow", "blue"];


function rainbowSQ(squareSize: number, sqColor: string) {
    // ctx.fillStyle = sqColor;
    ctx.strokeStyle = sqColor;
    // ctx.lineWidth = 10;
    let startxx: number = (canvas.width / 2) - (squareSize / 2);
    let startyy: number = (canvas.height / 2) - (squareSize / 2);
    ctx.strokeRect(startxx, startyy, squareSize, squareSize);
}

// rainbowSQ(50, "red");
// rainbowSQ(70, "blue");
// rainbowSQ(100, rainColors[4]);

function generateRandomNum(maxNum): number {
    let randomNum: number = Math.floor(Math.random() * maxNum);
    return randomNum;
}

for (let i: number = 0; i < canvas.height; i += 20) {
    let randomNum: number = generateRandomNum(rainColors.length);
    rainbowSQ(sqSize + i, rainColors[randomNum]);
}

// for (let i: number = 0; i < rainColors.length; i++) {
//     rainbowSQ(sqSize + (5 * i), rainColors[i])
// } 
/* THIS IS ANOTHER SOLUTION
function drawColoredCenterSquare (size: number, color: string) {
    let middleX: number = canvas.width/2
    let middleY: number = canvas.height/2
    ctx.strokeStyle = color;
    ctx.strokeRect((middleX-size/2), (middleY-size/2), size, size);
};
let rainbow: string [] = ['red', 'orange', 'yellow', "green", 'blue', 'indigo', 'purple'];
let startSize: number = 10;
let increaseSize: number = 10;


for (let canvasY = 0; canvasY <= canvas.height; canvasY+=20) {   
    for (let i = 0; i < rainbow.length; i++) {
        drawColoredCenterSquare (startSize, rainbow[i])
        startSize += increaseSize
    };
}; */