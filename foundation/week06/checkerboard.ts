'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern

/*
let squareSize: number = canvas.height / 8

for (let rows = 0; rows < canvas.width; rows++) {
    for (let colums = 0; colums < canvas.height; colums++) {
        if (colums % 2 === rows % 2) {
            ctx.fillStyle = "black"
            ctx.fillRect(rows * squareSize, colums * squareSize, squareSize, squareSize);
        } else {
            ctx.fillStyle = "white"
            ctx.fillRect(rows * squareSize, colums * squareSize, squareSize, squareSize);

        }
    }
} */

let startCheckerx: number = 0;
let startCheckery: number = 0;

let sizeCheck: number = 50;
let checkboardcolor: string[] = ['white', 'black']


function drawCheckBoard(startx: number, starty: number, color: string, size: number) {


    ctx.fillStyle = color;
    ctx.fillRect(startx, starty, size, size);
}

for (let k = 1; k < canvas.height; k++) {
   
    startCheckerx = 0;


    for (let index = 0; index < canvas.width; index++) {

        if (k%2!==0) {
            
        
        for (let j = 0; j < checkboardcolor.length; j++) {

            drawCheckBoard(startCheckerx, startCheckery, checkboardcolor[j], sizeCheck)
            startCheckerx += sizeCheck

        }
    } else{
        for (let j = checkboardcolor.length-1; j >= 0; j--) {

            drawCheckBoard(startCheckerx, startCheckery, checkboardcolor[j], sizeCheck)
            startCheckerx += sizeCheck

        } }
    }

    startCheckery += sizeCheck
} 

/* let sqSize: number = canvas.height / 8
let color: string

for (let j = 0; j < canvas.width / sqSize; j++) {
    function drawChess(color1: string, color2: string) {
        for (let i = 0; i < canvas.height / sqSize; i++) {
            if (i % 2 === 0) {
                color = color1
            } else color = color2
            ctx.fillStyle = color;
            ctx.fillRect(j * sqSize, i * sqSize, sqSize, sqSize);
        }
    }

    if (j % 2 === 0) { drawChess("white", "black") }
    else { drawChess("black", "white",) }
}
*/