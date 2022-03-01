let tile1 = document.getElementById("tile1")
let tile2 = document.getElementById("tile2")
let tile3 = document.getElementById("tile3")
let tile4 = document.getElementById("tile4")
let tile5 = document.getElementById("tile5")
let tile6 = document.getElementById("tile6")
let tile7 = document.getElementById("tile7")
let tile8 = document.getElementById("tile8")
let tile9 = document.getElementById("tile9")
// console.log(tile6);

const PLAYER_V = "V";
const PLAYER_G = "G";
const Won = false;

const turn = document.getElementById("PLAYER_V");
const strike = document.getElementById("strike");
const gameOverArea = document.getElementById("game-over-area");
const gameOverText = document.getElementById("game-over-text");
const playAgain = document.getElementById("play-again");

let board = document.querySelector("#board")


function player(){
    if(PLAYER_V === "V"){
        PLAYER_V = "G";
    }else{
        PLAYER_V = "V";
    }
    turn.innerText = PLAYER_V + "'Turn!";
}

function clickedTile (tile) {
    tile.innerText = PLAYER_V;
    plays++;
    checkForWin(PLAYER_V);
    player();
    if(Won === false && plays === 9){
        turn.innerText = "Draw"
    }
    if(Won === true){
        player();
        turn.innerText = PLAYER_V + "Won!!!"
    }
}

// GamePlay
function startGame(){
    tile1.onclick = function() {
        clickedTile(tile1);
        tile1.onclick = "",
    
    tile2.onclick = function() {
        clickedTile(tile2);
        tile2.onclick = "",
    
    tile3.onclick = function() {
        clickedTile(tile3);
        tile3.onclick = "",
    
    tile4.onclick = function() {
        clickedTile(tile4);
        tile4.onclick = "",
    
    tile5.onclick = function() {
        clickedTile(tile5);
        tile5.onclick = "",
    
    tile6.onclick = function() {
        clickedTile(tile6);
        tile6.onclick = "",
    
    tile7.onclick = function() {
        clickedTile(tile7);
        tile7.onclick = "",
    
    tile8.onclick = function() {
        clickedTile(tile8);
        tile8.onclick = "",
    
    tile9.onclick = function() {
        clickedTile(tile9);
        tile9.onclick = "",
    

// Check winner
function checkForWin(check){
    let tile1 = tile1.textContent;
    let tile2 = tile2.textContent;
    let tile3 = tile3.textContent;
    let tile4 = tile4.textContent;
    let tile5 = tile5.textContent;
    let tile6 = tile6.textContent;
    let tile7 = tile7.textContent;
    let tile8 = tile8.textContent;
    let tile9 = tile9.textContent;

    if(tile1 === check){
        if(tile2 === check){
            if(tile3 === check){
                Won = true;
                gameOver();
            }
        }
        if(tile4 === check){
            if(tile7 === check){
                Won = true;
                gameOver();
            }
        }
        if(tile5 === check){
            if(tile9 === check){
                Won = true;
                gameOver();
            }
        }
    }
    if(tile5 === check){
        if(tile4 === check){
            if(tile6 === check){
                Won = true;
                gameOver();
            }
        }
        if(tile2 === check){
            if(tile8 === check){
                Won = true;
                gameOver();
            }
        }
        if(tile3 === check){
            if(tile7 === check){
                Won = true;
                gameOver();
            }
        }
    }
    if(tile9 === check){
        if(tile7 === check){
            if(tile8 === check){
                Won = true;
                gameOver();
            }
        }
        if(tile6 === check){
            if(tile3 === check){
                Won = true;
                gameOver();
            }
        }
    }
}


// // Game Over
function gameOver(){
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

// // New Game
function playAgain() {
    PLAYER_V = "V"
    turn.innerText = PLAYER_V = "Turn!";
    plays = 0;
    Won = flase;
    tile1.innerText = "";
    tile2.innerText = "";
    tile3.innerText = "";
    tile4.innerText = "";
    tile5.innerText = "";
    tile6.innerText = "";
    tile7.innerText = "";
    tile8.innerText = "";
    tile9.innerText = "";
startGame();
}
gameplay();
document.getElementById("restart").addEventListener('click', playAgain);