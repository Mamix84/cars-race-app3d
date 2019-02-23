import { Component, OnInit } from '@angular/core';
import { WebGLRenderer, Scene, PerspectiveCamera } from 'three';
import { MainScene } from './scene/main-scene';
import { CameraManager } from './camera/camera-manager';
import OrbitControls from 'three-dlc/src/controls/OrbitControls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private renderer: WebGLRenderer;
  private scene: Scene;
  private camera: PerspectiveCamera;
  private animation: any;
  private time = 0;

  constructor() { }

  ngOnInit() {
    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.autoClear = true;
    this.renderer.shadowMap.enabled = true;
    document.getElementById('canvas').appendChild(this.renderer.domElement);

    this.scene = new MainScene();
    this.scene.init();
    this.camera = new CameraManager().createPerspectiveCamera();

    // const controls = new OrbitControls(this.camera, this.renderer.domElement);
    // controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    // controls.dampingFactor = 0.25;
    // controls.screenSpacePanning = false;
    // controls.minDistance = 5;
    // controls.maxDistance = 500;
    // controls.maxPolarAngle = Math.PI / 2;

    this.animate();
  }

  animate(): any {
    const requestId = requestAnimationFrame(this.animate.bind(this));
    this.time += 1;
    this.scene.animation();

    // this.camera.position.z -= 2;

    if (this.time % 5 === 0) {
      this.animation = this.renderer.render(this.scene, this.camera);
    }
  }

}
