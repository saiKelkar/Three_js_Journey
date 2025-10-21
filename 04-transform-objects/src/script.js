/**
 * 4 properties to transform objects: (all object3D have these properties)
 * position
 * scale
 * rotation
 * quaternion
 */

import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

/*
mesh.position.x = 0.7
mesh.position.y = -0.6
mesh.position.z = 1
*/

// changing all at once
mesh.position.set(0.7, -0.6, 1)

scene.add(mesh)

mesh.position.normalize() // takes the length and reduces it to 1 (all the (x, y. z) values)
console.log(mesh.position.length()) // length from center of the screen to the object

// Axes helper - shows the axes (x, y, z) - used to help position objects
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

// Scale
mesh.scale.x = 2

// change scale all at once
mesh.scale.set(2, 0.1, 0.1)

// Rotation
mesh.rotation.reorder('YXZ') // reorders in a way we want to apply the rotation to the object
mesh.rotation.y = Math.PI * 0.5

// Group (easier to apply transformations to multiple object3D if they are in one group)
const group = new THREE.Group()
group.position.y = 1
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
cube2.position.x = -2
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
)
cube3.position.x = 2
group.add(cube3)

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
camera.position.y = 1
camera.position.x = 1
scene.add(camera)

console.log(mesh.position.distanceTo(camera.position)) // distance of the object from the camera
camera.lookAt(mesh.position)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)