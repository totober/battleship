import {Player} from "./player"
import {GameBoard} from "./gameboard"
import {elements, createGrid} from "./dom"
import {storeData, retrieveData, updateData} from "./storage"

export {displayBoard, displayShip, displayNames}




function displayTotalBoard(){

    let state = retrieveData()

    for (let player of state.players) {

        let board = elements.boards[player.ID]

        player.gameBoard.shipsCoords.flat().forEach(coord => addClass(board, coord, "ship")) 

        player.gameBoard.shipHitList.forEach(coord => addClass(board, coord, "hit"))

        player.gameBoard.waterHitList.forEach(coord => addClass(board, coord, "miss"))
    }
}


function displayBoard(player, hitOnTarget) {

    if(hitOnTarget) displayHit(player)

    if(!hitOnTarget) displayMiss(player)
}


function displayShip(player) {

    let board = elements.boards[player.ID]

    player.gameBoard.shipsCoords.flat().forEach(coord => addClass(board, coord, "ship"))
}


function displayHit(player) {

    let board = elements.boards[player.ID]

    player.gameBoard.shipHitList.forEach(coord => addClass(board, coord, "hit")) 
}


function displayMiss(player) {

    let board = elements.boards[player.ID]

    player.gameBoard.waterHitList.forEach(coord => addClass(board, coord, "miss"))
}


function addClass(board, quadrant, className) {

    if(quadrant.length < 1) return

    let [row, col] = quadrant

    let square = board.querySelector(`[data-square="${row}-${col}"]`)

    square.classList.add(`${className}`)
}

function displayNames() {

    let state = retrieveData() 

    for(let i = 0; i < elements.outputArr.length; i++) {

        elements.outputArr[i].textContent = state.players[i].upperCaseName()

    }

}



