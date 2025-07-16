
// Babylon.js MMO basic setup with fullscreen and multiplayer
const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);

const camera = new BABYLON.ArcRotateCamera("cam", Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 1, 0), scene);
camera.attachControl(canvas, true);
camera.lowerRadiusLimit = 5;
camera.upperRadiusLimit = 20;

const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 100, height: 100 }, scene);

const player = BABYLON.MeshBuilder.CreateBox("player", { height: 2, width: 1, depth: 1 }, scene);
player.position.y = 1;

const sword = BABYLON.MeshBuilder.CreateBox("sword", { height: 0.2, width: 0.1, depth: 1 }, scene);
sword.parent = player;
sword.position.x = 0.6;
sword.position.y = 1;
sword.position.z = 0.3;

const socket = io();
socket.emit("join", { id: Math.random().toString(36).substr(2, 9) });

function goFullscreen() {
  if (canvas.requestFullscreen) canvas.requestFullscreen();
  else if (canvas.webkitRequestFullscreen) canvas.webkitRequestFullscreen();
  else if (canvas.msRequestFullscreen) canvas.msRequestFullscreen();
}
window.addEventListener("click", goFullscreen);

engine.runRenderLoop(() => {
  scene.render();
});
