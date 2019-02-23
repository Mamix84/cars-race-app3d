import { HemisphereLight } from 'three';

export class PrimaryHemispheralLight extends HemisphereLight {

    constructor() {
        super(0xffffbb, 0x080820, 1);
     }
}
