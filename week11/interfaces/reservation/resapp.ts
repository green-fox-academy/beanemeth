import { Reservationy } from './resinterface'
import { Reservation } from './reservation'



let newreservation = new Reservation();
//console.log(newreservation.getDowBooking());
//console.log(newreservation.getCodeBooking());
//console.log(newreservation.printStatus());

for (let index = 0; index < 10; index++) {
    newreservation.printStatus();
    
}

