import { MainScene } from '../scene/main-scene';
import { TextureLoader, MeshLambertMaterial, PlaneBufferGeometry, Mesh, RepeatWrapping } from 'three';

export class Sand {
    private scene: MainScene;

    constructor(scene: MainScene) {
        this.scene = scene;
    }

    init() {
        const loader = new TextureLoader();
        const groundTexture = loader.load('assets/textures/sand.jpg');
        groundTexture.wrapS = groundTexture.wrapT = RepeatWrapping;
        groundTexture.repeat.set(10, 300);
        groundTexture.anisotropy = 16;

        const groundMaterial = new MeshLambertMaterial({ map: groundTexture });
        const planeBuffer = new PlaneBufferGeometry(2000, 20000);
        const mesh = new Mesh(planeBuffer, groundMaterial);
        mesh.position.y = 0;
        mesh.rotation.x = - Math.PI / 2;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        this.scene.add(mesh);
    }
}
