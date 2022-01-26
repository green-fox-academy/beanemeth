/* 
Reuse your Animal class
Create a Farm class
it has a list of Animals listOfAnimals
it has a limit that defines how many animals can be kept in the Farm and can be set when the Farm is created
it has two methods:
breed() -> creates a new animal if there's place for it
sell() -> removes the least hungry animal */

'use strict';
import { Animal } from "../../week08/animal/animal";


export class Farm {
    private listOfAnimals: Animal[];
    private farmLimit: number;

    constructor(listOfSharpies: Animal[], farmLimit = 100) {
        this.listOfAnimals = [];
        this.farmLimit = farmLimit;
    }
    // breed() -> creates a new animal if there's place for it
    breed() {
        if (this.farmLimit < 100) {
            this.listOfAnimals.push(new Animal())
        }
    }
    //sell() -> removes the least hungry animal
    sell() {
        let leasthungryAnimal: Animal = this.listOfAnimals[0];

        for (let index = 0; index < this.listOfAnimals.length; index++) {
            if (this.listOfAnimals[index].getHunger() < leasthungryAnimal.getHunger()) {
                leasthungryAnimal = this.listOfAnimals[index];

            }
        }
    }
}