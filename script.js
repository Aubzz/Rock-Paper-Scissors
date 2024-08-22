let humanScore = 0;
let computerScore = 0;

// COMPUTER
const getComputerChoice = function () {};

// PLAYER
const getHumanChoice = function () {
  const playerChoice = prompt("Pick your choice (Rock Paper Scissors)?: ");
  return playerChoice;
};

// PLAY
const playRound = function (humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "rock") {
    console.log("It's a tie")
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    console.log("It's a tie")
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    console.log("It's a tie")
  } else if (humanChoice === "rock" )
};

// PLAY THE ENTIRE GAME
const playGame = function () {};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
