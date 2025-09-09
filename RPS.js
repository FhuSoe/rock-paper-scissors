//For return value is between 1,2 ,and 3
//Convert the number to the a string
//Try without using an Array

function getComputerChoice() {
  let CC = Math.floor(Math.random() * 3) + 1;
  if (CC === 1) return "Rock";
  if (CC === 2) return "Paper";
  if (CC === 3) return "Scissors";
}

//user input a choice
//function return that choice
function getHumanChoice() {
  let userChoice = prompt("What will you choose ?");
  return userChoice
}



//A Variable to keep track of the score
//Tracks the user wins
//Tracks the Computer wins
//Tracks the Draws
//Write a function that takes user and computer inputs
//Takes both of those arguments 
//play a single round to test
// Increment the score of the round winner until one of them reaches 5 wins

  let humanScore = 0;
  let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
      humanChoice = humanChoice.toLowerCase();
      computerChoice = computerChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      return "Draw!";
    } 
    else if ( (humanChoice === "rock" && computerChoice === "scissors") || 
   (humanChoice === "scissors" && computerChoice === "paper") ||
   (humanChoice === "paper" && computerChoice === "rock") 
    ) {
      humanScore++;
      return `You win! ${humanChoice} beats ${computerChoice}`
    } else {
  computerScore++;
    return `You lost! ${humanChoice} computer wins! ${computerChoice}` }
  }

  //Buttons Event listener
 const gameResult = document.querySelector("#divResult");
const rock = document.querySelector("#rock");
      rock.addEventListener("click", () => {
        const computerSelection = getComputerChoice()
        const result = playRound("rock", computerSelection);
        gameResult.textContent = `${result}. The score is now Human Score ${humanScore}, Computer score ${computerScore}`;
        
        if (humanScore === 5){
          gameResult.textContent = "Yay Human wins!"; 
        } else if (computerScore === 5) {
          gameResult.textContent = "Boo You lost to a computer"
        }
            });

const paper = document.querySelector("#paper");
      paper.addEventListener("click", () => {
        const computerSelection = getComputerChoice()
        const result = playRound("paper", computerSelection);
        gameResult.textContent = `${result}. The score is now Human Score ${humanScore}, Computer score ${computerScore}`;

        if (humanScore === 5){
          gameResult.textContent = "Yay Human wins!"; 
        } else if (computerScore === 5) {
          gameResult.textContent = "Boo You lost to a computer"
        }
      });

const scissors = document.querySelector("#scissors");
      scissors.addEventListener("click", () => {
        const computerSelection = getComputerChoice()
        const result = playRound("scissors", computerSelection);
        gameResult.textContent = `${result}. The score is now Human Score ${humanScore}, Computer score ${computerScore}`;
      
        if (humanScore === 5){
          gameResult.textContent = "Yay Human wins!"; 
        } else if (computerScore === 5) {
          gameResult.textContent = "Boo You lost to a computer"
        }
      });



  
// while (humanScore < 5 && computerScore <5) {
//   const humanSelection = getHumanChoice();
//   const computerSelection = getComputerChoice();
//   console.log(playRound(humanSelection, computerSelection));
//   console.log(`Human Score ${humanScore}, Computer score ${computerScore}` );
// }

// The function that plays the game to exactly 5 rounds
if (humanScore === 5){
    console.log("Yay Human wins!") 
  } else if (computerScore === 5) {
    console.log("Boo You lost to a computer")
  }