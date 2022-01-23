export class Plants {
    public waterLevelOfthePlantCurrently: number;
    protected color: string;
    public absorption: number;
    private thirst: number;
    public listofPlants: Plants[]

    constructor(color: string, absorption: number, thirst: number) {
        this.color = color;
        this.waterLevelOfthePlantCurrently = 0;
        this.absorption = absorption;
        this.thirst = thirst;
    }
    /*After that the program should water the garden twice, first with the amount of 40 then with 70. After every watering the user should 
    see the state of the garden as you can see in the output below*/
    public isThirsty(): boolean {
        if (this.waterLevelOfthePlantCurrently < this.thirst) {
            return true
        }
        return false
    }
    //tenary op: ondition followed by a question mark (?), then an expression to execute 
    //if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. 
    public tellPlantsStatus() {
        console.log(this.color + this.constructor.name + this.isThirsty() ? "needs water" : "doesn't need water")
    }
    /* 
     public wateringPlants(amountOfWater: number):void{
      this.waterLevelOfthePlantCurrently += (this.absorption / 100) * amountOfWater;
     } */
    public wateringPlants(amountOfWater: number): void {
        console.log('watering with' + amountOfWater)

        let numberofThirstyPlants: number = 0;
        for (let plant of this.listofPlants) {
            if (plant.isThirsty()) {
                numberofThirstyPlants++
            }
        }
        this.waterLevelOfthePlantCurrently += (this.absorption / 100) * (amountOfWater / numberofThirstyPlants);
    }
}


