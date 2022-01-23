/* Create a Person class with the following fields:

name: the name of the person
age: the age of the person (integer number)
gender: the gender of the person (male / female)
And the following methods:

getGoal(): prints 'My goal is: Live for the moment!'
introduce(): prints 'Hi, I'm name, a age year old gender.'
And the following constructors:

Person(name, age, gender)
Person(): sets name to Jane Doe, age to 30, gender to female */

'use strict';

export class Person {
  protected name: string;
  protected age: number;
  protected gender: string;

  constructor(name: string = 'Jane Done', age: number = 30, gender: string = "female") {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  public introduce(): void {
    console.log(this.getIntroduction() + ".");
  }
  public getGoal() {
    console.log('My goal is: Live for the moment!');
  }
  protected getIntroduction(): string { //akkor latja a gyerek ha protected
    return "Hi, I'm " + this.name + " a " + this.age + " year old " + this.gender + " "
  }
}