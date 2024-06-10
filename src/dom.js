import { Player } from "./player"
import { GameBoard } from "./gameboard"
import { Ship } from "./ship"
import { storeData, retrieveData, updateData } from "./storage"
import { displayBoard, displayShip, displayNames, displayTurn } from "./display"
import { GAME } from "./index"

export {elements, createGrid, playersReady}


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
    btnReadyArr: Array.from(document.querySelectorAll("button.ready")),
    outputArr: Array.from(document.querySelectorAll("output")),
    title: document.querySelector("h3"),

    init() {
        this.addListeners()
    },

    addListeners() {

        window.addEventListener("load", openModeDialog);
        window.addEventListener("load", applyGrid);
        this.dialogChildren().forEach(child => child.addEventListener("click", gameModeSelection));
        this.btnCancel.forEach(btn => btn.addEventListener("click", cancelDialog));
        this.btnOk.forEach(btn => btn.addEventListener("click", approveDialog));
        this.btnOk.forEach(btn => btn.addEventListener("click", displayNames));
        this.btnRandomArr.forEach(btn => btn.addEventListener("click", createRandomShips));
        this.btnReadyArr.forEach(btn => btn.addEventListener("click", playersReady));
    },

    dialogChildren(){

       return Array.from(this.dialogMode.children) 
    }
}

function createElement(element, className, secondClassName){

    let el = document.createElement(element)
    el.classList.add(className)

    if(secondClassName) el.classList.add(secondClassName)

    return el
}

function createGrid(board){

    board.innerHTML = ""
    board.classList.add("unable")

    let num = 10

    for(let i = 0; i < num; i++) {

        for(let j = 0; j < num; j++) {

            let quadrant = createElement("div", `row-${i}`, `col-${j}`)
            quadrant.setAttribute("data-square", `${i}-${j}`)
            quadrant.addEventListener("click", hitListener)
            board.appendChild(quadrant)
        } 
    }
}

function applyGrid() {

    for(let board of elements.boards) createGrid(board) 
}



function openModeDialog(){

    elements.dialogMode.removeAttribute("id")
    elements.wrapper.classList.add("blur")
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

    gameModeData(mode)

    console.log("GAME PRIMERO", GAME)

    e.currentTarget.parentElement.parentElement.setAttribute("id", "close")
    elements.inputsNames.forEach(input => input.value = "")
    elements.wrapper.classList.remove("blur")
}

function gameModeData(mode){

    if(mode === "PlayerMode") {

        GAME.getGameData(mode, [elements.inputsNames[0].value, elements.inputsNames[1].value], null)
    }
    
    else if(mode === "CpuMode") {

        let difficulty

        elements.inputsRadio.forEach(input => { if(input.checked) difficulty = input.value })

        GAME.getGameData(mode, [elements.inputsNames[2].value], difficulty)
    }
};


function createRandomShips(e) {

    let whichPlayer = Number(e.currentTarget.dataset.board)
 
    let player = GAME.players[whichPlayer]
    let board = elements.boards[whichPlayer]

    createGrid(board)

    player.gameBoard.placeShips()

    displayShip(player)
}

function hitListener(e) {

    let quadrant = e.target.dataset.square.split("-").map(str => Number(str))
   
    GAME.turn(quadrant)

    displayBoard()
    displayTurn()
    toggleBoard()
}

function playersReady(e) {

    console.log("players ready")

    e.currentTarget.dataset.ready = true

    for(let btn of elements.btnReadyArr) if(btn.dataset.ready === "false") return

    GAME.startGame()

    toggleBoard()
    displayTurn()
}

function toggleBoard() {

    elements.boards[GAME.getPassivePlayer()].classList.remove("unable")
    elements.boards[GAME.playerTurn].classList.add("unable")
}


