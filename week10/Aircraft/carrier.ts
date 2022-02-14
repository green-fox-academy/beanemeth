/* Create a class that represents an aircraft-carrier

The carrier should be able to store aircrafts
Each carrier should have a store of ammo represented by a number
The initial ammo should be given as a constructor parameter
The carrier also has a health point which is also given as a constructor parameter */

'use strict';

import { F35 } from "./f35";
import { F16 } from "./f16";
import { Aircraft } from './aircraft';

export class Carrier {

    private aircraftList: Aircraft[]
    private stroredAmmo: number;
    private healthPoint: number;

    constructor(stroredAmmo: number, healthPoint: number) {
        this.aircraftList = [];
        this.stroredAmmo = stroredAmmo;
        this.healthPoint = healthPoint;
    }
    // add()It should take a new aircraft and add it to its storage
    add(newaircraft: Aircraft) {
        this.aircraftList.push(newaircraft);
    }
    //fill()It should fill all the aircrafts with ammo and subtract the taken ammo from the ammo storage
    //If there is not enough ammo it should start to fill the aircrafts that are priority first
    //It should throw an exception if there is no ammo when this method is called
    fill() {
        let ammoNeed: number = 0;
        this.aircraftList.forEach(aircraft => {  //elmentjuk az ammoNeedbe ha mennyivel lehet max tolteni
            ammoNeed += aircraft.getMaxAmmo();
        })
        if (this.stroredAmmo === 0) {
            throw new Error("there is not enough ammo");            //ha nincs tolteny error, hogy ne fusson tovabb feleslegesen a program
        } else if (this.stroredAmmo < ammoNeed) {                   //ha van de kevesebb mint kell h teli tankoljuk akkor priority
            this.aircraftList.forEach(aircraft => {
                if (aircraft.isPriority()) {
                    this.stroredAmmo = aircraft.refillAmmo(this.stroredAmmo);  ///priorityket tolt
                }
            });
            this.aircraftList.forEach(aircraft => {
                if (!aircraft.isPriority()) {
                    this.stroredAmmo = aircraft.refillAmmo(this.stroredAmmo); //aztan nem priorityket tolt
                }
            });
        } else {
            this.aircraftList.forEach(aircraft => {
                this.stroredAmmo = aircraft.refillAmmo(this.stroredAmmo);   ///mindenkit tolt
            });
        }
    }//vegigmenni mindenkin van e ammo, ures v tele. amelyik ures, megkerdezni mekkora  atankja es azt osszehasonlitani a carrier tarjaval
    //ha nincs akkor prioritykat tolt, utana nem prioityket tolt. ha van elegendo akkor mindenkit tolt.

    //fight()It should take another carrier as a reference parameter and fire all the ammo from the aircrafts to it
    //subtract all the damage from the other carrier's health points
    fight(anotherCarrier: Carrier):void {
        let damage: number = 0;
        this.aircraftList.forEach(aircraft =>{                  
            damage += aircraft.fight();
        });
        anotherCarrier.healthPoint -= damage;
    }

    // fight (carrier: Carrier): void {
    //     for (let i = 0; i < this.aircraftList.length; i++) {
    //         carrier.healthPoint -= this.aircraftList[i].fight();
    //     }
    // }
    
    getTotalDamage (): number {
        let totalDamage: number = 0;
        for (let i = 0; i < this.aircraftList.length; i++) {
            totalDamage += this.aircraftList[i].damage();
        }
        return totalDamage;
    }
//     HP: 5000, Aircraft count: 5, Ammo Storage: 2300, Total damage: 2280
// Aircrafts:
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
    // getStatus() It should return a string describing its, and all of its aircrafts' statuses in the following format:
    getStatus(): void {
		if (this.healthPoint <= 0) {
			console.log("It's dead Jim :(")      
		}else{
			console.log('HP ' + this.healthPoint +'Aircraft count: '+ this.aircraftList.length + 'Ammo Storage: ' +this.stroredAmmo + 'Total damage: ' + this.getTotalDamage());
			console.log(`Aircrafts: `)
			for (let i = 0; i < this.aircraftList.length; i++) {
				console.log('Type '+ this.aircraftList[i].getType() +  'Ammo: '+this.aircraftList[i].getCurrentAmmo() + 'Base Damage: '+ this.aircraftList[i].getBaseDamage() + 'All Damage: ' + this.aircraftList[i].damage())
			}
			return
		}
	}
}











