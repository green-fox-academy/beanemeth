'use strict';

let watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

type FestivalGoer = {
    name: string,
    alcohol: number,
    guns: number
};

const queue: FestivalGoer[] = [
    { name: 'Amanda', alcohol: 10, guns: 1 },
    { name: 'Mark', alcohol: 0, guns: 0 },
    { name: 'Dolores', alcohol: 0, guns: 1 },
    { name: 'Wade', alcohol: 1, guns: 1 },
    { name: 'Anna', alcohol: 10, guns: 0 },
    { name: 'Rob', alcohol: 2, guns: 0 },
    { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival

// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival

function securityCheckForGuns(queue: FestivalGoer[]): FestivalGoer[] {
    
    for (let index = 0; index < queue.length; index++) {
        if (queue[index].guns > 0) {
            watchlist.push(queue[index].name);
        }
    } for (let j = 0; j < queue.length; j++) {
        if (queue[j].alcohol > 0) {
            securityAlcoholLoot += queue[j].alcohol
        }
        queue[j].alcohol = 0;
    }return queue;
    // for (let k = 0; k < queue.length; k++) {
    //     if (queue[k].alcohol === 0 && queue[k].guns === 0) {
    //         canEnterFestivalgoers.push(queue[k])
    //     }
    //} return canEnterFestivalgoers;//canenter, az mehet be akitol elvettek az alkoholt es nincs a watchlisten
}

console.log(securityCheckForGuns(queue))

//console.log(securityAlcoholLoot)
//console.log(watchlist)

function securityCheck(queue: FestivalGoer[]): FestivalGoer[] {
    queue.forEach((element) => {
      if (element.guns !== 0) {
        watchlist.push(element.name);
      }
    });
    queue = queue.filter((element) => element.guns === 0);
    queue.map((element) => {
      securityAlcoholLoot += element.alcohol;
      element.alcohol = 0;
    });
    return queue;
  }
  console.log(securityCheck(queue))