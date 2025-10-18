/**
 * To start the project from scratch: ( run vite from terminal )
 * node -v (check version / download LTS version)
 * (change dir to where you want the npm to be installed)
 * npm init -y (node package manager)
 * (Add dependencies) Vite and Threejs
 * npm install vite
 * (inside package.json - change "scripts" contents to)
 * "scripts": {
 *      "dev": "vite",
 *      "build": "vite build"
 * },
 * (we can run the dev and build command from the terminal by writing)
 * npm run dev
 * (build command - npm run build - it will output the final version of the website)
 * npm install three (for threejs)
 * 
 * To work with a starter file directly:
 * npm install (inside the folder)
 * and npm run dev (to start the server as before)
 */

// To import threejs
import * as THREE from 'three'

/**
 * We need 4 elements:
 * Scene
 * Objects
 * Camera
 * Renderer
 */

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

// we need to add the object to the scene
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)