import {Animal} from "./animal"

describe('Animal', () => {  
    test("when an animal plays, its hunger increase by one", () => {
        let panther = new Animal();
        panther.play();
        expect(panther.getHunger()).toEqual(51);
    });
  
    test("when an animal eat, its hunger decrease by one", () => { 
        let lion = new Animal;
        lion.eat();
        expect(lion.getHunger()).toEqual(49);
    });
  
    test("gethunger to return the correct value", () => { 
        let elephant = new Animal(10,10);
        expect(elephant.getHunger()).toEqual(10);
    });
  })