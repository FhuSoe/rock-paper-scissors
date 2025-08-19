//For return value is between 1,2 ,and 3
//Convert the number to the a string
//Try without using an Array

function getComputerChoice() {
  let CC = Math.floor(Math.random() * 3) + 1;
  if (CC === 1) return "Rock";
  if (CC === 2) return "Paper";
  if (CC === 3) return "Scissors";
}

console.log(getComputerChoice());

//user input a choice
//function return that choice
function getHumanChoice() {
  let inputChoice =  prompt("What will you choose ?");
  return inputChoice;
}

//A Variable to keep track of the score
//Tracks the user wins
//Tracks the Computer wins
//Tracks the Draws

let humanScore = 0;
let computerScore = 0;

//Write a function that takes user and computer inputs
//Takes both of those arguments
//play a single round
// Increment the score of the round winner

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    return alert("Draw!");
} else if (humanChoice === "rock" && computerChoice === "scissors") {
  return alert("You win! Rock beats scissors");
} else if (humanChoice === "scissors" && computerChoice === "paper") {
  return alert("You win! Scissors beats paper");
} else if (humanChoice === "paper" && computerChoice === "rock") {
  return alert("You win! Paper beats rocks");
} else {
  return alert("You lost! Computer wins!");
}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(playRound())