
   
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

let startPux: number = 10;
let startPuy: number = 10;

let sizePuSQ: number = 20;


function drawPurpleStepsBig (startPx: number, startPy: number) {

    ctx.fillStyle = "purple";
    ctx.fillRect(startPux, startPuy, sizePuSQ, sizePuSQ);
}

for (let sq = 0; sq <10; sq++){
    
    startPux +=sizePuSQ;
    startPuy +=sizePuSQ;
    sizePuSQ +=10

    drawPurpleStepsBig(startPux, startPuy) }