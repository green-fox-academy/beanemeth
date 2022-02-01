import { Reservationy } from './resinterface'
import { Reservation } from './reservation'



let newreservation = new Reservation();
//console.log(newreservation.getDowBooking());
//console.log(newreservation.getCodeBooking());
//console.log(newreservation.printStatus());

for (let index = 0; index < 10; index++) {
    console.log(newreservation.printStatus());
    
}

// it works, but it prints undefined after every reservation .