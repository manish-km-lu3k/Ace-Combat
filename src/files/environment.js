import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';

let envMapTex = null;

const loadEnvironment = (scene, renderer, camera) => {
    // Light
    const light = new THREE.DirectionalLight();
    light.intensity = 2;
    light.castShadow = true;
    light.shadow.mapSize.set(1024,1024)
    scene.add(light)

    // composer
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass)

    // Environment
    const cubeTextureLoader = new THREE.CubeTextureLoader()
    envMapTex = cubeTextureLoader.load([
        '/px.png',
        '/nx.png',
        '/py.png',
        '/ny.png',
        '/pz.png',
        '/nz.png'
    ]);

}

export { loadEnvironment, envMapTex };