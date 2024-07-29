import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as dat from 'lil-gui'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { loadEnvironment, envMapTex } from './files/environment';
import { loadSwitchCar, mixerHokum, mixerZ10 } from './files/switchCars';

// import './files/frame.js';

// const gui = new dat.GUI();
const canvas = document.getElementById('canvas-container');
const scene = new THREE.Scene();
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 12000);
camera.position.x = 0
camera.position.y = 0
camera.position.z = 3
// camera.rotation.set(Math.PI/ 0.026138710158264127 , -0.07939735936273652 , 0.002073634083897008 ) 


// gui.add(camera.position, 'x').min(-100).max(100).step(0.01)
// gui.add(camera.position, 'y').min(-100).max(100).step(0.01)
// gui.add(camera.position, 'z').min(-100).max(100).step(0.01)

scene.add(camera);
camera.updateProjectionMatrix()

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update rendrer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})
// Renderer
const renderer = new THREE.WebGLRenderer({ antialias:true,canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.CineonToneMapping;
// gui.add(renderer,'toneMapping', {
//     No: THREE.NoToneMapping,
//     Linear: THREE.LinearToneMapping,
//     Reinhard: THREE.ReinhardToneMapping,
//     Cineon: THREE.CineonToneMapping,
//     acef: THREE.ACESFilmicToneMapping
// })

// document.getElementById('z').addEventListener('click',() => {
//     camera.position.x -= 1;
//     // camera.position.y -= 1;
//     camera.position.z -= 1;
// })

scene.add(camera);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let controls = new OrbitControls(camera, canvas);
controls.enabled = false;
// gui.add(controls, 'enabled').name('Orbit Control');


// Environment
loadEnvironment(scene, renderer, camera);

envMapTex.outputColorSpace = THREE.SRGBColorSpace;
scene.background = envMapTex;
scene.environment = envMapTex;

// CarSwitch
const gltfLoader = new GLTFLoader();
loadSwitchCar(scene, gltfLoader, envMapTex);


// Time
const clock = new THREE.Clock()
let prevTime = 0;
const cursor = {
    x: 0,
    y: 0
}
window.addEventListener('mousemove', (event) => {
    cursor.x = (event.clientX / window.innerWidth - .5)
    cursor.y = - (event.clientY / window.innerHeight - .5)
})
const tick = () => {
    const elapsedtime = clock.getElapsedTime()
    const deltaTime = elapsedtime - prevTime;
    prevTime = elapsedtime;

    // console.log('x pos',camera.position.x)
    // console.log('y pos',camera.position.y)
    // console.log('z pos',camera.position.z)
    // console.log('x rot',camera.rotation.x)
    // console.log('y rot',camera.rotation.y)
    // console.log('z rot',camera.rotation.z)

    // Update mixer
    if (mixerZ10 && mixerHokum !== null){
        mixerHokum.update(deltaTime);
        mixerZ10.update(deltaTime);
    }

    // Update controls
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
tick();