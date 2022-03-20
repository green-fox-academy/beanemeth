

'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas

let Startxx = (canvas.width / 2);
let Startyy = (canvas.height / 2)
let sizeSQ = 10
ctx.strokeStyle = "green"
ctx.strokeRect(Startxx, Startyy, sizeSQ , sizeSQ)


/* ANOTHER longer solution, too long..
ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(300, 200);
ctx.lineTo(310, 200)
ctx.stroke()

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(310, 200);
ctx.lineTo(310, 210)
ctx.stroke()

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(310, 210);
ctx.lineTo(300, 210)
ctx.stroke()

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(300, 210);
ctx.lineTo(300, 200)
ctx.stroke() */