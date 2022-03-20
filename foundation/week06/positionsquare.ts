'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws one square
// Parameters: the x and y coordinates of the square's top left corner
// The function shall draw a 50x50 square from that point
// Draw 3 squares with that function
// Avoid code duplication!

let x: number = 200;
let y: number = 200;




function drawSquare (x: number, y: number) {
    let sizePSQ: number = 50;
    ctx.strokeRect(x, y, sizePSQ, sizePSQ);
}

for (let sq = 0; sq <3; sq++){

    x +=70;
    y ;
    
    drawSquare(x, y)
} 