// Return one of the following string values
const getComputerChoice = function () {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.trunc(Math.random() * choices.length);
  return choices[randomNumber];
};

const getHumanChoice = function () {
  // const player = prompt("Choose one (Rock, Paper, or Scissors): ");
  return player;
};

const playGame = function () {
  let humanScore = 0;
  let computerScore = 0;

  const playRound = function (humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
      humanScore += 1;
      console.log("You win! Rock beats Scissors");
    } else if (
      humanChoice.toLowerCase() === "rock" &&
      computerChoice === "paper"
    ) {
      computerScore += 1;
      console.log("You lose! Paper beats Rock");
    } else if (
      humanChoice.toLowerCase() === "scissors" &&
      computerChoice === "paper"
    ) {
      humanScore += 1;
      console.log("You win! Scissors beats Paper");
    } else if (
      humanChoice.toLowerCase() === "scissors" &&
      computerChoice === "rock"
    ) {
      computerScore += 1;
      console.log("You lose! Rock beats Scissors");
    } else if (
      humanChoice.toLowerCase() === "paper" &&
      computerChoice === "rock"
    ) {
      humanScore += 1;
      console.log("You win! Paper beats Rock");
    } else if (
      humanChoice.toLowerCase() === "paper" &&
      computerChoice === "scissors"
    ) {
      computerScore += 1;
      console.log("You lose! Scissors beats Paper");
    } else {
      console.log("It's a tie");
    }
  };

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
  }
  winner(humanScore, computerScore);
};

const winner = function (humanScore, computerScore) {
  if (computerScore < humanScore) {
    console.log("You win!");
  } else if (computerScore > humanScore) {
    console.log("You lose!");
  } else {
    console.log("It's a tie");
  }
};
playGame();
