const tiles = document.querySelector("board");

const PLAYER_V = "V";
const PLAYER_G = "G";

let seclectedTile;
let num = 0
let turn = PLAYER_V;

const boardState = Array(board.length);
boardState.fill(null);  


tile.onclick = function(event){
    let targetTile = event.target;
    tile(targetTile);
}
const tile = (tile) => {
    if(num % 2 === 0){
        console.log("Even Number")
        tile.innerText = "V";
    } else {
        tile.innerText = "G"
    }
    num++
};


const strike = document.getElementById("strike");
const gameOverArea = document.getElementById("game-over-area");
const gameOverText = document.getElementById("game-over-text");
const playAgain = document.getElementById("play-again");


function setHoverText() {
    board.forEach(tile => {
        board.classList.remove("v-hover")
        board.classList.remove("g-hover")
    });
    const hoverClass = `${turn.toLowerCase()}-hover`;

    board.forEach(board => {
        if(board.innerText === ""){
            board.classList.add(hoverClass);
        }
    });
}
setHoverText();



function checkWinner() {
    for(const winningCombination of winningCombinations){
        const {combo, strikeClass} = winningCombination;
        const tileValue1 = boardState[combo[0] - 1];
        const tileValue2 = boardState[combo[1] - 1];
        const tileValue3 = boardState[combo[2] - 1];

        if(
            tileValue1 != null && 
            tileValue1 === tileValue2 && 
            tileValue1 === tileValue3
            ) {
        strike.classList.add(strikeClass);
        gameOverScreen(tileValue1);
        return;
    };
};
};



const allTileFilledIn = boardState.every((tile) => tile !== null);
if(allTileFilledIn){
    gameOverScreen(null);
};



function gameOverScreen(winnerText){
    let text = "Draw!"
    if(winnerText != null) {
        text = `Winner is ${winnerText}`;
    };
    gameOverArea.className = "visible";
    gameOverText.innerText = text;
};



function startNewGame(){
    strike.className = "strike";
    gameOverArea.className = "hidden";
    boardState.fill(null);
    tiles.forEach((tiles) => (tiles.innerText = ""));
    turn = PLAYER-V;
setHoverText(); 
};



const winningCombinations = [
    { combo:[1, 2, 3], strikeClass: "strike-row-1" },
    { combo:[4, 5, 6], strikeClass: "strike-row-2" },
    { combo:[7, 8, 9], strikeClass: "strike-row-3" },

    { combo:[1, 4, 7], strikeClass: "strike-column-1" },
    { combo:[2, 5, 8], strikeClass: "strike-column-2" },
    { combo:[3, 6, 9], strikeClass: "strike-column-3" },

    { combo:[1, 5, 9], strikeClass: "strike-diagonal-1" },
    { combo:[3, 5, 7], strikeClass: "strike-diagonal-2"},
];

