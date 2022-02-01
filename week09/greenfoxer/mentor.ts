/* Create a Mentor class that has the same fields and methods as the Person class, and has the following additional

fields:
level: the level of the mentor (junior / intermediate / senior)
methods:
getGoal(): prints 'My goal is: Educate brilliant junior software developers.'
introduce(): prints 'Hi, I'm name, a age year old gender level mentor.'
The Mentor class has the following constructors:

Mentor(name, age, gender, level)
Mentor(): sets name to Jane Doe, age to 30, gender to female, level to intermediate */

'use strict';
import os from 'os';
import { Person } from './person';

export class Mentor extends Person {
    private level: string;

    constructor(name: string= 'Jane Done', age:number = 30, gender:string = "female",
        level: string='intermediate') {
        super(name, age, gender);
        this.level = level;
    }

    public getGoal(): string{
        return 'My goal is: Educate brilliant junior software developers.'+os.EOL; //itt mivel nem mondja azt amit a person, ezert sajat kell
        
    }
    
    public introduce(): void {
        console.log(super.getIntroduction() + this.level + "mentor.");
        console.log(os.EOL);
    }
}
