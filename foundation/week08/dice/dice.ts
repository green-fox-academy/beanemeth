class DiceSet {
    private dice: number[] = [];
    readonly numOfDices: number = 6;
    
  
    roll(): number[] {
      this.dice = [];
      for (let i = 0; i < this.numOfDices; i++) {
        this.dice.push(Math.floor(Math.random() * 6 + 1)); // floor lekerekit, plusz egy azert mert lekerekit akkoris ha 5,9. +1 miatt lesz benne az egy mert nullaval kezd
      }
      return this.dice;
    }
  
    reroll(index?: number): void {
      if (index === undefined) { // itt az osszeset ujradobja
        for (let i = 0; i < this.numOfDices; i++) {
          this.dice[i] = Math.floor(Math.random() * 6 + 1);
        }
      } else {
        this.dice[index] = Math.floor(Math.random() * 6 + 1); //ha van index akkor azt a kockat dobja ujra ami azon az indexen van
      }
    }
  
    getCurrent(index?: number): number[] | number {
      if (index === undefined) { //itt nem adtunk parametert, es mindent a dice arrayt visszaadja
        return this.dice; 
      } else {
        return this.dice[index]; // visszaadja azt a szamot ami azon az indexen van amit parameternek adtunk
      }
    }
}

function getSixSixes(diceSet:DiceSet):void {
    for (let index = 0; index < diceSet.numOfDices; index++) { //hanyadik ciklus a for loopban azaz index
        if (diceSet.getCurrent(index) ===6) { // aktualis dice az 6, ha igen akkor oke
            continue
        }
        else {  while (diceSet.getCurrent(index) !==6){ 
            //console.log(diceSet.getCurrent(index))
            
            
        
            diceSet.reroll(index)}
        }
    }
        
}

  

  // You have a `DiceSet` class which has a list for 6 dice
  // You can roll all of them with roll()
  // Check the current rolled numbers with getCurrent()
  // You can reroll with reroll()
  // Your task is to roll the dice until all of the dice are 6
  
  let diceSet = new DiceSet();
  console.log(diceSet.roll())
  console.log(getSixSixes(diceSet))
console.log(diceSet.getCurrent())
  /*console.log(diceSet.roll());
  console.log(diceSet.getCurrent());
  
  console.log("------------------");
  
  diceSet.reroll();
  console.log(diceSet.getCurrent());
  
  console.log("------------------");
  
  console.log(diceSet.getCurrent(5)); //itt irja ki az otos kockat
  diceSet.reroll();
  console.log(diceSet.getCurrent());
  
  console.log("------------------");
  
  diceSet.reroll(4);
  console.log(diceSet.getCurrent());

 */

