import { Aircraft } from './aircraft';

export class F35 extends Aircraft {

    protected maxAmmo: number;
    protected baseDamage: number;

    constructor(ammunition: number = 0) {
        super(ammunition, 12, 50);

    }
}