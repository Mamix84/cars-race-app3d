import MTLLoader from 'three-dlc/src/loaders/MTLLoader';
import OBJLoader from 'three-dlc/src/loaders/OBJLoader';
import { MainScene } from '../scene/main-scene';

export class LowPolyTree {
    private scene: MainScene;

    constructor(scene: MainScene) {
        this.scene = scene;
    }

    init() {
        const mtlLoader = new MTLLoader();
        const objLoader = new OBJLoader();

        for (let i = 0; i < 100; i++) {

            mtlLoader.load('assets/obj/tree/lowpolytree.mtl', (materials) => {
                materials.preload();
                objLoader.setMaterials(materials);
                objLoader.load('assets/obj/tree/lowpolytree.obj', (object) => {
                    let tree: any;
                    tree = object;
                    tree.scale.x = 20;
                    tree.scale.y = 20;
                    tree.scale.z = 20;
                    tree.position.y = 38;
                    const sign = Math.random();
                    if (i % 2 === 0) {
                        tree.position.x = 100;
                    } else {
                        tree.position.x = -100 ;
                    }
                    tree.position.z = -i * 40;
                    tree.castShadow = true;
                    tree.receiveShadow = true;
                    this.scene.add(tree);
                });
            });

        }
    }

    animation() { }

}
