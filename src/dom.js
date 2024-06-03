import {Player} from "./player"
import {GameBoard} from "./gameboard"
import {Ship} from "./ship"

export {elements, }

let elements = {

    wrapper: document.querySelector(".wrapper"),
    board: document.querySelector(".board"),
    dialogMode: document.querySelector("article"),
    dialogPlayerMode: document.querySelector("article.PlayerMode"),
    dialogCpuMode: document.querySelector("article.CpuMode"),
    btnCancel: Array.from(document.querySelectorAll("button.cancel")),
    btnOk: Array.from(document.querySelectorAll("button.ok")),
    inputsNames: Array.from(document.querySelectorAll("[name=player-name]")),
    inputsRadio: Array.from(document.querySelectorAll("[name=difficulty]")),

    init() {
        this.addListeners()
    },

    addListeners() {

        window.addEventListener("load", gameInit);
        this.dialogChildren().forEach(child => child.addEventListener("click", gameModeSelection));
        this.btnCancel.forEach(btn => btn.addEventListener("click", cancelDialog));
        this.btnOk.forEach(btn => btn.addEventListener("click", approveDialog))
    },

    dialogChildren(){

       return Array.from(this.dialogMode.children) 
    },

}

function openModeDialog(){

    if(elements.dialogMode.getAttribute("id") === "close") elements.dialogMode.removeAttribute("id")
    if(!elements.wrapper.classList.contains("blur")) elements.wrapper.classList.add("blur")

}

function gameInit(){

    applyGrid()
    openModeDialog()

}

function gameModeSelection(e) {

    elements.dialogMode.setAttribute("id", "close")

    let gameMode = e.currentTarget.className

    let dialog = elements[`dialog${gameMode}`]

    if(dialog.getAttribute("id") === "close") dialog.removeAttribute("id")
}

function cancelDialog(e){

    //if(e.key !== "Escape") return
    e.currentTarget.parentElement.parentElement.setAttribute("id", "close")
    elements.inputsNames.forEach(input => input.value = "")

    openModeDialog()
}

function approveDialog(e) {

    //if(e.key !== "Enter") return
    let mode = e.target.dataset.mode

    e.currentTarget.parentElement.parentElement.setAttribute("id", "close")
    elements.inputsNames.forEach(input => input.value = "")
    elements.wrapper.classList.remove("blur")

    console.log("inps", elements.inputsNames)

    let [playerOne, playerTwo] = gameModeData(mode)
    game(playerOne, playerTwo)
}


function gameModeData(mode){

    let playerOne, playerTwo, difficulty

    if(mode === "PlayerMode") {
        playerOne = elements.inputsNames[0].value || "Player One"
        playerTwo = elements.inputsNames[1].value || "Player Two"

        return [new Player(playerOne), new Player(playerTwo)]
    }
    else if(mode === "CpuMode") {
        playerOne = elements.inputsNames[2].value || "Player One"
        playerTwo = "CPU"

        elements.inputsRadio.forEach(input => {

            if(input.checked) difficulty = input.value
        })

        console.log("difficulty", difficulty)

        return [new Player(playerOne)]
    }

}

function game(playerOne, playerTwo){

    console.log("p1 game", playerOne, "p2 game", playerTwo)

}




function createElement(element, className, secondClassName){

    let el = document.createElement(element)
    el.classList.add(className)

    if(secondClassName) el.classList.add(secondClassName)

    return el
}

function applyGrid() {

    let boards = Array.from(document.querySelectorAll(".board"))

    for(let board of boards) createGrid(board)

    displayBoard()
}

function createGrid(board){

    let num = 10

/*     for(let i = 0; i < num; i++) {

        let rowQuadrant = createElement("div", "row", `${i}`)
        board.appendChild(rowQuadrant)

        for(let j = 0; j < num; j++) {

            let colQuadrant = createElement("div", "col", `${j}`)
            colQuadrant.addEventListener("click", identifyQuadrant)
            rowQuadrant.appendChild(colQuadrant)
        }
    } */

    for(let i = 0; i < num; i++) {

        for(let j = 0; j < num; j++) {

            let quadrant = createElement("div", `row-${i}`, `col-${j}`)
            quadrant.setAttribute("data-q", `${i}-${j}`)
            quadrant.addEventListener("click", /* identifyQuadrant */ hitListener)
            board.appendChild(quadrant) 
        } 
    }
}


function displayBoard(/* player */){


    let section = document.querySelector(".player-one")
    let board = section.firstElementChild

    let player = new Player("player one") // esto deberia crearlo antes, afuera de esta func

   /*  player.gameBoard.placeShips()
    let ships = player.gameBoard.ships

    ships.forEach(ship => {

        ship.coordinates.forEach(coord => {
            
            let [row, col] = coord

            let quadrant = board.querySelector(`[data-q="${row}-${col}"]`)

            quadrant.classList.add("ship")

        })
   }) */

   displayShip(player, board)

}

function displayShip(player, board) {

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