import { DirectionalLight } from 'three';

export class PrimaryDirectionalLight {
    constructor() { }

    createDirectionalLight(): DirectionalLight {
        const light = new DirectionalLight(0xdfebff, 1);
        light.position.set(0, 300, 0);
        light.position.multiplyScalar(1.3);

        light.castShadow = true;

        light.shadow.mapSize.width = 1024;
        light.shadow.mapSize.height = 1024;

        const d = 300;

        light.shadow.camera.left = - d;
        light.shadow.camera.right = d;
        light.shadow.camera.top = d;
        light.shadow.camera.bottom = - d;

        light.shadow.camera.far = 1000;
        return light;
    }
}
