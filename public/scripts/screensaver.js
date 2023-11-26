
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('screensaver').appendChild(renderer.domElement);

// Create a torus based on a mathematical equation
const torusGeometry = new THREE.TorusGeometry(2, 0.5, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const torus = new THREE.Mesh(torusGeometry, material);
scene.add(torus);

// Set camera position
camera.position.z = 5;

// Define a function to update the scene
const animate = () => {
    requestAnimationFrame(animate);

    // Rotate the torus
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;

    renderer.render(scene, camera);
};

// Start the animation
animate();

// Set up a timer to activate the screensaver after 1 minute of inactivity
let inactivityTimer;
const inactivityThreshold = 60000; // 1 minute in milliseconds

const resetInactivityTimer = () => {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        // Show screensaver when the user is inactive
        document.getElementById('screensaver').style.display = 'block';
    }, inactivityThreshold);
};

// Reset the timer when there is user interaction
window.addEventListener('mousemove', resetInactivityTimer);
window.addEventListener('keypress', resetInactivityTimer);

// Initially, hide the screensaver
document.getElementById('screensaver').style.display = 'none';

// Handle window resize
window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
});
