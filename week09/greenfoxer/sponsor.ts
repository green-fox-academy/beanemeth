/* Create a Sponsor class that has the same fields and methods as the Person class, and has the following additional

fields:
company: name of the company
hiredStudents: number of students hired
method:
introduce(): prints 'Hi, I'm name, a age year old gender who represents company and hired hiredStudents students so far.'
hire(): increases hiredStudents by 1
getGoal(): prints 'My goal is: Hire brilliant junior software developers.'
The Sponsor class has the following constructors:

Sponsor(name, age, gender, company): beside the given parameters, it sets hiredStudents to 0
Sponsor(): sets name to Jane Doe, age to 30, gender to female, company to Google and hiredStudents to 0 */

'use strict';
import os from 'os';
import { Person } from './person';

export class Sponsor extends Person {
    private company: string;
    private hiredStudents: number;

    constructor(name: string = 'Jane Done', age: number = 30, gender: string = "female",
        company: string = 'Google') {
        super(name, age, gender);
        this.company = company;
        this.hiredStudents = 0;
    }
    //hire(): increases hiredStudents by 1
    public hire() {
        this.hiredStudents++
    }

    public getGoal(): string {
        return 'My goal is: Hire brilliant junior software developers.' + os.EOL; //itt mivel nem mondja azt amit a person, ezert sajat kell
        
    }

    public introduce(): void {
        console.log(super.getIntroduction() + "who represents " + this.company + " and hired " + this.hiredStudents + " students so far.");
        console.log(os.EOL);
    }
}

//belso es gyerek a protected
//ha csak belso akkor private
