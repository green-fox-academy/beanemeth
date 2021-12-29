'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter and draws one square
// Parameter: the square size
// The function shall draw a square of that size to the center of the canvas
// Draw at least 3 squares with that function.
// (the squares should not be filled otherwise they will hide each other)
// Avoid code duplication!


function drawCenterBox (size: number) {
    ctx.strokeStyle = "red";
    let xxx = (canvas.width/2) - (size/2)
    let yyy = (canvas.height/2)- (size/2)
    ctx.strokeRect(xxx, yyy, size, size);

}
let size: number = 50;
for (let sq = 0; sq <3; sq++){

    
    size+=50;
    drawCenterBox(size)


}