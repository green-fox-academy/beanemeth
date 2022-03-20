/* The place for the Pirates

Create a Ship class.
The Ship stores Pirateinstances in a list as the crew and has one captain who is also a Pirate.
When a ship is created it doesn't have a crew or a captain.
The ship can be filled with pirates and a captain via fillShip() method.
fills the ship with a captain and a random (maximum 113) number of pirates
Ships should be represented in a nice way on command line including information about
rum consumed by the captain and its state (dead or alive)
number of alive pirates in the crew
Ships should have a method to battle other ships: ship.battle(otherShip: Ship)
should return true if the actual ship (this) wins
the ship should win if its calculated score is higher
calculated score: Number of alive pirates in the crew - Number of consumed rum by the captain
The loser crew has a random number of losses (deaths).
The winning captain and crew has a party: everyone drinks a random number of rum :) */
import { Pirate } from './pirates';
import { getRandomInt } from "./random";

export class Ship {
    private captain: Pirate = new Pirate();
    private listOfPirates: Pirate[];

    constructor() {
        this.listOfPirates = [];
    }

    fillship() {
        let randomNumberCrew: number = getRandomInt(1, 113)
        for (let index = 0; index <= randomNumberCrew; index++) {
            this.listOfPirates.push(new Pirate())
        }
        this.captain = new Pirate();
    }
    // Ships should have a method to battle other ships: ship.battle(otherShip: Ship)
    // should return true if the actual ship (this) wins
    // the ship should win if its calculated score is higher
    // calculated score: Number of alive pirates in the crew - Number of consumed rum by the captain!!!!!!!!
    // The loser crew has a random number of losses (deaths).
    // The winning captain and crew has a party: everyone drinks a random number of rum :)
    getNumberOfAlivePirates(): number {
        let numberOfAlivePirates: number = 0;
        this.listOfPirates.forEach(pirate => {
            if (pirate.getIsAlive()) { 
                numberOfAlivePirates += 1;
            }
        })
        return numberOfAlivePirates;
    }

    //calculated score: Number of alive pirates in the crew - Number of consumed rum by the captain!
    calculateShipScore(): number {
        return this.getNumberOfAlivePirates() - this.captain.getIntoxication();
    }

    drinkSomeRum() {
        let randomNumber: number = getRandomInt(1, 10);
        for (let i = 0; i < randomNumber; i++) {
            this.captain.drinkSomeRum();
            this.listOfPirates.forEach(pirate => {
                pirate.drinkSomeRum();
            })
        }
    }

    battleWinner(looser: Ship) {
        this.drinkSomeRum();
        let randomDeaths: number = getRandomInt(1, looser.getNumberOfAlivePirates());
        for (let i = 0; i <= randomDeaths; i++) {
            looser.listOfPirates[i].die();
        }
    }

    battle(otherShip: Ship): boolean {
        if (this.calculateShipScore() > otherShip.calculateShipScore()) {
            this.battleWinner(otherShip);
            return true;
        } else {
            otherShip.battleWinner(this)
            return false;
        }
    }
    toString(): string {
        return "I am a ship and I have " + this.getNumberOfAlivePirates() + " alive pirates. The captain drunk " + this.captain.getIntoxication()+ " rums. And If I say true, I am alive. Here we go: " + this.captain.getIsAlive();
    }
}
