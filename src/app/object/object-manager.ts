import { LowPolyTree } from './low-poly-tree';
import { NewTree } from './new-tree';
import { MainScene } from '../scene/main-scene';
import { Sand } from './sand';

export class ObjectManager {

    constructor() { }

    createTree(scene: MainScene) {
        const lowPolyTree = new LowPolyTree(scene);
        lowPolyTree.init();
    }

    createSand(scene: MainScene) {
        const sand = new Sand(scene);
        sand.init();
    }

    createNewTree(scene: MainScene) {
        const newTree = new NewTree(scene);
        newTree.init();
    }
}
