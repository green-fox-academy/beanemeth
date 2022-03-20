/*Create Station and Car classes
Station
it stores how much gas is avaliable: gasAmount
it can refill a car: refill(car: Car):
decreases the gasAmount by the capacity of the car (let us suppose that the car is empty) and
increases the car's gasAmount
Car
it stores how much gas is actually present: gasAmount
it stores the capacity of the tank: capacity
create a constructor for the Car class where you:
initialize gasAmount -> 0
initialize capacity -> 100 */

export class Station {
    private gasAmount: number; //it stores how much gas is avaliable

    constructor(gasAmount: number) {
        this.gasAmount = gasAmount;
    }

    //decreases the gasAmount by the capacity of the car (let us suppose that the car is empty) and increases the car's gasAmount
    refill(car: Car) {
        this.gasAmount -= car.getcapacity(); //getter megszerzi es megadja az infot
        car.setgasamount(car.getcapacity());
    }

}
export class Car {
    private gasAmount: number; //it stores how much gas is actually present: gasAmount
    private capacity: number; //it stores the capacity of the tank: capacity

    constructor(gasAmount: number = 0, capacity: number = 100) {
        this.gasAmount = gasAmount;
        this.capacity = capacity;
    }
    
    getcapacity() {
        return this.capacity
    }
    
    getgasamount() {
        return this.gasAmount //ez csak kiolvassa
    }
    
    setgasamount(amount: number) { //beallitjuk
        this.gasAmount = amount;
    }
}
