
// variables
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const winnerDisplay = document.getElementById("winner");

let userChoice;
let computerChoice;
let result;
let winner;

let playerCounter = 0;
let computerCounter = 0;

//function for functionality of the buttons
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
    game()
  
}))

//function that counts the winner
function game(){
if (playerCounter == 5){
    winner = "Player"
    winnerDisplay.innerHTML = winner; 
}
else if (computerCounter == 5){
    winner = "Computer"
    winnerDisplay.innerHTML = winner;
}
}
//function that determines the computers choice

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    

    if (randomNumber == 0){
        computerChoice = 'rock';
    }
    if (randomNumber == 1){
        computerChoice = 'paper';
    }
    if (randomNumber == 2){
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

//function that takes users choice and compares it to the randomly generated computer choice. 

function getResult() {
    if (computerChoice === userChoice){
        result = "It's a draw"
    }
    if (computerChoice === "rock" && userChoice === "paper"){
        result = "You win"
        playerCounter++;
    }
    if (computerChoice === "rock" && userChoice === "scissors"){
        result = "You lost"
        computerCounter++;
    }
    if (computerChoice === "paper" && userChoice === "scissors"){
        result = "You win"
        playerCounter++;
    }
    if (computerChoice === "paper" && userChoice === "rock"){
        result = "You lost"
        computerCounter++;
    }
    if (computerChoice === "scissors" && userChoice === "rock"){
        result = "You win"
        playerCounter++;
    }
    if (computerChoice === "scissors" && userChoice === "paper"){
        result = "You lost"
        computerCounter++;
    }
    resultDisplay.innerHTML = result
}

//test

