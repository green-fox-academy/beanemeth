/* Reservations
Create a Reservation class by implementing all the features as required by the interface.
The booked reservations should look like the output below.
Please note that the reservation code should contain 8 characters randomly from 0-Z, all uppercase letters.
Also, the DOW is randomly ordered to the bookings from an array.
DOW stands for Day of the Week (MON, TUE, etc.)
interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}
The output will be sort of like this:-

Booking# 1WBA3OMU for THU
Booking# 0V5OH7VS for WED
Booking# CV6QOAJO for MON
Booking# 03GHEJMV for SAT
Booking# M5JFB32I for THU
Booking# W30PF0E0 for SAT
Booking# S0R70GMN for SAT
Booking# 3E032B3C for WED
Booking# OD27E36J for SAT
Booking# 4MEU0657 for MON */

import { Reservationy } from './resinterface'

export class Reservation implements Reservationy {

    private dow: string[]=[];
    private code: string;

    constructor (){
        this.dow = ['MON', 'THU', 'WED', 'THUS', 'FRI', 'SAT', 'SUN'];
        this.code = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    }
    getDowBooking(): string{
        let randomDay= this.dow[Math.floor(Math.random()*this.dow.length)];//this.dow[Math.floor(Math.random()*7)]; 
        return randomDay
    }
    getCodeBooking(): string{
        let randomcode = "";
      
        for (var i = 0; i < 8; i++){
        randomcode += this.code.charAt(Math.floor(Math.random() * this.code.length))};
      
        return randomcode;
      } 
      
      printStatus():void{
        console.log('Booking# '+ this.getCodeBooking() + ' for ' + this.getDowBooking());
    }
    }




