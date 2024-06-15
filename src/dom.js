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
    dialogGameOver: document.querySelector("article.game-over"),
    btnCancel: Array.from(document.querySelectorAll("button.cancel")),
    btnOk: Array.from(document.querySelectorAll("button.ok")),
    inputsNames: Array.from(document.querySelectorAll("[name=player-name]")),
    inputsRadio: Array.from(document.querySelectorAll("[name=difficulty]")),
    btnRandomArr: Array.from(document.querySelectorAll("button.random")),
    btnReadyArr: Array.from(document.querySelectorAll("button.ready")),
    btnCoverArr: Array.from(document.querySelectorAll("button.cover")),
    outputArr: Array.from(document.querySelectorAll("output:not(.winner)")),
    title: document.querySelector("h3"),
    winner: document.querySelector(".winner"),
    replay: document.querySelector(".replay"),
    reset: document.querySelector(".reset"),

    init() {
        this.addListeners()
    },

    addListeners() {

        window.addEventListener("load", openModeDialog);
        //window.addEventListener("load", gameOverDialog);
        window.addEventListener("load", applyGrid);
        this.dialogChildren().forEach(child => child.addEventListener("click", gameModeSelection));
        this.btnCancel.forEach(btn => btn.addEventListener("click", cancelDialog));
        this.btnOk.forEach(btn => btn.addEventListener("click", approveDialog));
        this.btnOk.forEach(btn => btn.addEventListener("click", displayNames));
        this.btnRandomArr.forEach(btn => btn.addEventListener("click", createRandomShips));
        this.btnReadyArr.forEach(btn => btn.addEventListener("click", playersReady));
        this.btnCoverArr.forEach(btn => btn.addEventListener("click", toggleCoverBoard));
        this.replay.addEventListener("click", replay);
        this.reset.addEventListener("click", reset);
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
    board.setAttribute("id", "uncover")

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

    e.currentTarget.parentElement.parentElement.setAttribute("id", "close")
    elements.inputsNames.forEach(input => input.value = "")
    elements.wrapper.classList.remove("blur")
}


function gameModeData(mode){

    if(mode === "PlayerMode") {

        GAME.setGameData(mode, [elements.inputsNames[0].value, elements.inputsNames[1].value], null)
    }
    
    else if(mode === "CpuMode") {

        let difficulty

        elements.inputsRadio.forEach(input => { if(input.checked) difficulty = input.value })

        GAME.setGameData(mode, [elements.inputsNames[2].value], difficulty)
    }
};


function createRandomShips(e) {

    let whichPlayer = Number(e.currentTarget.dataset.board)
    let board = elements.boards[whichPlayer]

    createGrid(board)

    GAME.placePlayerShips(whichPlayer)

    displayShip(whichPlayer)
}


function playersReady(e) {

    e.currentTarget.dataset.ready = true
    e.currentTarget.disabled = true

    let whichBoard = e.currentTarget.parentElement.parentElement.dataset.board
    elements.btnRandomArr[whichBoard].disabled = true
    elements.boards[whichBoard].removeAttribute("id", "uncover")


    for(let btn of elements.btnReadyArr) if(btn.dataset.ready === "false") return

    GAME.startGame()

    toggleCoverButton()
    toggleActiveBoard()
    displayTurn()
}


function hitListener(e) {

    let quadrant = e.target.dataset.square.split("-").map(str => Number(str))
   
    GAME.turn(quadrant)

    toggleCoverButton()
    toggleActiveBoard()
    displayTurn()
    displayBoard()

    // esto es para que si el jugador se fija donde estan sus barcos, y se olvida de apretar
    // el boton para volver a cubrirlos y ataca, automaticamente dejen de mostrarse.
    elements.boards[GAME.getPassivePlayerRef()].removeAttribute("id")

    if(GAME.isGameOver()) gameOverDialog()
}


function toggleActiveBoard() {

    elements.boards[GAME.getPassivePlayerRef()].classList.remove("unable")
    elements.boards[GAME.getActivePlayerRef()].classList.add("unable")
}

function toggleCoverButton(){

    elements.btnCoverArr[GAME.getPassivePlayerRef()].disabled = true
    elements.btnCoverArr[GAME.getActivePlayerRef()].disabled = false
}

function toggleCoverBoard(e){

    let whichBoard = e.currentTarget.parentElement.dataset.board
    let board = elements.boards[whichBoard]

    if(board.hasAttribute("id")) board.removeAttribute("id")
    else board.setAttribute("id", "uncover")
}

function gameOverDialog(){

    elements.dialogGameOver.removeAttribute("id");
    elements.wrapper.classList.add("blur");
    elements.winner.textContent = `${GAME.getPlayerName()} is the winner!!`;

}

function replay(){

    GAME.replay()
    resetDOM()
}

function reset(){

    GAME.reset()
    resetDOM()
    openModeDialog()
}

function resetDOM () {

    applyGrid()
    elements.btnRandomArr.forEach(btn => btn.disabled = false)
    elements.btnReadyArr.forEach(btn => btn.disabled = false)
    elements.dialogGameOver.setAttribute("id", "close");
    elements.wrapper.classList.remove("blur");
}


