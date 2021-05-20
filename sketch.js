let rando;
let audio;
var sound = new AudioContext;

let cry;

// Assigning sound
let animal = [4]; // Easy

let note = []; // Easy
let eAnimal = [];
let eMode = [];

let w;
let a;
let d;
let s;
let  eAnimal = [];
let eNote = [];
let player = [];
let counter = 0;
let life = 5;
let correct = 0;

let space = "zoom";

let button;

let gameStarted = false;
let playing = true;
let speak = true;
let start = true;

// Load sounds
function preload() {

  wolf = loadImage('media/wolfGlitch.jpg');

  w = loadSound('media/sound1.mp3');
  a = loadSound('media/sound2.mp3');
  d = loadSound('media/sound3.mp3');
  s = loadSound('media/sound4.mp3');



eAnimal = [{
  snd: loadSound('media/sound1.mp3'),
  button: 0
}, {
  snd: loadSound('media/sound2.mp3'),
  button: 1
}, {
  snd: loadSound('media/sound3.mp3'),
  button: 2
}, {
  snd: loadSound('media/sound4.mp3'),
  button: 3
}, {
  snd: loadSound('media/sound1.mp3'),
  button: 0
}, {
  snd: loadSound('media/sound2.mp3'),
  button: 1
}, {
  snd: loadSound('media/sound3.mp3'),
  button: 2
}, {
  snd: loadSound('media/sound4.mp3'),
  button: 3
}]


  let animal1 = createAudio('media/sound1.mp3');
  let animal2 = createAudio('media/sound2.mp3');
  let animal3 = createAudio('media/sound3.mp3');
  let animal4 = createAudio('media/sound4.mp3');
  eAnimal = [animal1, animal2, animal3, animal4];
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  eAnimal = shuffle(eAnimal);
  console.log(eAnimal);

}

function draw() {
  background(wolf);

  switch (space) {
    case "zoom":
      zoomScreen();
      break;
    case "d1":
      if (!gameStarted) {
        init();
        gameStarted = true;
      }
      game();
      break;
    case "youWon":
      youWon();
      break;
    case "youLose":
      youLose();
      break;
    default:
      break;
  }
}

function zoomScreen() {
  background(0);
  fill(255, 0, 0);

  textSize(100);
  textAlign(CENTER);
  text("Whispers", windowWidth / 2, windowHeight / 2);

  fill(255);
  textSize(40);
  text(
    "Lend me your noises, creature... \n ...So I can understand you.",
    windowWidth / 2,
    (windowHeight * 3) / 5
  );

  textSize(20);
  text(
    "Guess the sequence of the noises using the arrow keys. \n\n Click to proceed.",
    windowWidth / 2,
    (windowHeight * 7) / 8
  );

  if (mouseIsPressed) {
    space = "d1";
  }
}

//Set up CPU array numbers
function init() {
  // Initiate rando number.

  // Array with randomized, given numbers
  eMode = [8];

  // Each element have number 1, 2, 3, 4, each for arrow keys.
  // The arrow keys then get assigned to sounds.
  // eAnimal[] is the default array of sound library.
  // eNote[] is what is being played when the game starts.
  if (space == "d1") {
    for (var i = 0; i < 8; i++) {

      eMode[i] = round(random(0, 4));
      // Assigning Sound library array to randomized array
      // eMode[] <->  eAnimal[]
      console.log("Order: " + eMode[i]);
    }
  }
}

// NPC plays sound.
// Then player repeats the sound
// A single error will start over the memorization.
function game() {
background(wolf);

  if (counter == 0 && speak) {
    for (var i = 0; i < rando; i++) {
      cry = eAnimal[i];
      cry.play();
    }
    speak = false;
  }
}

// Lose Condition
function youLose() {
  background(0);
  fill(255);
  text(
    "You failed to connect with the beast.",
    windowWidth / 2,
    windowHeight / 2
  );
  text(
    "\n\n Refresh the webpage to play again",
    windowWidth / 2,
    windowHeight / 2
  );
}

// Win Condition
function youWon() {
  background(0);
  fill(255);
  text("You contacted the best perfectly!", windowWidth / 2, windowHeight / 2);
  text(
    "\n\n Refresh the webpage to play again",
    windowWidth / 2,
    windowHeight / 2
  );
}

// Pressing the keys during gameplay.
function keyPressed() {
<<<<<<< HEAD
  if (!audio) {
    audio = true;
  }

}

function keyTyped() {

  if(!audio) {
    audio = true;
  }
  console.log("playing");
>>>>>>> fbe01c82bd52992e6b1a4cabf985dafbd456e3d1

  if (space == "d1") {
    if (key === 'w') {
      w.play();
    } else if (key === 'a') {
      a.play();
    } else if (key === 'd') {
      d.play();
    } else if (key === 's') {
      s.play();
    }
    counter++;

    console.log("Play: " + player[counter]);
    console.log("E: " + eMode[counter]);
    if (player[counter] != eMode[counter]) {
      speak = true;
      counter = 0;
    } else if (player[counter] === eMode[counter]) {
      correct++;
      counter++;
      console.log("Correct " + correct);
    }

    if (correct === 8) {
      counter = 0;
      space = "youWon";
    }
  }
}
