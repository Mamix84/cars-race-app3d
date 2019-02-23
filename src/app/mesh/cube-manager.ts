import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

export class CubeManager {

    cube: Mesh;

    constructor() { }

    createCube(): Mesh {
        const geometry = new BoxGeometry(5, 5, 5);
        const material = new MeshBasicMaterial({ color: 0x00ff00 });
        this.cube = new Mesh(geometry, material);
        return this.cube;
    }
}
