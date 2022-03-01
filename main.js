let tile1 = document.getElementById("t1");
let tile2 = document.getElementById("t2");
let tile3 = document.getElementById("t3");
let tile4 = document.getElementById("t4");
let tile5 = document.getElementById("t5");
let tile6 = document.getElementById("t6");
let tile7 = document.getElementById("t7");
let tile8 = document.getElementById("t8");
let tile9 = document.getElementById("t9");
let playerTurn = document.getElementById("Player_V");

let Player_V = "V";
let plays = 0;
let gameWon = false;

function player() {
    if (Player_V === "V") {
        Player_V = "G";
    } else {
        Player_V = "V";
    }
    playerTurn.innerText = Player_V + "'s Turn!";
}

function clickedTile(tile) {
    tile.innerText = Player_V;
    plays++;
    winner();
    player();
    if (gameWon === false && plays === 9) {
        playerTurn.innerText = "Tie!"
    }
    if (gameWon === true) {
        player();
        playerTurn.innerText = Player_V + " Won!"
    }
}


// Start
function gameplay() {
    tile1.onclick = function () { clickedTile(tile1); tile1.onclick = ""; }

    tile2.onclick = function () { clickedTile(tile2); tile2.onclick = ""; }

    tile3.onclick = function () { clickedTile(tile3); tile3.onclick = ""; }

    tile4.onclick = function () { clickedTile(tile4); tile4.onclick = ""; }

    tile5.onclick = function () { clickedTile(tile5); tile5.onclick = ""; }

    tile6.onclick = function () { clickedTile(tile6); tile6.onclick = ""; }

    tile7.onclick = function () { clickedTile(tile7); tile7.onclick = ""; }

    tile8.onclick = function () { clickedTile(tile8); tile8.onclick = ""; }

    tile9.onclick = function () { clickedTile(tile9); tile9.onclick = ""; }
}


// Game Over
function gameOver() {
    tile1.onclick = "";
    tile2.onclick = "";
    tile3.onclick = "";
    tile4.onclick = "";
    tile5.onclick = "";
    tile6.onclick = "";
    tile7.onclick = "";
    tile8.onclick = "";
    tile9.onclick = "";
}


// Check Winner
const winner = () => {
    if (tile1.innerText != "" && tile1.innerText === tile2.innerText && tile1.innerText === tile3.innerText ||
        tile4.innerText != "" && tile4.innerText === tile5.innerText && tile4.innerText === tile6.innerText ||
        tile7.innerText != "" && tile7.innerText === tile8.innerText && tile7.innerText === tile9.innerText ||
        tile1.innerText != "" && tile1.innerText === tile4.innerText && tile1.innerText === tile7.innerText ||
        tile2.innerText != "" && tile2.innerText === tile5.innerText && tile2.innerText === tile8.innerText ||
        tile3.innerText != "" && tile3.innerText === tile6.innerText && tile3.innerText === tile9.innerText ||
        tile1.innerText != "" && tile1.innerText === tile5.innerText && tile1.innerText === tile9.innerText ||
        tile3.innerText != "" && tile3.innerText === tile5.innerText && tile3.innerText === tile7.innerText
    ) {
        const gameOverDiv = document.getElementById("game-over-area");
        gameOverDiv.classList.remove("hidden");
        reset();
        console.log("Winner!")

    }
}

function reset() {
    board.onclick = "";
}


function playAgain() {
    currentLetter = "V";
    playerTurn.innerText = Player_V + "'s Turn!";
    plays = 0;
    gameWon = false;
    tile1.innerText = "";
    tile2.innerText = "";
    tile3.innerText = "";
    tile4.innerText = "";
    tile5.innerText = "";
    tile6.innerText = "";
    tile7.innerText = "";
    tile8.innerText = "";
    tile9.innerText = "";
    gameplay();
}

gameplay();
let restartButton = document.getElementById("play-again")
restartButton.addEventListener('click', playAgain);