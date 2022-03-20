'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Fill the canvas with lines from the edges (every 20 px) to the center

let startXx: number = 0;
let startYy: number = 0;

function drawSingleLineToCenter(xstart: number, ystart: number){
    ctx.strokeStyle ="blue"
    ctx.beginPath();
ctx.moveTo(startXx, startYy);
ctx.lineTo((canvas.width/2), (canvas.height/2));
ctx.stroke();
}
let lineDistance = 20;

for (let linetocenter = 0; linetocenter <canvas.width; linetocenter+=lineDistance){
    
    
    drawSingleLineToCenter(startXx, startYy)
    startXx +=lineDistance;
} 
for (let linetocenter = 0; linetocenter <canvas.height; linetocenter+=lineDistance){
    
    
    drawSingleLineToCenter(startXx, startYy)
    startYy +=lineDistance;
}

for (let linetocenter = 0; linetocenter <canvas.width; linetocenter+=lineDistance){
    
    
    drawSingleLineToCenter(startXx, startYy)
    startXx -=lineDistance;
} 
for (let linetocenter = 0; linetocenter <canvas.height; linetocenter+=lineDistance){
    
    
    drawSingleLineToCenter(startXx, startYy)
    startYy -=lineDistance;
}