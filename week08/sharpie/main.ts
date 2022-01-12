'use strict';
import { Sharpie } from "./sharpie";


let pinkSharpie = new Sharpie("pink", 5);
let greenSharpie = new Sharpie("green", 6);

console.log(pinkSharpie);
pinkSharpie.use();
console.log(pinkSharpie)