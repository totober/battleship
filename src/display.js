import {Player} from "./player"
import {elements, createGrid} from "./dom"
import {storeData, retrieveData} from "./storage"

export {gameModeData, displayShip, hitListener}


function gameModeData(mode){

    let playerOne, playerTwo, difficulty

    if(mode === "PlayerMode") {

        playerOne = new Player(elements.inputsNames[0].value || "Player One")
        playerTwo = new Player(elements.inputsNames[1].value || "Player Two")

        //return [new Player(playerOne), new Player(playerTwo)]
        //game([new Player(playerOne), new Player(playerTwo)])

        //return
    }
    
    else if(mode === "CpuMode") {

        playerOne = new Player({name: elements.inputsNames[2].value || "Player One"})
        playerTwo = new Player({name: "CPU"})

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

function game(playersArr, difficulty = null){


    let index = 0

    for(let player of playersArr) {

        displayBoard(player, elements.boards[index])

        index ++
    }


}

function displayBoard(player, board){



   /*  player.gameBoard.placeShips()
    let ships = player.gameBoard.ships

    ships.forEach(ship => {

        ship.coordinates.forEach(coord => {
            
            let [row, col] = coord

            let quadrant = board.querySelector(`[data-q="${row}-${col}"]`)

            quadrant.classList.add("ship")

        })
   }) */

   //displayShip(player, board)

}



function displayShip(e) {

    let num = Number(e.currentTarget.dataset.board)

    let player = retrieveData()[num]
    let board = elements.boards[num]

    board.innerHTML = ""
    createGrid(board)

    player.gameBoard.placeShips()

    let ships = player.gameBoard.ships
    ships.forEach(ship => {

        ship.coordinates.forEach(coord => {
            
            let [row, col] = coord

            let quadrant = board.querySelector(`[data-q="${row}-${col}"]`)

            quadrant.classList.add("ship")
        })
   })
}



function displayHit(player) {

    let hits = player.gameBoard.shipHitList

    for(let hit of hits) {

        let [row, col] = hit

        let quadrant = board.querySelector(`[data-q="${row}-${col}"]`)

        quadrant.classList.add("hit")
    }
}



function displayMiss(player) {

    let misses = player.gameBoard.shipWaterList

    for(let miss of misses) {

        let [row, col] = miss

        let quadrant = board.querySelector(`[data-q="${row}-${col}"]`)

        quadrant.classList.add("miss")
    }
}



function identifyQuadrant(e){

    console.log("target", e.target)
    console.log("target", e.target.parentElement.parentElement)

    return [e.target, e.target.parentElement.parentElement]
}



function hitListener(e) {

    let quadrant = e.target
    let player = e.target.parentElement.parentElement.className

    console.log("quadrant", quadrant)
    console.log("player", player)

// aca tendria que tener el player (tal vez guardado en la sesion) y desde ahi,
// ir desplegando la data, segun sea player 1 o 2

    ships.forEach(ship => {

        ship.coordinates.forEach(coord => {
            
            let [row, col] = coord

            let quadrant = board.querySelector(`[data-q="${row}-${col}"]`)

            quadrant.classList.add("ship")

        })
   })


}
