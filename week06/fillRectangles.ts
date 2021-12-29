
   
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles
// Avoid code duplication!


let x: number = 10;
let y: number = 10;
let width: number = 20;
let height: number = 30;

let colors: string[] = ["red", "green", "aqua", "magenta"]

for (let i: number = 0; i < 4; i++) {
    ctx.fillStyle = colors[i];
    ctx.fillRect(x, y, width, height);
    x += width + 10;
    height += 10;
    
}

/*OR for (let i= 0; i< 4; i++){
ctx.fillStyle = colors[i];
ctx.fillRect(i*size*3, i*size *3, size+10*i, size+10*i);
}*/