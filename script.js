// Return one of the following string values
const getComputerChoice = function () {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.trunc(Math.random() * choices.length);
  return choices[randomNumber];
};

const getHumanChoice = function () {
  const player = prompt("Choose one (Rock, Paper, or Scissors): ");
  return player;
};

console.log(getHumanChoice());
const humanScore = 0;
const computerScore = 0;

const playRound = function (humanChoice, computerChoice) {
  if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats Scissors");
  } else if (
    humanChoice.toLowerCase() === "rock" &&
    computerChoice === "paper"
  ) {
    console.log("You lose! Paper beats Rock");
  } else if (
    humanChoice.toLowerCase() === "scissors" &&
    computerChoice === "paper"
  ) {
    console.log("You win! Scissors beats Paper");
  } else if (
    humanChoice.toLowerCase() === "scissors" &&
    computerChoice === "rock"
  ) {
    console.log("You lose! Rock beats Scissors");
  } else if (
    humanChoice.toLowerCase() === "paper" &&
    computerChoice === "rock"
  ) {
    console.log("You win! Paper beats Rock");
  } else if (
    humanChoice.toLowerCase() === "paper" &&
    computerChoice === "scissors"
  ) {
    console.log("You lose! Scissors beats Paper");
  } else {
    console.log("It's a tie");
  }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));
