import { Plants } from './plants';
import { Flower } from './flowers';
import { Tree } from './trees';
import { Garden } from './garden';

// The program should demonstrate an example garden with two flowers (yellow and blue) and two trees (purple and orange). 
let exampleGarden= new Garden();



let yellowFlower = new Flower('yellow');
exampleGarden.addPlant(yellowFlower);
let blueFlower = new Flower('blue');
exampleGarden.addPlant(blueFlower);

let purpleTree = new Tree('purple');
exampleGarden.addPlant(purpleTree);

let orangeTree = new Tree('orange');
exampleGarden.addPlant(orangeTree);

console.log(exampleGarden.printGardenStatus());
console.log(exampleGarden.wateringPlants(40));
console.log(exampleGarden.printGardenStatus());
console.log(exampleGarden.wateringPlants(70));
console.log(exampleGarden.printGardenStatus());
/*console.log(exampleGarden)
orangeTree.tellPlantsStatus();
console.log(exampleGarden.wateringPlants(70));
console.log(exampleGarden.wateringPlants(70));
orangeTree.tellPlantsStatus();*/