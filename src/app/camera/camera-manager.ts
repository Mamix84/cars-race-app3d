import { PerspectiveCamera } from 'three';

export class CameraManager {

    constructor() { }

    createPerspectiveCamera(): PerspectiveCamera {
        const camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);
        camera.position.x = 0;
        camera.position.y = 55;
        camera.position.z = 100;
        camera.rotation.x = 0;
        camera.updateProjectionMatrix();
        return camera;
    }
}
