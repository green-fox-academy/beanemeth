'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

let startPx: number = 10;
let startPy: number = 10;

let sizePSQ: number = 20;


function drawPurpleSteps (startPx: number, startPy: number) {

    ctx.fillStyle = "purple";
    ctx.fillRect(startPx, startPy, sizePSQ, sizePSQ);
}

for (let sq = 0; sq <20; sq++){

    startPx +=sizePSQ;
    startPy +=sizePSQ;
    
    drawPurpleSteps(startPx, startPy)
} 