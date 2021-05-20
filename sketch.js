let rando;

// Assigning sound
let animal = [4]; // Easy

let note = []; // Easy

let player = [];
let counter;
let life = 3;

let space = "zoom";

let button;

let gameStarted = false;
let playing = true;
let speak = true;

// Load sounds
function preload() {
  //animal1 = loadImage('images/sugarOne.png');
  //animal2 = loadImage('images/sugarOne.png');
  //animal3 = loadImage('images/sugarOne.png');
  //animal4 = loadImage('images/sugarOne.png');
  //eAnimal = [animal1, animal2, animal3, animal4];
}

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(255);

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
  let rand = random(3, 6);
  rando = rand;

  // Array with randomized, given numbers
  let eMode = [rando];

  // Each element have number 1, 2, 3, 4, each for arrow keys.
  // The arrow keys then get assigned to sounds.
  // eAnimal[] is the default array of sound library.
  // eNote[] is what is being played when the game starts.
  if (space == "d1") {
    for (var i = 0; i < rand; i++) {
      
      eMode[i] = random(0, 4);

      // Assigning Sound library array to randomized array
      // eMode[] <-> eNote[] <-> eAnimal[]
      if (eMode[i] == 0) {
        eNote[i] == eAnimal[0];
      } else if (eMode[i] == 1) {
        eNote[i] == eAnimal[1];
      } else if (eMode[i] == 2) {
        eNote[i] == eAnimal[2];
      } else if (eMode[i] == 3) {
        eNote[i] == eAnimal[3];
      }
    }
  }
}

// NPC plays sound.
// Then player repeats the sound
// A single error will start over the memorization.
function game() {
  background(0);
  circle(windowWidth / 2, windowHeight / 2, 100);
  counter = 0;
  speak = true;
  
  while (playing) {
    if (counter == 0 && speak) {
      for (var i = 0; i < rando; i++) {
        eNote[i].play();
      }
      
      speak = false;
    }
    
    // Player gets the pattern wrong.
    if (player[counter] != eMode[counter]) {
      counter = 0;
      life -= 1;
    }
    else if (player[3] == eMode[3]) {
      counter = 0;
      space = "youWon";
      break;
    }
    else if(life == 0)
      {
        space = "youLose";
        break;
      }
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
  if (space == "d1") {
    if (keyCode == UP_ARROW) {
      eAnimal[0].play();
      player[counter] = 1;
      counter++;
    } else if (keyCode == LEFT_ARROW) {
      player[counter] = 2;
      counter++;
      eAnimal[1].play();
    } else if (keyCode == RIGHT_ARROW) {
      player[counter] = 3;
      counter++;
      eAnimal[2].play();
    } else if (keyCode == DOWN_ARROW) {
      player[counter] = 4;
      counter++;
      eAnimal[3].play();
    }
  }
}
