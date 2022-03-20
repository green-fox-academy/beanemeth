export abstract class Vehicle {
    private name: string;
    private age: number;
    private color: string;

    constructor(name: string) {
        this.name = name;
        this.age = 0;
        this.color = '';    
    }
}