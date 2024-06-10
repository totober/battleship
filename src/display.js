import {Player} from "./player"
import {GameBoard} from "./gameboard"
import {elements, createGrid} from "./dom"
import {storeData, retrieveData, updateData} from "./storage"
import { GAME } from "."

export {displayBoard, displayShip, displayNames, displayTurn}



// CAMBIOS GAME //
function displayTotalBoard(){

    //let state = retrieveData()

    for (let player of /* state.players */GAME.players) {

        let board = elements.boards[player.ID]

        player.gameBoard.shipsCoords.flat().forEach(coord => addClass(board, coord, "ship")) 

        player.gameBoard.shipHitList.forEach(coord => addClass(board, coord, "hit"))

        player.gameBoard.waterHitList.forEach(coord => addClass(board, coord, "miss"))
    }
}


function displayShip(player) {

    let board = elements.boards[player.ID]

    player.gameBoard.shipsCoords.flat().forEach(coord => addClass(board, coord, "ship"))
}

function displayBoard(){

    let player = GAME.players[GAME.playerTurn]
    let board = elements.boards[player.ID]

    /* player.gameBoard.shipHitList.forEach(coord => addClass(board, coord, "hit")) 
    player.gameBoard.waterHitList.forEach(coord => addClass(board, coord, "miss")) */
    player.getHitList().forEach(coord => addClass(board, coord, "hit")) 
    player.getMissList().forEach(coord => addClass(board, coord, "miss"))
}


function addClass(board, quadrant, className) {

    if(quadrant.length < 1) return

    let [row, col] = quadrant

    let square = board.querySelector(`[data-square="${row}-${col}"]`)

    square.classList.add(`${className}`)
}


function displayNames() {

    for(let i = 0; i < elements.outputArr.length; i++) {

        //elements.outputArr[i].textContent = state.players[i].upperCaseName()
        elements.outputArr[i].textContent = GAME.players[i].upperCaseName()
    }
}

function displayTurn() {

    let player = GAME.players[GAME.playerTurn]
    let title = elements.title

    title.textContent = `${player.upperCaseName()}'s turn!`
}


/* function displayHit(player) {

    let board = elements.boards[player.ID]

    player.gameBoard.shipHitList.forEach(coord => addClass(board, coord, "hit")) 
}


function displayMiss(player) {

    let board = elements.boards[player.ID]

    player.gameBoard.waterHitList.forEach(coord => addClass(board, coord, "miss"))
} */
