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

function getHumanChoice() {
  let inputChoice =  prompt("What will you choose ?");
  return inputChoice;
}

console.log(getHumanChoice());