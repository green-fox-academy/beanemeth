// BattleApp
// Create a BattleApp class, where you can fight with ships
// Create 2 ships, fill them with pirates
// Have a battle!

import { Ship } from "./ship";
import { Pirate } from "./pirates"
import { Armada } from "./armada";


// export class BattleApp {
//     private santaMaria = new Ship;
//     private pinta = new Ship;

//     shipBattle() {
//         this.santaMaria.fillship();
//         this.pinta.fillship();


//         console.log(this.santaMaria.toString());
//         console.log(this.pinta.toString());
//         this.santaMaria.battle(this.pinta);
//         this.santaMaria.calculateShipScore();
//         this.pinta.calculateShipScore();
//         this.pinta.battle(this.santaMaria);
//         this.santaMaria.battleWinner(this.pinta);
//         console.log(this.pinta.toString());
//         console.log(this.santaMaria.toString());
//         console.log(this.santaMaria.getShipState());
//         console.log(this.santaMaria.drinkSomeRum());
//         console.log(this.santaMaria.getShipState());
//     }
// };

let santaMaria: Ship = new Ship()
let pinta: Ship = new Ship()

santaMaria.fillship();
pinta.fillship();
console.log(santaMaria.toString());
console.log(pinta.toString());
santaMaria.battle(pinta);
console.log(pinta.toString());
console.log(santaMaria.toString());

