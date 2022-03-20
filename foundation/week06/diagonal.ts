'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line
// Use this function to draw the canvas' diagonals
// If the line starts from the upper-left corner it should be green, otherwise it should be red
// Make decision about the color in the function



function drawDiagonal(startXx: number, startYy: number, endX: number, endY: number) {
    ctx.beginPath();
ctx.moveTo(startXx, startYy);
ctx.lineTo(endX, endY);
ctx.strokeStyle ="";
ctx.stroke();
if (startXx==0 && startYy ==0 ) {
    ctx.strokeStyle = "green";
    ctx.stroke();
  } else {
    
    (startYy>=0); //mivel van masik atlo is, ezert eleg ha az y-t nezzuk
    ctx.strokeStyle = 'red'
    ctx.stroke();
  } 
} 
drawDiagonal(0, 0, 150, 150)



