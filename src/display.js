import {Player} from "./player"
import {GameBoard} from "./gameboard"
import {elements, createGrid} from "./dom"
import {storeData, retrieveData, updateData} from "./storage"
import { GAME } from "."

export {displayBoard, displayShip, displayNames, displayPlayerTurn, displayWinner}



function displayShip(whichPlayer) {
    
    let board = elements.boards[whichPlayer]

    GAME.getPlayerShips(whichPlayer).flat().forEach(coord => addClass(board, coord, "ship"))
}

function displayBoard(){

    let board = elements.boards[GAME.getActivePlayerRef()]

    GAME.getPlayerHitList().forEach(coord => addClass(board, coord, "hit"))
    GAME.getPlayerMissList().forEach(coord => addClass(board, coord, "miss"))
}


function addClass(board, quadrant, className) {

    /* if(quadrant.length < 1) return */

    let [row, col] = quadrant

    let square = board.querySelector(`[data-square="${row}-${col}"]`)

    square.classList.add(`${className}`)
}


function displayNames() {

    for(let i = 0; i < elements.outputArr.length; i++) {

        elements.outputArr[i].textContent = GAME.getPlayerName(i)
    }
}

function displayPlayerTurn() {

    let title = elements.title

    title.textContent = `${GAME.getPlayerName()}'s turn!`
}

function displayWinner(){

    console.log("pasivo display", GAME.getPlayerName(GAME.getPassivePlayerRef()))

    elements.winner.textContent = 
    `${GAME.getPlayerName(GAME.getPassivePlayerRef())} is the winner!!`;
}





function displayTotalBoard(){

    for (let player of GAME.players) {

        let board = elements.boards[player.ID]

        player.gameBoard.shipsCoords.flat().forEach(coord => addClass(board, coord, "ship")) 

        player.gameBoard.shipHitList.forEach(coord => addClass(board, coord, "hit"))

        player.gameBoard.waterHitList.forEach(coord => addClass(board, coord, "miss"))
    }
}


/* function displayHit(player) {

    let board = elements.boards[player.ID]

    player.gameBoard.shipHitList.forEach(coord => addClass(board, coord, "hit")) 
}


function displayMiss(player) {

    let board = elements.boards[player.ID]

    player.gameBoard.waterHitList.forEach(coord => addClass(board, coord, "miss"))
} */
