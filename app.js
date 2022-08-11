
// variables
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

//function for functionality of the buttons
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

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
    }
    if (computerChoice === "rock" && userChoice === "scissors"){
        result = "You lost"
    }
    if (computerChoice === "paper" && userChoice === "scissors"){
        result = "You win"
    }
    if (computerChoice === "paper" && userChoice === "rock"){
        result = "You lost"
    }
    if (computerChoice === "scissors" && userChoice === "rock"){
        result = "You win"
    }
    if (computerChoice === "scissors" && userChoice === "paper"){
        result = "You lost"
    }
    resultDisplay.innerHTML = result
}

