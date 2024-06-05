import {Player} from "./player"
import {GameBoard} from "./gameboard"
import {elements, createGrid} from "./dom"
import {storeData, retrieveData, updateData} from "./storage"

export {gameModeData, createRandomShips, hitListener}


function gameModeData(mode){

    let playerOne, playerTwo, difficulty

    if(mode === "PlayerMode") {

        playerOne = new Player(elements.inputsNames[0].value || "Player One", 0)
        playerTwo = new Player(elements.inputsNames[1].value || "Player Two", 1)

        //return [new Player(playerOne), new Player(playerTwo)]
        //game([new Player(playerOne), new Player(playerTwo)])

        //return
    }
    
    else if(mode === "CpuMode") {

        playerOne = new Player(elements.inputsNames[2].value || "Player One", 0)
        playerTwo = new Player("CPU", 1)

        elements.inputsRadio.forEach(input => {
            if(input.checked) difficulty = input.value
        })

        //return [new Player(playerOne)]
        //game([new Player(playerOne), new Player(playerTwo)], difficulty)

        //return
    }

    storeData(mode, playerOne, playerTwo)

    // TEMPORAL: ESTA FUNCION NO DEBERIA SER LLAMADA ACA:
    //applyGrid()
}

function createRandomShips(e) {

    let state =  retrieveData()

    let whichPlayer = Number(e.currentTarget.dataset.board)
 
    let player = state.players[whichPlayer]
    let board = elements.boards[whichPlayer]

    createGrid(board)

    player.gameBoard.placeShips()

    displayShip(player)

    updateData(state)
}


function hitListener(e) {

    let state = retrieveData()
    //console.log("STATE HIT LISTENER", state)

    let quadrant = e.target.dataset.square.split("-").map(str => Number(str))
    console.log("quadrant", quadrant)
    let whichPlayer = Number(e.target.parentElement.dataset.board)

    let player = state.players[whichPlayer]
    //console.log("PLAYER", player)

   let hitOnTarget = player.gameBoard.receiveAttack(quadrant)

    //displayBoard()

    console.log("SHIPS DEL PLAYER", player.gameBoard.ships)

    displayBoard(player, hitOnTarget)

   

    /* let shiphit = player.gameBoard.shipHitList
    console.log("shiphit LIST", shiphit)
    let waterhit = player.gameBoard.waterHitList
    console.log("waterhit LIST", waterhit) */


    updateData(state)
}

function game(playersArr, difficulty = null){


    let index = 0

    for(let player of playersArr) {

        //displayBoard(player, elements.boards[index])

        index ++
    }


}

function displayTotalBoard(){

    let state = retrieveData()

    for (let player of state.players) {

        let board = elements.boards[player.id]

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

    let board = elements.boards[player.id]

    player.gameBoard.shipsCoords.flat().forEach(coord => addClass(board, coord, "ship"))
}


function displayHit(player) {

    let board = elements.boards[player.id]

    player.gameBoard.shipHitList.forEach(coord => addClass(board, coord, "hit")) 
}


function displayMiss(player) {

    let board = elements.boards[player.id]

    player.gameBoard.waterHitList.forEach(coord => addClass(board, coord, "miss"))
}


function addClass(board, quadrant, className) {

    if(quadrant.length < 1) return

    let [row, col] = quadrant

    let square = board.querySelector(`[data-square="${row}-${col}"]`)

    square.classList.add(`${className}`)
}

