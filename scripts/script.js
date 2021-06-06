function playRound(computerSelect, playerSelect) {
    // 0 - rock; 1 - paper; 2 - scissors
     
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

function showErrorMessage() {
    let errorMessage = "Sorry, something has gone wrong... :(";
    console.log(errorMessage);
}

function getStringMoveValue(numMoveValue) {
    switch(numMoveValue) {
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

function computerPlay() {
    let currentMove = Math.floor(Math.random() * 3);
    return currentMove;
}

