import * as THREE from 'three';
import './Scene.css';
import { useRef } from 'react';
import { useEffect } from 'react';

function Scene() {

    const sceneReference = useRef(null);

    useEffect(() => {

        const threeJShomepage = sceneReference.current;

        //prevent scrolling by adding the no scroll class
        document.body.classList.add("no-scroll");

        //World
        const myScene = new THREE.Scene(); //initialize the scene

        //Camera
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);

        //Renderer
        const myRenderer = new THREE.WebGLRenderer();
        //scene.background = new THREE.Color(0xffffff); // Set background color to white
        myRenderer.setSize(window.innerWidth, window.innerHeight); //set renderer size to window size
        threeJShomepage.appendChild(myRenderer.domElement);

        //Geometry
        const randomGeoColor = Math.random() * 0xffffff;
        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1); //initialize the geometry (shape of object)
        const cubeMaterial = new THREE.MeshStandardMaterial({ color: randomGeoColor }); //Initialize the material (give it color)
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial); //create a object assigning it the values of geometry and material
        myScene.add(cube);

        //Ground mesh
        const randomMeshColor = Math.random() * 0xffffff;
        const groundGeometry = new THREE.PlaneGeometry(10, 10);
        const groundMaterial = new THREE.MeshStandardMaterial({ color: randomMeshColor });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = (-Math.PI / 2);
        ground.position.y = -0.5;
        myScene.add(ground);

        //Lighting
        const ambientLight = new THREE.AmbientLight(0xFFFF00, 0.3);
        myScene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(10, 10, 10);
        directionalLight.target = cube;
        myScene.add(directionalLight.target);
        myScene.add(directionalLight);

        //Keys
        const keys = {};

        //When a key is pressed handler
        const handleKeyDown = (event) => {
            if (event.key.startsWith("Arrow")) event.preventDefault();
            keys[event.key] = true;
        };
        const handleKeyUp = (event) => {
            keys[event.key] = false;
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        //Declare variables outside of animation loop
        let frameId;
        let speed = 0;
        const acceleration = 0.01;
        const maxSpeed = 0.3;
        const turnSpeed = 0.05;
        let disco = -1;
        let cameraDistX = 10;
        let cameraDistY = 10;

        //disco floor
        const tileSize = 10;
        const tiles = new Set(); //remember tiles
        tiles.add("0,0"); //starting tile

        //Animate
        const animate = () => {
            // Update cube position based on keys pressed
            frameId = requestAnimationFrame(animate);

            //Cube movement
            if (keys["ArrowUp"] || keys["w"] || keys["W"]) speed += acceleration;
            if (keys["ArrowDown"] || keys["s"] || keys["S"]) speed -= acceleration;
            if (keys["ArrowLeft"] || keys["a"] || keys["A"]) cube.rotation.y += turnSpeed;
            if (keys["ArrowRight"] || keys["d"] || keys["D"]) cube.rotation.y -= turnSpeed;

            //Speed caps
            if (speed >= maxSpeed) {
                speed = maxSpeed;
            }
            if (speed <= -maxSpeed) {
                speed = -maxSpeed;
            }

            if (keys["t"]) disco = 30;
            if (disco === 0) {
                cubeMaterial.color.set(Math.random() * 0xffffff);
                groundMaterial.color.set(Math.random() * 0xffffff);
                disco = 30;
            } else {
                disco -= 1;
            }
            //Slow cube automatically if no button pressed
            speed *= 0.97;
            cube.translateX(speed);

            if (keys["-"]) {
                cameraDistX += 0.5;
                cameraDistY += 0.5;
            }
            if (keys["="]) {
                cameraDistX -= 0.5;
                cameraDistY -= 0.5;
            }
            camera.lookAt(cube.position);
            camera.position.copy(cube.position.clone().add(new THREE.Vector3(cameraDistX, cameraDistY, 0)));

            const tileX = Math.round(cube.position.x / 10) * 10; // round by 10 to find the nearest empty cube in sets of 10
            const tileZ = Math.round(cube.position.z / 10) * 10;

            const key = tileX + "," + tileZ;

            if (!tiles.has(key)) {
                tiles.add(key);

                const tile = new THREE.Mesh(groundGeometry, new THREE.MeshStandardMaterial({ color: Math.random() * 0xffffff }));
                //position tiile relative to center
                tile.position.set(tileX, -0.5, tileZ);
                tile.rotation.x = (-Math.PI / 2);  // same rotation as your first ground
                myScene.add(tile);
            }

            myRenderer.render(myScene, camera);
        };
        animate();

        // Cleanup function
        return () => {
            threeJShomepage.removeChild(myRenderer.domElement);
            removeEventListener('keydown', handleKeyDown);
            removeEventListener('keyup', handleKeyUp);
            cancelAnimationFrame(frameId);
            myRenderer.dispose();
            document.body.classList.remove("no-scroll");  //reset scrolling
        };

    }, []);

    return (
        <main>
            <div className="Scene" ref={sceneReference}> </div>

            <section id="Controls" className="scene-content">
                <div className="scene-content-card">
                    <h2>Controls</h2>
                    <p> WASD or ARROW keys to move <br />
                        press the secret button for disco! </p>
                </div>
            </section>

            {/* <section id="goals" className="temp-content-section fade-section">
          <div className="temp-section-card">
            <h2>Goals</h2>
            <h3>Short Term (1-2 years)</h3>
            <ul>
              <li> Learn piano </li>
              <li> Write one book. </li>
              <li> Fully build and deploy one mobile game</li>
              <li> Begin professional career in the software development industry by Jan 2027 </li>
              <li> Work on physical health: Min of 3 weightlifting sessions a week. Run a sub 25 minute 5k. Prioritize meal planning. </li>
              <li> Buy a new car </li>
            </ul>
            <h3>Long Term (5-10 years)</h3>
            <ul>
              <li> Become Financially independent </li>
              <li> Travel to 15 different countries current countries visited: France, Switzerland, Italy, Aruba, Mexico, Canada. Count 6/15 </li>
              <li> Become a published author for Primary series, The Pristines</li>
            </ul>
          </div>
        </section> */}
        </main>
    );
}

export default Scene;
