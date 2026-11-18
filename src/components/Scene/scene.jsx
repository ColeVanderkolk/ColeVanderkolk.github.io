import * as THREE from 'three';
import './scene.css';
import { useRef } from 'react';
import { useEffect } from 'react';

function Scene() {

    const sceneReference = useRef(null);

    useEffect(() => {

        const threeJShomepage = sceneReference.current;

        //World
        const myScene = new THREE.Scene(); //initialize the scene

        //Camera
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(10, 10, 10);
        camera.lookAt(0, 0, 0);

        //Renderer
        const myRenderer = new THREE.WebGLRenderer();
        //scene.background = new THREE.Color(0xffffff); // Set background color to white
        myRenderer.setSize(window.innerWidth, window.innerHeight); //set renderer size to window size
        threeJShomepage.appendChild(myRenderer.domElement);

        //Geometry
        const cubeGeometry = new THREE.BoxGeometry(1,1,1); //initialize the geometry (shape of object)
        const cubeMaterial = new THREE.MeshStandardMaterial({ color: rgb(45, 178, 208) }); //Initialize the material (give it color)
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial); //create a object assigning it the values of geometry and material
        myScene.add(cube);

        //Ground mesh
        const groundGeometry = new THREE.PlaneGeometry(10, 10);
        const groundMaterial = new THREE.MeshStandardMaterial({ color: rgb(109, 34, 39) })
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = (Math.PI / 2);
        myScene.add(ground);

        //Lighting
        const ambientLight = new THREE.AmbientLight(0xFFFF00, 0.3);
        myScene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(10, 10, 10);
        directionalLight.target = cube;
        myScene.add(directionalLight.target);
        myScene.add(directionalLight);

        //Draw the scene
        myRenderer.render(myScene, camera);

        // Cleanup function
        return () => {
            threeJShomepage.removeChild(myRenderer.domElement);
            myRenderer.dispose();
        };

    }, []);

    return (
        <div className="Scene" ref={sceneReference}> scene works </div>
    );
}

export default Scene;
