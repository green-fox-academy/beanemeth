import { Aircraft } from './aircraft';

export class F16 extends Aircraft {
    protected maxAmmo: number;
    protected baseDamage: number;

    constructor(ammunition: number = 0) {
        super(ammunition, 8, 30);

    }
}