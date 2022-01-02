var generatedPatterns;
var userClicked = [];
var score = 0;

var gameLevel ;
countScore();
var index;
// checks for authentication whether user clicked right block or not
function handleBoxClicked(box_id) {
  box_id = box_id.getAttribute("id");
  console.log(generatedPatterns);
  userClicked.push(box_id);
  console.log(`user clicked is ${userClicked}`);
  console.log(userClicked.at(-1));
  if (userClicked.at(-1) == generatedPatterns[userClicked.length - 1]) {
    document.getElementById(box_id).style.backgroundColor = "blue";
    setTimeout(() => {
      resetBox();
    }, 300);
    if (generatedPatterns.length == userClicked.length) {
      score++;
      updateScore();
      const highestScore = localStorage.getItem("HighScore");
      if (score > highestScore) {
        localStorage.setItem("HighScore", score);
      }
      resetPattern();
    }
  } else {
    document.getElementById(box_id).style.backgroundColor = "red";

    setTimeout(() => {
      window.location.reload();
    }, 500);
  }
}
function resetPattern() {
  userClicked = [];
  generatedPatterns = generatePattern();
}
function resetBox() {
  const tiles = document.getElementsByClassName("tile");

  for (var x = 0; x < tiles.length; x++) {
    tiles[x].style.backgroundColor = "white";
  }
}
//generates which box to blink
function generatePattern() {
let level;
  if(gameLevel == "easyMode")
  {
    level = 1;
  }
else if(gameLevel == "mediumMode"){
  level = 2;
}

else if(gameLevel == "hardMode"){
 level = 5;
}
  
  localStorage.setItem("userClicked", "");
  const patterns = [];
  var count = 0;
  const interval = setInterval(() => {
    for (var i = 0; i < score+1 ; i++) {
    const value = Math.floor(Math.random() *10);
      var boxId = "B" + value.toString();
      if (count == score) {
        clearInterval(interval);
        resetBox();
      }
    }
    patterns.push(boxId);
    count++;
    setTimeout(() => {
      resetBox();
    }, 500);
    console.log("Hellp"+boxId)
    document.getElementById(boxId).style.backgroundColor = "blue";
  
    if (count == score + level) {
      setTimeout(() => {
        resetBox();
      }, 2000);
    }
  }, 3000 / (score + 0.5));

  return patterns;
}
//function to count score
function countScore() {
  if (!localStorage.getItem("HighScore")) {
    localStorage.setItem("HighScore", 0);
  }

  document.getElementById("highscore").innerHTML =
    localStorage.getItem("HighScore");
}
//function to start game
function startGame() {
  generatedPatterns = generatePattern();
}
//function to update score
function updateScore() {
  document.getElementById("score").innerText = score;
}

// function to create box dynamically
function createBox(size) {
  for (index = 0; index < size; index++) {
    let block = document.createElement("div");
    block.setAttribute("class", " tile");
    block.setAttribute("id", "B" + index);
    block.setAttribute("onclick", `handleBoxClicked(B${index})`);
    let parentBlock = document.getElementById("sub-container");
    parentBlock.appendChild(block);
  }
}

// createBox(5); 

function easyMode(){

  gameLevel="easyMode";
  createBox(5);
  document.getElementById("contain").style.display = "block";
  document.getElementById("btn-container").style.display= "none";

}
function mediumMode(){
  gameLevel = "mediumMode";
  createBox(10);
  document.getElementById("contain").style.display = "block";
  document.getElementById("btn-container").style.display= "none";
}

function hardMode(){
  gameLevel = "hardMode";
  createBox(20);
  document.getElementById("contain").style.display = "block";
  document.getElementById("btn-container").style.display= "none";
}

