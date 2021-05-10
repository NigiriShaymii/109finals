var mic = new AudioContext;
let heartbeat = [];
let sketchStarted = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if(sketchStarted)
  {
    //Animation
    console.log("mic level " + mic.getLevel());
  }
}
