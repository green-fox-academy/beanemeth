'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop


let startX: number = 300;
let startY: number = 100;

function drawlineToCenter (startX: number, startY: number) {
ctx.strokeStyle ="red"
    ctx.beginPath();
ctx.moveTo(startX, startY);
ctx.lineTo((canvas.width/2), (canvas.height/2));
ctx.stroke();

}

 //drawlineToCenter(150, 150)

for (let line = 0; line <3; line++){

    startX +=50;
    startY +=50;
    drawlineToCenter(startX, startY)
} 