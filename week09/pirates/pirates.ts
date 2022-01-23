/* Create a Pirate class. You can add other fields and methods, yet, you must have these methods:

drinkSomeRum() - intoxicates the Pirate by one
howsItGoingMate() - when called, the Pirate replies:
if drinkSomeRun() was called less than 4 times:
"Pour me anudder!"
else:
"Arghh, I'ma Pirate. How d'ya d'ink its goin?". Then the pirate passes out and sleeps it off (gets rid of the intoxication).
If you manage to get this far, then you can try to do the following.

brawl(pirate: Pirate) - where pirate fights another pirate (if both of them are alive):
there is 1/3 chance that this dies, the other dies or they both pass out.
die() - this kills off the pirate. When a pirate is dead, every method simply results in: he's dead.
And... if you get that far...

Add a parrot. */

export class Pirate {
    private zeroIntoxication: number;
    private intoxication: number;
    private dead: boolean = false;
    private isPassedOut:boolean = false;

    constructor() {

        this.intoxication = 0;
        this.zeroIntoxication = this.intoxication;
    }

    static getRandomInt(min, max) : number{
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    getIsDead() {
        return this.dead;
    }
    getIntoxication() {
        return this.intoxication;
    }
    //die() - this kills off the pirate. When a pirate is dead, every method simply results in: he's dead.
    die() {
        this.dead === true;
    }
    //drinkSomeRum() - intoxicates the Pirate by one
    drinkSomeRum() {
        this.intoxication++;
    }
    /*howsItGoingMate() - when called, the Pirate replies:
    if drinkSomeRun() was called less than 4 times:
    "Pour me anudder!"
    else:
    "Arghh, I'ma Pirate. How d'ya d'ink its goin?". Then the pirate passes out and sleeps it off (gets rid of the intoxication). */
    howsItGoingMate() {
        if (this.intoxication<4) {
            console.log("Pour me anudder!")
        }
        else{
            console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?")
            this.intoxication = this.zeroIntoxication; //eleg lenne nullat irni
        }
    }
    

    /*brawl(pirate: Pirate) - where pirate fights another pirate (if both of them are alive):
    there is 1/3 chance that this dies, the other dies or they both pass out.*/
    brawl(otherPirate: Pirate) {
        if (!this.dead && !otherPirate.dead) { //az aktualis nem halott
            let randomNum:number = Pirate.getRandomInt(0, 2) 
            if (randomNum === 0) {
                this.die();
            }else if(randomNum === 1){
                otherPirate.die();
            }else {
                this.die(); 
                otherPirate.die();
            }
        } 
    }
}












/*intoxication++ felett
if (this.dead === true) {
            this.die();
        } */

      