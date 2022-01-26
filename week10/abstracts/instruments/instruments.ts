/* Model stringed instruments
We start with a base, abstract class Instrument.

it reserves (e.g. protected) the name of the instrument
it should provide a play() method.
Next, we add another abstract class, StringedInstrument which extends Instrument. It
introduces numberOfStrings and
sound() method what's implementation is yet unknown
but with the help of the sound() the play() method is fully implementable
StingedInstrument has 3 descendants, namely:

Electric Guitar (6 strings, 'Twang')
Bass Guitar (4 strings, 'Duum-duum-duum')
Violin (4 strings, 'Screech')
The Workshop should be invoked from another file like app.ts or main.ts */

abstract class Instrument {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
    
}
//Next, we add another abstract class, StringedInstrument which extends Instrument.
class StringedInstrument extends Instrument {

    private numberOfStrings: number;
    protected soundOfInstrument: string;

    constructor(name: string, numberOfStrings: number, soundOfInstrument: string) {
        super(name)
        this.numberOfStrings = numberOfStrings;
        this.soundOfInstrument = soundOfInstrument;
    }
    //sound() method what's implementation is yet unknown
    sound(): string {
        return this.soundOfInstrument;
    }
    play(): string { 
        return this.name + ', a ' + this.numberOfStrings + "-stringed instrument that goes " + this.soundOfInstrument
    }
}
//Electric Guitar (6 strings, 'Twang')
//Bass Guitar (4 strings, 'Duum-duum-duum')
//Violin (4 strings, 'Screech')
export class ElectricGuitar extends StringedInstrument {
    constructor(numberOfStrings: number = 6) {
        super('Electric Guitar', 6, 'Twang');
    }
}
export class BassGuitar extends StringedInstrument {
    constructor(numberOfStrings: number = 4) {
        super('Bass Guitar', 4, 'Duum-duum-duum');
    }
}
export class Violin extends StringedInstrument {
    constructor(numberOfStrings: number = 4) {
        super('Violin', 4, 'Screech');
    }
}
