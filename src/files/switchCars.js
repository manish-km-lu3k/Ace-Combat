import * as THREE from 'three';
import { loadAllGLTFmodels, mixerHokum, mixerZ10 } from './models';


const loadSwitchCar = (scene, gltfLoader, envMapTex) => {

    const carName = document.getElementById('name');

    loadAllGLTFmodels(scene, gltfLoader, envMapTex);
    
    var currentCar = 0;
    const updateCurr = () => {
        if (gltfLoader.rafale && currentCar == 0) {
            gltfLoader.rafale.visible = true;
            gltfLoader.nose.visible = false;
            gltfLoader.hock.visible = false;
            gltfLoader.berkut.visible = false;
            gltfLoader.z10.visible = false;

            carName.innerHTML = 'Rafale M';
            return;
        }
        else if (gltfLoader.nose && currentCar == 1) {
            gltfLoader.rafale.visible = false;
            gltfLoader.nose.visible = true;
            gltfLoader.hock.visible = false;
            gltfLoader.berkut.visible = false;
            gltfLoader.z10.visible = false;

            carName.innerHTML = 'CFA-44 Nosferatu';
            return;
        }
        else if (gltfLoader.hock && currentCar == 2) {
            gltfLoader.rafale.visible = false;
            gltfLoader.nose.visible = false;
            gltfLoader.hock.visible = true;
            gltfLoader.berkut.visible = false;
            gltfLoader.z10.visible = false;

            carName.innerHTML = 'KA-50 Hokum';
            return;
        }
        else if (gltfLoader.hock && currentCar == 3) {
            gltfLoader.rafale.visible = false;
            gltfLoader.nose.visible = false;
            gltfLoader.hock.visible = false;
            gltfLoader.berkut.visible = true;
            gltfLoader.z10.visible = false;

            carName.innerHTML = 'Su-47 Berkut';
            return;
        }
        else if (gltfLoader.hock && currentCar == 4) {
            gltfLoader.rafale.visible = false;
            gltfLoader.nose.visible = false;
            gltfLoader.hock.visible = false;
            gltfLoader.berkut.visible = false;
            gltfLoader.z10.visible = true;

            carName.innerHTML = 'Z-10W';
            return;
        }
    }
    document.getElementById('r').addEventListener('click', () => {
        currentCar += 1
        if (currentCar == 5) {
            currentCar = 0
        }
        updateCurr()
    })
    document.getElementById('l').addEventListener('click', () => {
        currentCar -= 1
        if (currentCar == -1) {
            currentCar = 4
        }
        updateCurr()
    })
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            // Handle left arrow key press
            currentCar -= 1;
            if (currentCar === -1) {
                currentCar = 4;
            }
            updateCurr();
        } else if (event.key === 'ArrowRight') {
            // Handle right arrow key press
            currentCar += 1;
            if (currentCar === 5) {
                currentCar = 0;
            }
            updateCurr();
        }
    });

}

export { loadSwitchCar, mixerHokum, mixerZ10 };
