import { Scene, Color, Fog, Object3D, TextureLoader, RepeatWrapping } from 'three';
import { MainLight } from '../light/main-light';
import { PrimarySpotLight } from '../light/primary-spot-light';
import { ObjectManager } from '../object/object-manager';
import { PrimaryDirectionalLight } from '../light/primary-directional-light';
import { PrimaryHemispheralLight } from '../light/primary-hemispheral-light';

export class MainScene extends Scene {
    private ambientalLight: MainLight;
    private primarySpotLight: PrimarySpotLight;
    private objManager: ObjectManager;
    private primaryDirectionalLight: PrimaryDirectionalLight;
    private primaryHemispheralLight: PrimaryHemispheralLight;
    private background: Object;
    private fog: Fog;

    constructor() {
        super();
        // super.background = new Color('rgb(0, 255, 0)');

        // load a texture, set wrap mode to repeat
    }

    init() {
        const texture = new TextureLoader().load('assets/textures/sky.jpg');
        texture.wrapS = RepeatWrapping;
        texture.wrapT = RepeatWrapping;
        texture.repeat.set(1, 1);
        // this.background = texture;
        this.background = new Color(0xcce0ff);

        this.fog = new Fog(0xffffff, 500, 2000);

        this.ambientalLight = new MainLight();
        // super.add(this.ambientalLight);

        this.primarySpotLight = new PrimarySpotLight();
        super.add(this.primarySpotLight.createSpotLight());

        this.primaryDirectionalLight = new PrimaryDirectionalLight();
        super.add(this.primaryDirectionalLight.createDirectionalLight());

        this.primaryHemispheralLight = new PrimaryHemispheralLight();
        super.add(this.primaryHemispheralLight);

        this.objManager = new ObjectManager();
        // this.objManager.createTree(this);
        this.objManager.createNewTree(this);

        this.objManager.createSand(this);

        super.autoUpdate = true;
    }

    animation() {

    }

    add(object: Object3D) {
        super.add(object);
    }
}
