// define Rock, Paper, Scissors as viable options
// User vs Computer
// define variable user input *prompt?
// define the variable that the computer uses
// Use `alert()`, `confirm()`, and `prompt()` methods
// last step, computers selection at random


// user choices

// Define variables
const options = ["Rock", "Paper", "Scissors"];
var isGameOver = false;
var playerChoice
var computerChoice
var playerWins = 0;
var computerWins = 0;
var winner


// Generate random option

var numOption
var numChoice

function randomNum() {
    numOption = Math.floor(Math.random() * 3);
    return numOption;
};
function randomChoice(){
    randomNum()
    computerChoice = options[numOption];
    return computerChoice;
};

let message = document.querySelector("#message");
let computerScore = document.querySelector("#computerDisplay");
let playerScore = document.querySelector("#playerDisplay")

let rockButton = document.querySelector("#rock");

rockButton.addEventListener("click", function(){
    playerChoice = "Rock";
    randomChoice()
    compare();
    if(winner==="Draw") {
        message.textContent = `You Chose ${playerChoice}, and the Computer Chose ${computerChoice}, Which Results In a ${winner}`;
    } else {
    message.textContent = `You Chose ${playerChoice}, the Computer Chose ${computerChoice}, ${winner} Wins!`;
    }
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;
});

let paperButton = document.querySelector("#paper");

paperButton.addEventListener("click",function(){
    playerChoice = "Paper";
    randomChoice();
    compare();
    message.textContent = `You Chose ${playerChoice}, the Computer Chose ${computerChoice}, ${winner}`;
});

let scissorsButton = document.querySelector("#scissors");

scissorsButton.addEventListener("click", function(){
    playerChoice = "Scissors";
    randomChoice();
    compare();
    message.textContent = `You Chose ${playerChoice}, the Computer Chose ${computerChoice}, ${winner}`;
});

// function playerPrompt() {
//    return prompt("Please Choose Rock, Paper, Or Scissors");
// }

// function confirmGameEnd() {
//     if(confirm("Do You Really Want to End the Game")) {
//         alert(`Game Ended! Player: ${playerWins} Computer: ${computerWins}`);
//         isGameOver = true;
//     } 
// }

//test player choice vs computer choice
function compare() {
    switch (playerChoice) {
        case "Rock":
            if (computerChoice === "Scissors") {
                winner = "Player";
                playerWins++;
            } else if (computerChoice === "Paper") {
                winner = "Computer";
                computerWins++;

            } else {
                winner = "Draw";
            } break

        case "Paper":
            if (computerChoice === "Scissors") {
                winner = "Computer";
                computerWins++;
            } else if (computerChoice === "Rock") {
                winner = "Player";
                playerWins++;
            } else {
                winner = "Draw"
            } break;

        case "Scissors":
            if (computerChoice === "Rock") {
                winner = "Computer"
                computerWins++;
            } else if (computerChoice === "Paper") {
                winner = "Computer"
                playerWins++;
            } else {
                winner = "Draw"
            }
            break;

    }
}

// function playGame()

// // Game Start and End Conditions
// function gameStart() {
//     var gameStart = prompt("Do you Want To Play a Game of Rock, Paper, Scissors?");
//     computerChoice = randomChoice();
//     alert(`Current Score: Player ${playerWins} Computer ${computerWins}`);
//     if(gameStart === "y") {
//         playerChoice = playerPrompt();
//         compare()
//     } else if (gameStart === "n") {
//         confirmGameEnd();
//         alert("Game Is Over, Goodbye");
//         return
//     } else {
//         alert("That is not a Valid Repsonse");
//     }

// }

// while (isGameOver === false) {
//     gameStart();
// }

