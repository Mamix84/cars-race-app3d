import { AmbientLight, Color } from 'three';

export class MainLight extends AmbientLight {

    constructor() {
        super();
        super.color = new Color('rgb(255, 0, 0)');
    }

}
