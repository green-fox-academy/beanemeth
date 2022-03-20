// Armada
// Create an Armada class
// Contains a list of Ship
// Have a armada.war(otherArmada: Armada) method where two armada can engage in war
// it should work like merge sort
// first ship from the first armada battles the first one from the other
// the loser ship gets skipped so the next ship comes in play from the loser ship's armada
// it starts a battle with the first (not yet defeated) ship from the other armada
// whichever armada gets to the end of its ships loses the war
// return true if this is the winner
import { Ship } from "./ship";
import { Pirate } from './pirates';

export class Armada {
    private listOfShips: Ship[];

    constructor() {
        this.listOfShips = [];
    }
    
    fillArmadawithShips() {
        for (let index = 0; index < Math.floor(Math.random() * 10) + 1; index++) {
            this.listOfShips[index] = new Ship();
            this.listOfShips[index].fillship();
        }
    }
    war(otherArmada: Armada) {

    }
}