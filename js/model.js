/**
 * Cena
 */
let scene = new THREE.Scene();

/**
 * Câmera
 */
let camera = new THREE.PerspectiveCamera(85, window.innerWidth/window.innerHeight, .1, 1000);
camera.position.z = 0;
// camera.position.y = -50;

let animatedCamera = false;

/**
 * Renderizador
 */
let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector('.intro-content').appendChild(renderer.domElement);

window.addEventListener('resize', function(){
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
})

/**
 * Controle de órbita
 */
let controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.addEventListener('change', renderer);

/**
 * Ambient Occlusion
 */
// let renderPass = new THREE.RenderPass( scene, camera );

// let copyPass = new THREE.ShaderPass( THREE.CopyShader );
// copyPass.renderToScreen = true;

// let composer = new THREE.EffectComposer( renderer );

// composer.addPass( renderPass );
// composer.addPass( copyPass );

// composer.render( .05 );

// let ssaoPass = new THREE.SSAOPass( scene, camera, width, height );
// ssaoPass.kernelRadius = 16;
// composer.addPass( ssaoPass );

/**
 * Luzes
 */
let light = new THREE.AmbientLight(0xaaaaaa, .7, 100);
light.position.set(0,15,15);
scene.add(light);

let directionalLight = new THREE.DirectionalLight(0xeeeeee, .7, 100);
directionalLight.position.set(1, -5, -20);
directionalLight.castShadow = true;
scene.add(directionalLight);

let directionalLight2 = new THREE.DirectionalLight(0xcccccc, .7, 100);
directionalLight2.position.set(1, -5, 20);
directionalLight2.castShadow = true;
scene.add(directionalLight2);

/**
 * Model
 */
let loader = new THREE.GLTFLoader();

loader.load('super_amigos.gltf', gltf => {
  let logo = gltf.scene.children[0];
  logo.scale.set(.5, .5, .5);
  logo.position.set(-30, 30, 0);
  ourObj = gltf;

  scene.add(gltf.scene);

});

/**
 * Função para renderizar em tempo real
 */
const render = () => {
  requestAnimationFrame(render);
  
  if(!animatedCamera){
    if(camera.position.z < 400) camera.position.z += 4;
    else if(camera.position.z < 450) camera.position.z += 3;
    else if(camera.position.z < 500) camera.position.z += 2;
    else if(camera.position.z < 600) camera.position.z += 1;
    else animatedCamera = !animatedCamera;
  }


  renderer.render(scene, camera);
}

render();