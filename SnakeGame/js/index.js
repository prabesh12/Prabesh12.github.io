let direction = { x: 0, y: 0 };
const foodSound = new Audio("music/food.mp3");
const gameOverSound = new Audio("music/gameover.mp3");
const moveSound = new Audio("music/move.mp3");
const backGroundMusic = new Audio("music/music.mp3");
let speed = 19;
let score = 0;
let lastPaintTime = 0;
let snakeArray = [
  {
    x: 13,
    y: 15,
  },
];
food = { x: 6, y: 7 };

//Game functions

function main(ctime) {
  window.requestAnimationFrame(main);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }

  lastPaintTime = ctime;
  gameEngine();
}

function isCollide(snake) {
  //if snake collides into itself
  for (let index = 1; index < snakeArray.length; index++) {
    if (snake[index].x === snake[0].x && snake[index].y === snake[0].y) {
      return true;
    }
  }

  //if snake collides with the boundary of the board
  if (
   ( snake[0].x >= 18 || snake[0].y >= 18)||
    (snake[0].x <= 0 || snake[0].y <=0) 
  ) {
    return true;
  }
  return false;
}

function gameEngine() {
  //Part 1: Updating the snake array & food
  if (isCollide(snakeArray)) {
    gameOverSound.play();
    direction = { x: 0, y: 0 };
    alert("Game Over, Press any key to play again!");
    snakeArray = [{ x: 13, y: 15 }];
    score = 0;
  }

  //if snake has eaten the food, increment the score and regenrate the food
  if (snakeArray[0].y === food.y && snakeArray[0].x === food.x) {
    foodSound.play();
    score += 1; //score = score +1 ;
    if (score > hiScoreVal) {
      hiScoreVal = score;
      localStorage.setItem("hiScore", JSON.stringify(hiScoreVal));
      hiscoreBox.innerHTML = "HiScore: " + hiScoreVal;
    }
    scoreBox.innerHTML = "Score: " + score;
    snakeArray.push({
      x: snakeArray[0].x + direction.x,
      y: snakeArray[0].y + direction.y,
    });

    // varibales defined  to position the food randomly in board
    let a = 2;
    let b = 10;

    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }

  //Moving the Snake
  for (let i = snakeArray.length - 2; i >= 0; i--) {
    snakeArray[i + 1] = { ...snakeArray[i] };
  }

  snakeArray[0].x += direction.x;
  snakeArray[0].y += direction.y;

  //Part 2: Display the snake and food

  //Display the snake
  board.innerHTML = "";
  snakeArray.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;

    index == 0
      ? snakeElement.classList.add("head")
      : snakeElement.classList.add("snake");

    board.appendChild(snakeElement);
  });

  //Display food
  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

// Main logic starts here

let hiScore = localStorage.getItem("hiScore");
hiScore === null
  ? ((hiScoreVal = 0),
    localStorage.setItem("hiScore", JSON.stringify(hiScoreVal)))
  : ((hiScoreVal = JSON.parse(hiScore)),
    (hiscoreBox.innerHTML = " HiScore: " + hiScore));
window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {
  direction = { x: 0, y: 1 };
  moveSound.play();
  switch (e.key) {
    case "ArrowUp":
      console.log("ArrowUp");
      direction.x = 0;
      direction.y = -1;
      break;

    case "ArrowDown":
      console.log("ArrowDown");
      direction.x = 0;
      direction.y = 1;
      break;

    case "ArrowLeft":
      console.log("ArrowLeft");
      direction.x = -1;
      direction.y = 0;
      break;

    case "ArrowRight":
      console.log("ArrowRight");
      direction.x = 1;
      direction.y = 0;
      break;
    default:
      break;
  }
});
