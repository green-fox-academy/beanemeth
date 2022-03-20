//import { Instruments } from './instruments';
//import { StringedInstrument } from './instruments';
import { ElectricGuitar } from './instruments';
import { BassGuitar } from './instruments';
import { Violin } from './instruments';

/* Test 1 Play
Electric Guitar, a 6-stringed instrument that goes Twang
Bass Guitar, a 4-stringed instrument that goes Duum-duum-duum
Violin, a 4-stringed instrument that goes Screech
Test 2, create Electric, Bass Guitar with 7 and 5 strings.
Test 2 Play
Electric Guitar, a 7-stringed instrument that goes Twangg
Bass Guitar, a 5-stringed instrument that goes Duum-duum-duum */



  let guitar = new ElectricGuitar();
  let bassGuitar = new BassGuitar();
  let violin = new Violin();
  
  console.log('Test 1 Play');
  console.log(guitar.play());
  console.log(bassGuitar.play());
  console.log(violin.play());
  
  console.log(
    'Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings.'
  );
  let guitar2 = new ElectricGuitar(7);
  let bassGuitar2 = new BassGuitar(5);
  
  console.log('Test 2 Play');
  console.log(guitar2.play());
  console.log(bassGuitar2.play()); 