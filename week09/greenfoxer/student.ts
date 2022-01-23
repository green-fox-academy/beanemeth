/* Create a Student class that has the same fields and methods as the Person class, and has the following additional
fields:
previousOrganization: the name of the student’s previous company / school
skippedDays: the number of days skipped from the course
methods:
getGoal(): prints 'My goal is: Be a junior software developer.'
introduce(): prints 'Hi, I'm name, a age year old gender from previousOrganization who skipped skippedDays days from the course already.'
skipDays(numberOfDays): increases skippedDays by numberOfDays
The Student class has the following constructors:

Student(name, age, gender, previousOrganization): beside the given parameters, it sets skippedDays to 0
Student(): sets name to Jane Doe, age to 30, gender to female, previousOrganization to The School of Life, skippedDays to 0 */

'use strict';
import os from 'os';
import { Person } from './person';

export class Student extends Person {
    private previousOrganization: string;
    private skippedDays: number;

    constructor(name: string = 'Jane Done', age: number = 30, gender: string = "female",
        previousOrganization: string = 'The School of Life', skippedDays: number = 0) {
        super(name, age, gender);
        this.previousOrganization = previousOrganization;
        this.skippedDays = skippedDays;
        //previousOrganization to The School of Life, skippedDays to 0
    }
    public getGoal(): void {
        console.log('My goal is: Be a junior software developer.'); //itt mivel nem mondja azt amit a person, ezert sajat kell
        console.log(os.EOL);
    }
    //introduce(): prints 'Hi, I'm name, a age year old gender from previousOrganization who skipped skippedDays days from the course already.'
    public introduce(): void {

        console.log(super.getIntroduction() + "from " + this.previousOrganization + " who skipped " + this.skippedDays + " days from the course already.");
        console.log(os.EOL);
    }
    //skipDays(numberOfDays): increases skippedDays by numberOfDays
    public skipDays(numberOfDays: number): void {
        this.skippedDays += numberOfDays
    }
}