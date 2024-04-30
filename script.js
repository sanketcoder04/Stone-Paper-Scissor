let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".icon");
const message = document.querySelector("#message");
const userScoreBoard = document.querySelector("#player-score");
const compScoreBoard = document.querySelector("#computer-score");
const newGame = document.querySelector(".new-game");

//Get Computer's Random Choice

const getCompChoice = () => {
    const optionsArr = ["rock", "paper", "scissor"];
    const index = Math.floor(Math.random() * 3);
    return optionsArr[index];
}

//Show Draw Condition

const resultDraw = () => {
    message.innerText = "Game was Draw. Play again.";
    message.style.backgroundColor = "#778da9";
}

//Show Result and Score after each round

const showResult = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreBoard.innerText = "User : " + userScore;
        message.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
    } else {
        compScore++;
        compScoreBoard.innerText = "Computer : " + compScore;
        message.innerText = `You lost. ${compChoice} beats ${userChoice}`;
        message.style.backgroundColor = "red";
    }
}

//Decide Game round Winner

const decideWinner = (userChoice) => {
    let compChoice = getCompChoice();
    if (userChoice === compChoice) {
        resultDraw();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            if (compChoice === "scissor") {
                userWin = true;
            }
            else {
                userWin = false;
            }
        }
        else if (userChoice === "paper") {
            if (compChoice === "rock") {
                userWin = true;
            }
            else {
                userWin = false;
            }
        }
        else {
            if (compChoice === "paper"){
                userWin = true;
            }
            else{
                userWin = false;
            }
        }
        showResult(userWin, userChoice, compChoice);
    }
}

//Taking choice of User

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        decideWinner(userChoice);
    });
});

//New Game Functionality

newGame.addEventListener("click", () => {
    message.innerText = "Play Your Turn";
    message.style.backgroundColor = "#778da9";
    compScoreBoard.innerText = "Computer : 0";
    userScoreBoard.innerText = "User : 0";
    userScore = 0;
    compScore = 0;
})