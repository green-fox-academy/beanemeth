
import { WhatToDo } from './demointerface'

export class WhatShallIDo implements WhatToDo {

    private dow: string[] = [];
    private thigsToDo: string[] = [];
    private codeID: string;

    constructor() {
        this.dow = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.thigsToDo = ['go to a bar.', 'do 234 push-ups.', 'bake a NY cheesecake.',
            "cuddle the neighbour's cat.", 'iron my socks.'];
        this.codeID = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    }

    getDow(): string {
        let randomDay = this.dow[Math.floor(Math.random() * this.dow.length)];
        return randomDay
    }

    getThingsYouDoInYourFreetime(): string {
        let randomActivity = this.thigsToDo[Math.floor(Math.random() * this.thigsToDo.length)];
        return randomActivity
    }

    getCodeForDiary(): string {
        let randomcode = "";

        for (let i = 0; i < 5; i++) {
            randomcode += this.codeID.charAt(Math.floor(Math.random() * this.codeID.length))
        };

        return randomcode;
    }

    printActivityOnRandomDay(): void {
        console.log('On ' + this.getDow() + ' I am going to ' + this.getThingsYouDoInYourFreetime() +
            ' Here is the code for my dairy: #' + this.getCodeForDiary());
    }
}




//char at() returns a character at a specified position inside a string
//mathfloor the value of x rounded down to its nearest integer
