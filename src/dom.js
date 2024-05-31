import {Player} from "./player"
import {GameBoard} from "./gameboard"
import {Ship} from "./ship"

export {elements}

let elements = {

    wrapper: document.querySelector(".wrapper"),
    board: document.querySelector(".board"),
    dialog: document.querySelector(/* "dialog" */"article"),

    init() {
        this.addListeners()
    },

    addListeners() {

        window.addEventListener("load", /* applyGrid */gameInit)
        window.addEventListener("keydown", closeModal)
        this.dialogChildren().forEach(child => child.addEventListener("click", gameModeSelection))
    },

    dialogChildren(){

       return Array.from(this.dialog.children) 
    }

}

function openModal(){

    if(elements.dialog.getAttribute("id") === "close") elements.dialog.removeAttribute("id")
    if(!elements.wrapper.classList.contains("blur")) elements.wrapper.classList.add("blur")

}

function closeModal(e){

    if(e.key === "Escape") {
        e.preventDefault()
        elements.dialog.close()
        //elements.dialog.classList.add("close")
    }
}


function gameInit(){

    applyGrid()
    openModal()

}

function gameModeSelection(e) {

    console.log(e.currentTarget)

    e.currentTarget.parentElement.setAttribute("id", "close")
    let target = e.currentTarget

/*     if(target.className === "vs-player") {
        console.log("VERSUS PLAYER")
        let dialog = target.querySelector("dialog")
        dialog.showModal()
    }

    if(target.className === "vs-cpu") {
        console.log("VERSUS CPU")
        let dialog = target.querySelector("dialog")
        dialog.showModal()
    } */

    let gameMode = target.className

    let dialog = document.querySelector(`.dialog-${gameMode}`)

    if(dialog.getAttribute("id") === "close") dialog.removeAttribute("id")
    //if(!elements.wrapper.classList.contains("blur")) elements.wrapper.classList.add("blur")

    let [btnCancel, btnOk] = Array.from(dialog.querySelectorAll("button"))

    console.log("cancel", btnCancel)
    console.log("ok", btnOk)

    btnCancel.addEventListener("click", cancelDialog)
    //btnOk.addEventListener("click",)
    

}

function cancelDialog(e){

    console.log("donde estoy", e.currentTarget.parentElement)

    e.currentTarget.parentElement.parentElement.setAttribute("id", "close")

    openModal()
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