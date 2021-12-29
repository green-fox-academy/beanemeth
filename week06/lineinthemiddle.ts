'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the center of the canvas
// draw a green vertical line to the center of the canvas

ctx.strokeStyle ='black'
ctx.beginPath();
ctx.moveTo(0, 150)
ctx.lineTo(150, 150);
ctx.stroke();

ctx.strokeStyle ='green'
ctx.beginPath();
ctx.moveTo(180, 150)
ctx.lineTo(180, 250);
ctx.stroke();
