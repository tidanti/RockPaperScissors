function playRound(computerSelect, playerSelect) {
    // 0 - rock; 1 - paper; 2 - scissors
    if ((computerSelect === 0 && playerSelect === 0) ||
            (computerSelect === 1 && playerSelect === 1) ||
            (computerSelect === 2 && playerSelect === 2)) {
                
                return "nobody";
    } else if ((computerSelect === 0 && playerSelect === 1) ||
            (computerSelect === 1 && playerSelect === 2) ||
            (computerSelect === 2 && playerSelect === 0)) {

                return "player";
    } else {
        return "computer";
    }
}

function getWinner(computerScores, playerScores) {
    if (computerScores > playerScores) {
        return "Computer";
    } else if (computerScores < playerScores) {
        return "Player";
    } else {
        return "draw";
    }
}

function showGameResult(winner, winnerScores = 0, looserScores = 0) {
    alert(winner + " wins!");
    //alert(winnerScores + " against " + looserScores + "!");
}

function showDrawGameResult(finalScores) {
    alert("Draw! Each player has " + finalScores + " scores.");
}

function showWinMessage(computerSelect, playerSelect) {
    if (computerSelect === "err" || playerSelect === "err") {
        showErrorMessage();
    }
    
    let winMessage = "You won! " + playerSelect + " beats " + computerSelect + "! =)";
    alert(winMessage);
}

function showLooseMessage(computerSelect, playerSelect) {
    if (computerSelect === "err" || playerSelect === "err") {
        showErrorMessage();
    }

    let looseMessage = "You lost! " + computerSelect + " beats " + playerSelect + "! =(";
    alert(looseMessage);
}

function showDrawMessage() {
    alert("Draw!");
}

function showScores(computerScores, playerScores) {
    alert("Player's scores: " + playerScores);
    alert("Computer's scores: " + computerScores);
}

function showErrorMessage(errorType = "") {
    if (errorType === "") {
        alert("Sorry, something has gone wrong... :(");
    } else if (errorType === "wrongInput") {
        alert("Wrong input!");
    }
}

function showWelcomeMessage() {
    alert("Welcome to the RockPaperScissors game!" +
            "You'll play 4 round against computer.");
}

function getStringMoveValue(moveValue) {
    switch(moveValue) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            return "err";
    }
}

function getPlayerSelectInNumber(playerSelect) {
    switch(playerSelect) {
        case "rock":
            return 0;
            break;
        case "paper":
            return 1;
            break;
        case "scissors":
            return 2;
            break;
        default:
            return "err";
    }
}

function checkPlayerSelect(playerSelect) {
    if (playerSelect === "" || playerSelect === undefined ||
            playerSelect === null) {
                
                return "err";
    } else {
        playerSelect = playerSelect.toLowerCase();
    }

    if (playerSelect != "rock" && playerSelect != "paper" &&
            playerSelect != "scissors") {
        
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
    // error consts
    const INPUT_ERROR = "wrongInput";

    showWelcomeMessage();
    let finalPlayerScore = 0;
    let finalComputerScore = 0;

    for (let i = 1; i <= 4; i++) {

        // PLAYER'S MOVE SECTION
        let playerMove = checkPlayerSelect(playerPlay());

        if (playerMove === "err") {
            showErrorMessage(INPUT_ERROR);
            alert("Enter your choice again!");
            i--;
            continue;
        } else {
            playerMove = getPlayerSelectInNumber(playerMove);
        }

        if (playerMove === "err") {
            showErrorMessage();
            alert("Try again...");
            i--;
            continue;
        }
        // END OF PLAYER'S MOVE SECTION

        let computerMove = computerPlay();
        
        let playerMoveInString = getStringMoveValue(playerMove);
        let computerMoveInString = getStringMoveValue(computerMove);

        if (playerMoveInString === "err" || computerMoveInString === "err") {
            showErrorMessage();
            alert("Try again...");
            i--;
            continue;
        }

        let winnerInThisRound = playRound(computerMove, playerMove);
        if (winnerInThisRound === "player") {
            finalPlayerScore++;
            showWinMessage(computerMoveInString, playerMoveInString);
            showScores(finalComputerScore, finalPlayerScore);
        } else if (winnerInThisRound === "computer") {
            finalComputerScore++;
            showLooseMessage(computerMoveInString, playerMoveInString);
            showScores(finalComputerScore, finalPlayerScore);
        } else {
            finalPlayerScore++;
            finalComputerScore++;
            showDrawMessage();
            showScores(finalComputerScore, finalPlayerScore);
        }
    }
    
    let winner = getWinner(finalComputerScore, finalPlayerScore);
    if (winner != "draw") {
        showGameResult(winner);
    } else {
        showDrawGameResult(finalPlayerScore);
    }
}

mainGame();
