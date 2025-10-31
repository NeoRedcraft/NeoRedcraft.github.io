import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scence = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scence, camera);

//shape
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0xff6347});
const torus = new THREE.Mesh(geometry, material);

scence.add(torus);

// light
const ambientLight = new THREE.AmbientLight(0xffffff);
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
scence.add(pointLight, ambientLight);

// helper
const lightHelper = new THREE.PointLightHelper(ambientLight);
const gridHelper = new THREE.GridHelper(200, 50);
scence.add(lightHelper, gridHelper);

// controls
const controls = new OrbitControls(camera, renderer.domElement);

// animation loop
function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  renderer.render(scence, camera);
  controls.update();
}
animate();