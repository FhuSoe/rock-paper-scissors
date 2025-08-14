//For return value is between 1,2 ,and 3
//Convert the number to the a string
//Tried without using an Array

function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

console.log(getComputerChoice());