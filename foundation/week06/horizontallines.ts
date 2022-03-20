'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a 50-long long horizontal line from that point
// Draw at least 3 lines with that function using a loop

let startX: number = 100;
let startY: number = 50;

function drawhorizontalline (startX: number, startY: number) {
ctx.strokeStyle ="red"
    ctx.beginPath();
ctx.moveTo(startX, startY);
ctx.lineTo(startX+=50, startY);
ctx.stroke();

}

 

for (let linecount = 0; linecount <3; linecount++){

    startX ;
    startY +=50;
    
    drawhorizontalline(startX, startY)
} 