import {Animal} from './animal';
import { Flyable } from './flyable'

export class Bird extends Animal implements Flyable{

    constructor(name: string) {
        super(name) 
    }

    breed():string{
        return "laying eggs.";
    }  

    eat(){

    }

    land(): string{
        return 'I am landing. Watch out!'
    }

    fly():string{
        return "I beleive, I can fly.."
    }

    takeOff():string{
        return 'I am taking off.'
    }
}