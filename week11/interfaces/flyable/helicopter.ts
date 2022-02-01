import {Vehicle} from './vehicle';
import {Flyable} from './flyable';


export class Helicopter extends Vehicle implements Flyable {

    constructor(name: string) {
        super(name) 
    }
    
    land(): string{
        return 'I am landing.'
    }

    fly():string{
        return 'I am flying.'
    }

    takeOff():string{
        return 'I am taking off.'
    }
}