import { Wardrobe } from './demo'

/*You have to attend a family Christmas photoshoot and you have carefully selected your children’s outfit,
 but forgot to pick one for yourself. Thankfully, your husband is still at home. Ask him to bring you a 
 dress that goes with the photoshoot’s backdrop by telling him a few keywords.*/

let myWardrobe: Wardrobe[] = setmyWardrobe();



let keywordsInMyHusbandsHead: string[] = ['Christmas', 'Party', 'Fashionshoot'];

function chooseTheBestDress(myWardrobe: Wardrobe[], keywords: string[]): string {
    for (let index = 0; index < myWardrobe.length; index++) {
        if (keywords.includes(myWardrobe[index].occasion)) {
            return myWardrobe[index].clothesitem;
        }
    }
    return 'there is nothing to wear, go shopping.'
}


console.log(`I'm going to wear: ${chooseTheBestDress(myWardrobe, keywordsInMyHusbandsHead)}`);

function setmyWardrobe(): Wardrobe[] {
    return [
        new Wardrobe('Swimming suit', 'yellow', 'lake Balaton'),
        new Wardrobe('Pink nylon dress', 'pink', "80's party"),
        new Wardrobe('Sparkly dress', 'sparkly grey', 'Christmas'),
        new Wardrobe('Funky ripped jeans', 'blue', 'shopping at the mall'),
        new Wardrobe('Gardening outfit', 'dark green', "digging in the Neighbour's garden")
    ];
}

