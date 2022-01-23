/* Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie, named listOfSharpies
it has a method that adds a new Sharpie to the set: add(sharpie: Sharpie)
it has a method that returns the number of usable Sharpies: countUsable() -> sharpie is usable if it contains ink
it has a method that removes all unusable Sharpies: removeTrash() */

'use strict';
import { Sharpie } from "../sharpie/sharpie";

export class SharpieSet {
    private listOfSharpies: Sharpie[];

    constructor(listOfSharpies: Sharpie[]) {
        this.listOfSharpies = [];
    }
    //it has a method that adds a new Sharpie to the set: add(sharpie: Sharpie)
    add(sharpie: Sharpie) {
        this.listOfSharpies.push(sharpie); //SharpieSet.add(kekSharpie vagy mas valtozoneve)
    }
    //it has a method that returns the number of usable Sharpies: countUsable() -> sharpie is usable if it contains ink
    countUsable() {
        let usableSharpies: number = 0;
        for (let index = 0; index < this.listOfSharpies.length; index++) {
            if (this.listOfSharpies[index].getInkamount() > 0) {
                usableSharpies++;
            }
        }
    }
    // it has a method that removes all unusable Sharpies: removeTrash()
    removeTrash() {
        let emptySharpies: number = 0;
        for (let index = 0; index < this.listOfSharpies.length; index++) {
            if (this.listOfSharpies[index].getInkamount() == 0) {
                emptySharpies++;
            }
        }
    }
}