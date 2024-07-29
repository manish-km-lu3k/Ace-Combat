import * as THREE from 'three';


let mixerHokum = null;
let mixerZ10 = null;
const loadAllGLTFmodels = (scene, gltfLoader, envMapTex) => {
    // carrier ship
    gltfLoader.load(
        '/ship.glb',
        (gltf) => {
            scene.add(gltf.scene)
            gltf.scene.receiveShadow = true;
            gltf.scene.scale.set(90, 90, 90)
            gltf.scene.castShadow = true;
            gltf.scene.traverse(function (child) {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                    child.material.envMap = envMapTex;
                    child.material.envMapIntensity = .7;
                    child.material.needsUpdate = true;
                }
            });
            gltf.scene.position.set(131.2, -348.2, -827.6)
            gltf.scene.rotation.set(0, 4.5, 0)

            // gui.add(gltf.scene.position, 'x').min(-500).max(500).step(0.1)
            // gui.add(gltf.scene.position, 'y').min(-500).max(500).step(0.1)
            // gui.add(gltf.scene.position, 'z').min(-1000).max(500).step(0.1)

            // gui.add(gltf.scene.rotation, 'x').min(-10).max(20).step(0.001)
            // gui.add(gltf.scene.rotation, 'y').min(-10).max(20).step(0.001).name('ship rot y')
            // gui.add(gltf.scene.rotation, 'z').min(-10).max(20).step(0.001)

        }
    )
    // sloop
    gltfLoader.load(
        '/sloop2.gltf',
        (gltf) => {
            scene.add(gltf.scene)
            gltf.scene.scale.set(90, 90, 90)
            gltf.scene.castShadow = true;
            gltf.scene.traverse(function (child) {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                    child.castShadow = true;
                    child.material.envMap = envMapTex;
                    child.material.envMapIntensity = 1;
                }
            });
            gltf.scene.position.set(500, -326, -606)
            gltf.scene.rotation.set(0, 6, 0)

            // gui.add(gltf.scene.position, 'x').min(-1000).max(500).step(0.1)
            // gui.add(gltf.scene.position, 'y').min(-800).max(50).step(0.1)
            // gui.add(gltf.scene.position, 'z').min(-2000).max(500).step(0.1)

            // gui.add(gltf.scene.rotation, 'x').min(-10).max(20).step(0.001)
            // gui.add(gltf.scene.rotation, 'y').min(-10).max(20).step(0.001).name('sloop rot y')
            // gui.add(gltf.scene.rotation, 'z').min(-10).max(20).step(0.001)

        }
    )
    // dith
    gltfLoader.load(
        '/dith.gltf',
        (gltf) => {
            scene.add(gltf.scene)
            gltf.scene.scale.set(90, 90, 90)
            gltf.scene.castShadow = true;
            gltf.scene.traverse(function (child) {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                    child.castShadow = true;
                    child.material.envMap = envMapTex;
                    child.material.envMapIntensity = 1;
                }
            });
            gltf.scene.position.set(-180, -294, -1065)
            gltf.scene.rotation.set(0, 7.7, 0)

            // gui.add(gltf.scene.position, 'x').min(-2000).max(1000).step(0.1)
            // gui.add(gltf.scene.position, 'y').min(-800).max(50).step(0.1)
            // gui.add(gltf.scene.position, 'z').min(-5000).max(1000).step(0.1)

            // gui.add(gltf.scene.rotation, 'x').min(-10).max(20).step(0.001)
            // gui.add(gltf.scene.rotation, 'y').min(-10).max(20).step(0.001).name('dith rot y')
            // gui.add(gltf.scene.rotation, 'z').min(-10).max(20).step(0.001)

        }
    )
    // auxi
    gltfLoader.load(
        '/auxi.gltf',
        (gltf) => {
            scene.add(gltf.scene)
            gltf.scene.scale.set(90, 90, 90)
            gltf.scene.castShadow = true;
            gltf.scene.traverse(function (child) {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                    child.castShadow = true;
                    child.material.envMap = envMapTex;
                    child.material.envMapIntensity = 1;
                }
            });
            gltf.scene.position.set(-8000, -800, -8000)
            gltf.scene.rotation.set(0, 3.7, 0)

            // gui.add(gltf.scene.position, 'x').min(-8000).max(1000).step(0.1)
            // gui.add(gltf.scene.position, 'y').min(-800).max(50).step(0.1)
            // gui.add(gltf.scene.position, 'z').min(-8000).max(500).step(0.1)

            // gui.add(gltf.scene.rotation, 'x').min(-10).max(20).step(0.001)
            // gui.add(gltf.scene.rotation, 'y').min(-10).max(20).step(0.001).name('auxi rot y')
            // gui.add(gltf.scene.rotation, 'z').min(-10).max(20).step(0.001)

        }
    )

    // Aircrafts
    // rafale
    gltfLoader.load(
        '/rafale.gltf',
        (gltf) => {
            gltfLoader.rafale = gltf.scene;
            gltf.scene.castShadow = true;
            scene.add(gltf.scene)
            gltf.scene.scale.set(5, 5, 5)
            gltf.scene.castShadow = true;
            gltf.scene.traverse(function (child) {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                    child.material.envMap = envMapTex;
                    child.material.envMapIntensity = 1;
                }
            });
            gltf.scene.position.set(-4, -87, -182)
            gltf.scene.rotation.set(0, 4.88, 0)
            gltfLoader.rafale.visible = true;

            // gui.add(gltf.scene.position, 'x').min(-500).max(500).step(0.01)
            // gui.add(gltf.scene.position, 'y').min(-500).max(500).step(0.01)
            // gui.add(gltf.scene.position, 'z').min(-1000).max(500).step(0.01)

            // gui.add(gltf.scene.rotation, 'x').min(-10).max(20).step(0.001)
            // gui.add(gltf.scene.rotation, 'y').min(-10).max(20).step(0.001).name('rafale rot y')
            // gui.add(gltf.scene.rotation, 'z').min(-10).max(20).step(0.001)
        }
    )
    // noseferatu
    gltfLoader.load(
        '/noseferatu.gltf',
        (gltf) => {
            gltfLoader.nose = gltf.scene;
            scene.add(gltf.scene)
            gltf.scene.scale.set(5, 5, 5)
            gltf.scene.castShadow = true;
            gltf.scene.traverse(function (child) {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                    child.castShadow = true;
                    child.material.envMap = envMapTex;
                    child.material.envMapIntensity = .7;
                }
            });
            gltf.scene.position.set(-4, -87, -182)
            gltf.scene.rotation.set(0, 4.88, 0)
            gltfLoader.nose.visible = false;

            // gui.add(gltf.scene.position, 'x').min(-500).max(500).step(0.001)
            // gui.add(gltf.scene.position, 'y').min(-500).max(500).step(0.001)
            // gui.add(gltf.scene.position, 'z').min(-1000).max(500).step(0.001)

            // gui.add(gltf.scene.rotation, 'x').min(-10).max(20).step(0.001)
            // gui.add(gltf.scene.rotation, 'y').min(-10).max(20).step(0.0001).name('noseferatu rot y')
            // gui.add(gltf.scene.rotation, 'z').min(-10).max(20).step(0.001)
        }
    )
    // Hokum
    gltfLoader.load(
        '/sec2.gltf',
        (gltf) => {
            gltfLoader.hock = gltf.scene;
            mixerHokum = new THREE.AnimationMixer(gltf.scene);
            const topBladeAnimation = mixerHokum.clipAction(gltf.animations[0])
            const downBladeAnimation = mixerHokum.clipAction(gltf.animations[1])
            topBladeAnimation.play()
            downBladeAnimation.play()
            scene.add(gltf.scene)

            gltf.scene.scale.set(5, 5, 5)
            gltf.scene.castShadow = true;
            gltf.scene.traverse(function (child) {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                    child.castShadow = true;
                    child.material.envMap = envMapTex;
                    child.material.envMapIntensity = .7;
                }
            });
            gltf.scene.position.set(-4, -87, -182)
            gltf.scene.rotation.set(0, 4.88, 0)
            gltfLoader.hock.visible = false;

        }
    )
    // z-10w
    gltfLoader.load(
        '/Z-10W2.gltf',
        (gltf) => {
            gltfLoader.z10 = gltf.scene;
            mixerZ10 = new THREE.AnimationMixer(gltf.scene);
            const bladeAction = mixerZ10.clipAction(gltf.animations[0])
            const backBladeAction = mixerZ10.clipAction(gltf.animations[1])
            const backBladeAction2 = mixerZ10.clipAction(gltf.animations[2])
            bladeAction.play()
            backBladeAction.play()
            backBladeAction2.play()

            scene.add(gltf.scene)

            // gltf.scene.scale.set(1, .5, .5)
            gltf.scene.castShadow = true;
            gltf.scene.traverse(function (child) {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                    child.castShadow = true;
                    child.material.envMap = envMapTex;
                    child.material.envMapIntensity = .7;
                }
            });
            gltf.scene.position.set(-4, -69, -182)
            gltf.scene.rotation.set(0, 4.88, 0)
            gltfLoader.z10.visible = false;

            // gui.add(gltf.scene.position, 'x').min(-500).max(500).step(0.0001)
            // gui.add(gltf.scene.position, 'y').min(-500).max(500).step(0.0001)
            // gui.add(gltf.scene.position, 'z').min(-1000).max(500).step(0.0001)

        }
    )
    // berkut
    gltfLoader.load(
        '/berkut.gltf',
        (gltf) => {
            gltfLoader.berkut = gltf.scene;
            scene.add(gltf.scene)

            gltf.scene.scale.set(5, 5, 5)
            gltf.scene.castShadow = true;
            gltf.scene.traverse(function (child) {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                    child.castShadow = true;
                    child.material.envMap = envMapTex;
                    child.material.envMapIntensity = .7;
                }
            });
            gltf.scene.position.set(-4, -87, -182)
            gltf.scene.rotation.set(0, 4.88, 0)
            gltfLoader.berkut.visible = false;

        }
    )

}
export { loadAllGLTFmodels , mixerHokum, mixerZ10 };
