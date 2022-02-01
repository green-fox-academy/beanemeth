import {Animal} from './animal';

export class Mammal extends Animal {

    

    constructor(name: string) {
        super(name)
        
    }
    breed():string{
        return "pushing miniature versions out.";
    }  

    eat(){
        
    }
}