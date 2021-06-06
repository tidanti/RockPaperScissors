function playRound(computerSelect, playerSelect) {
    // 0 - rock; 1 - paper; 2 - scissors
     
}

function getGameResult(finalScore) {

}

function showWinMessage(computerSelect, playerSelect) {
    if (computerSelect === "err" || playerSelect === "err") {
        showErrorMessage();
    }
    
    let winMessage = "You won! " + playerSelect + " beats " + computerSelect + "! =)";
    console.log(winMessage);
}

function showLooseMessage(computerSelect, playerSelect) {
    if (computerSelect === "err" || playerSelect === "err") {
        showErrorMessage();
    }

    let looseMessage = "You lost! " + computerSelect + " beats " + playerSelect + "! =(";
    console.log(winMessage);
}

function showErrorMessage(errorType = "") {
    if (errorType === "") {
        console.log("Sorry, something has gone wrong... :(");
    } else if (errorType === "wrongInput") {
        console.log("Wrong input!");
    }
}

function showWelcomeMessage() {
    console.log("Welcome to the RockPaperScissors game!");
}

function getStringMoveValue(moveValue) {
    switch(moveValue) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "err";
    }
}

function getPlayerSelectInNumber(playerSelect) {
    if (playerSelect === "" || playerSelect === undefined || playerSelect === null) {

    }
    
    playerSelect = playerSelect.toLowerCase();

}

function checkPlayerSelect(playerSelect) {
    if (playerSelect === "" || playerSelect === undefined || playerSelect === null) {
        return "err";
    } else {
        playerSelect = playerSelect.toLowerCase();
    }

    if (playerSelect != "rock" && playerSelect != "paper" && playerSelect != "scissors") {
        return "err";
    } else {
        return playerSelect;
    }
}

function computerPlay() {
    let currentMove = Math.floor(Math.random() * 3);
    return currentMove;
}

function playerPlay() {
    let selectedValue = prompt("Your choice?");
    return selectedValue;
}

function mainGame() {
    showWelcomeMessage();
    let finalScore = 0;

    for (let i = 1; i <= 5; i++) {
        let playerMove = checkPlayerSelect(playerPlay());

        if (playerMove === "err") {

        } else {
            playerMove = getPlayerSelectInNumber(playerMove);
        }

        let computerMove = computerPlay();

        let playerWins = playRound(computerMove, playerMove);
        if (playerWins) {
            finalScore++;
        }
    }
    
    getGameResult(finalScore);
}