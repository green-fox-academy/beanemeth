import {Animal} from './animal';

export class Reptile extends Animal {

   

    constructor(name: string) {
        super(name)
        
    }
    breed():string{
        return "laying eggs.";
    }  
    
    eat(){
        
    }
}