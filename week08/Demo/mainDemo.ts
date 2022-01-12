import { Wardrobe } from './demo'

let myWardrobe: Wardrobe[] = setmyWardrobe();



let keywordsInMyHusbandsHead: string[]=['Christmas', 'Party', 'Fashionshoot'];

function chooseTheBestDress(myWardrobe: Wardrobe[], keywords: string[]): string{
    
    for (let index = 0; index < myWardrobe.length; index++) {
        if (keywords.includes(myWardrobe[index].occasion)) {
            return myWardrobe[index].clothesitem;
        }
    }
    return 'there is nothing to wear. Better stay at home.' 
}


console.log(`I'm going to wear: ${chooseTheBestDress(myWardrobe, keywordsInMyHusbandsHead)}`);

function setmyWardrobe(): Wardrobe[] {
    return [
        new Wardrobe('Swimming suit', 'yellow', 'lake Balaton'),
        new Wardrobe('Pink nylon dress', 'pink', "80's party"),
        new Wardrobe('Sparkly dress', 'sparkly grey', 'Christmas'),
        new Wardrobe('Funky ripped jeans', 'blue', 'shopping at the mall'),
        new Wardrobe('Gardening outfit', 'dark green', "Neighbour's garden")
    ];
}

