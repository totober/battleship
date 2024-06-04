import {Player} from "./player"
import {GameBoard} from "./gameboard"
import {Ship} from "./ship"

export {elements, }

let elements = {

    wrapper: document.querySelector(".wrapper"),
    boards: Array.from(document.querySelectorAll(".board")),
    dialogMode: document.querySelector("article"),
    dialogPlayerMode: document.querySelector("article.PlayerMode"),
    dialogCpuMode: document.querySelector("article.CpuMode"),
    btnCancel: Array.from(document.querySelectorAll("button.cancel")),
    btnOk: Array.from(document.querySelectorAll("button.ok")),
    inputsNames: Array.from(document.querySelectorAll("[name=player-name]")),
    inputsRadio: Array.from(document.querySelectorAll("[name=difficulty]")),
    btnRandomArr: Array.from(document.querySelectorAll("button.random")),

    init() {
        this.addListeners()
    },

    addListeners() {

        window.addEventListener("load", openModeDialog);
        this.dialogChildren().forEach(child => child.addEventListener("click", gameModeSelection));
        this.btnCancel.forEach(btn => btn.addEventListener("click", cancelDialog));
        this.btnOk.forEach(btn => btn.addEventListener("click", approveDialog));
        this.btnRandomArr.forEach(btn => btn.addEventListener("click", randomShips));
    },

    dialogChildren(){

       return Array.from(this.dialogMode.children) 
    },

}

function createElement(element, className, secondClassName){

    let el = document.createElement(element)
    el.classList.add(className)

    if(secondClassName) el.classList.add(secondClassName)

    return el
}

function createGrid(board){

    let num = 10

    for(let i = 0; i < num; i++) {

        for(let j = 0; j < num; j++) {

            let quadrant = createElement("div", `row-${i}`, `col-${j}`)
            quadrant.setAttribute("data-q", `${i}-${j}`)
            quadrant.addEventListener("click", /* identifyQuadrant */ hitListener)
            board.appendChild(quadrant) 
        } 
    }
}

function applyGrid() {

    for(let board of elements.boards) createGrid(board)

    //displayBoard()
}


function openModeDialog(){

    if(elements.dialogMode.getAttribute("id") === "close") elements.dialogMode.removeAttribute("id")
    if(!elements.wrapper.classList.contains("blur")) elements.wrapper.classList.add("blur")

}

function gameModeSelection(e) {

    elements.dialogMode.setAttribute("id", "close")

    let gameMode = e.currentTarget.className

    let dialog = elements[`dialog${gameMode}`]
    dialog.removeAttribute("id")
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

    /* let [playerOne, playerTwo] =  */gameModeData(mode)
    //game(playerOne, playerTwo)
}


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

        playerOne = new Player(elements.inputsNames[2].value || "Player One")
        playerTwo = new Player("CPU")

        elements.inputsRadio.forEach(input => {
            if(input.checked) difficulty = input.value
        })

        //return [new Player(playerOne)]
        //game([new Player(playerOne), new Player(playerTwo)], difficulty)

        //return
    }

    storeData(mode, playerOne, playerTwo)
}

function game(playersArr, difficulty = null){

    applyGrid()

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

function storeData(mode, playerOne, playerTwo) {

    let state = {
        mode: `${mode}`,
        players: {
            playerOne: `${playerOne}`,
            playerTwo: `${playerTwo}`
        }
    }

    localStorage.setItem("state", JSON.stringify(state)) 
}

function retrieveData() {

    return JSON.parse(localStorage.getItem("state"))
}

