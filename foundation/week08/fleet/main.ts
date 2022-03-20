import { Thing } from './thing';
import { Fleet } from './fleet';

let fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Download those, use those

//  Crete a fleet of things to have this output:
// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch



//elsonek ezt a 4 thing instance
//neww fleet instanceban legyen benne a 4 thing instance
//utana alul a kiiras

let getMilk = new Thing('Get Milk');
let removeTheObstacles = new Thing('Remove the obstacles');
let standUp = new Thing("Stand up");
let eatLunch = new Thing('Eat lunch');

getMilk.getName();
removeTheObstacles.getName();
standUp.getName();
eatLunch.getName();

getMilk.getCompleted();
removeTheObstacles.getCompleted();
standUp.getCompleted();
eatLunch.getCompleted();

standUp.complete();
eatLunch.complete();

getMilk.toString();
removeTheObstacles.toString();
standUp.toString();
eatLunch.toString;

fleet.add(getMilk);
fleet.add(removeTheObstacles);
fleet.add(standUp);
fleet.add(eatLunch);

fleet.getThings();

//fleet.toString();
//console.log(fleet)

console.log(fleet.toString());