import { Player, CPU } from "./player"
import { GameBoard } from "./gameboard"
import { Ship } from "./ship"
import { storeData, retrieveData, updateData } from "./storage"
import { displayBoard, displayShip, displayNames, displayPlayerTurn, displayWinner } from "./display"
import { GAME } from "./index"

export {elements, createGrid, playersReady}


let elements = {

    wrapper: document.querySelector(".wrapper"),
    body: document.querySelector("body"),
    boards: Array.from(document.querySelectorAll(".board")),
    dialogStart: document.querySelector("article"),
    dialogMode: document.querySelector("article.mode-selection"),
    dialogPlayerMode: document.querySelector("article.PlayerMode"),
    dialogCpuMode: document.querySelector("article.CpuMode"),
    dialogGameOver: document.querySelector("article.game-over"),
    btnCancel: Array.from(document.querySelectorAll("button.cancel")),
    btnOk: Array.from(document.querySelectorAll("button.ok")),
    btnTheme: document.querySelector(".theme"),
    inputsNames: Array.from(document.querySelectorAll("[name=player-name]")),
    inputsRadio: Array.from(document.querySelectorAll("[name=difficulty]")),
    btnRandomArr: Array.from(document.querySelectorAll("button.random")),
    btnReadyArr: Array.from(document.querySelectorAll("button.ready")),
    btnCoverArr: Array.from(document.querySelectorAll("button.cover")),
    outputArr: Array.from(document.querySelectorAll("output:not(.winner)")),
    start: document.querySelector("article.start section p"),
    title: document.querySelector("h3"),
    winner: document.querySelector(".winner"),
    replay: document.querySelector(".replay"),
    reset: document.querySelector(".reset"),

    init() {
        this.addListeners()
    },

    addListeners() {

        window.addEventListener("load", openStartDialog);
        window.addEventListener("load", applyGrid);
        this.dialogChildren().forEach(child => child.addEventListener("click", gameModeSelection));
        this.btnCancel.forEach(btn => btn.addEventListener("click", cancelDialog));
        this.btnOk.forEach(btn => btn.addEventListener("click", approveDialog));
        this.btnOk.forEach(btn => btn.addEventListener("click", displayNames));
        this.btnTheme.addEventListener("click", toggleTheme);
        this.btnRandomArr.forEach(btn => btn.addEventListener("click", createRandomShips));
        this.btnReadyArr.forEach(btn => btn.addEventListener("click", playersReady));
        this.btnCoverArr.forEach(btn => btn.addEventListener("click", toggleCoverBoard));
        this.start.addEventListener("click", openModeDialog);
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

function openStartDialog(){

    elements.wrapper.classList.add("blur")
    elements.dialogStart.removeAttribute("id")
}

function openModeDialog(){

    elements.dialogStart.setAttribute("id", "close")
    elements.dialogMode.removeAttribute("id")
}


function gameModeSelection(e) {

    elements.dialogMode.setAttribute("id", "close")

    let gameMode = e.currentTarget.className

    let dialog = elements[`dialog${gameMode}`]
    dialog.removeAttribute("id")
}

function cancelDialog(e){

    e.currentTarget.parentElement.parentElement.setAttribute("id", "close")
    elements.inputsNames.forEach(input => input.value = "")

    openModeDialog()
}


function approveDialog(e) {
    
    let mode = e.target.dataset.mode

    gameModeData(mode)
    cpuReady()

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
    elements.btnCoverArr[whichBoard].disabled = true
    elements.btnCoverArr[whichBoard].firstElementChild.dataset.hidden = true
    elements.btnCoverArr[whichBoard].lastElementChild.dataset.hidden = false

    for(let btn of elements.btnReadyArr) if(btn.dataset.ready === "false") return

    GAME.startGame()

    displayTurn()
}


function hitListener(e) {

    elements.boards[GAME.getActivePlayerRef()].removeAttribute("id")

    let quadrant = e.target.dataset.square.split("-").map(str => Number(str))
   
    playerTurn(quadrant)

    if(GAME.isGameOver()) {

        gameOverDialog()
        return
    }

    cpuTurn()
}


function playerTurn(quadrant){

    GAME.turn(quadrant)
    displayTurn()
}


function cpuTurn() {

    if(GAME.getMode() !== "CpuMode") return

    GAME.CPUturn()

    setTimeout(() => { displayTurn() }, 2000)

    if(GAME.isGameOver()) gameOverDialog()
}


function displayTurn(){

    toggleCoverButton()
    toggleActiveBoard()
    displayPlayerTurn()
    displayBoard()
}


function toggleActiveBoard() {

    elements.boards[GAME.getPassivePlayerRef()].classList.remove("unable")
    elements.boards[GAME.getActivePlayerRef()].classList.add("unable")

    if(GAME.getMode() === "CpuMode") elements.boards[0].classList.add("unable")
}


function toggleCoverButton(){

    elements.btnCoverArr[GAME.getPassivePlayerRef()].disabled = true
    elements.btnCoverArr[GAME.getPassivePlayerRef()].firstElementChild.dataset.hidden = true
    elements.btnCoverArr[GAME.getPassivePlayerRef()].lastElementChild.dataset.hidden = false

    elements.btnCoverArr[GAME.getActivePlayerRef()].disabled = false

    if(GAME.getMode() === "CpuMode") elements.btnCoverArr[1].disabled = true
}


function toggleCoverBoard(e){

    let whichBoard = e.currentTarget.parentElement.dataset.board
    let board = elements.boards[whichBoard]

    toggleCoverIcon(whichBoard)

    if(board.hasAttribute("id")) board.removeAttribute("id")
    else board.setAttribute("id", "uncover")
}

function toggleCoverIcon(whichPlayer){

    let btn = elements.btnCoverArr[whichPlayer]

    btn.firstElementChild.dataset.hidden === "true" ? 
    btn.firstElementChild.dataset.hidden = "false" : btn.firstElementChild.dataset.hidden = "true";

    btn.lastElementChild.dataset.hidden === "true" ? 
    btn.lastElementChild.dataset.hidden = "false" : btn.lastElementChild.dataset.hidden = "true";
}


function cpuReady() {

    if(GAME.getMode() !== "CpuMode") return

    elements.btnReadyArr[1].dataset.ready = true
    elements.btnReadyArr[1].disabled = true
    elements.btnRandomArr[1].disabled = true
    elements.btnCoverArr[1].disabled = true
    elements.btnCoverArr[1].firstElementChild.dataset.hidden = true
    elements.btnCoverArr[1].lastElementChild.dataset.hidden = false

    GAME.placePlayerShips(1)
}

function gameOverDialog(){

    elements.dialogGameOver.removeAttribute("id");
    elements.wrapper.classList.add("blur");

    displayWinner()
}

function replay(){

    GAME.replay()
    resetDOM()
}

function reset(){

    GAME.reset()
    resetDOM()
    openStartDialog()
}

function resetDOM () {

    applyGrid();
    elements.title.textContent = "";
    elements.btnRandomArr.forEach(btn => btn.disabled = false);
    elements.btnReadyArr.forEach(btn => btn.disabled = false);
    elements.btnCoverArr.forEach(btn => btn.disabled = false);
    elements.dialogGameOver.setAttribute("id", "close");
    elements.wrapper.classList.remove("blur");
    cpuReady();
}

function toggleTheme(e){

    let target = e.currentTarget

    if(elements.body.className === "theme-dark") {

        elements.body.className = "theme-light"
        target.firstElementChild.dataset.hidden = true
        target.lastElementChild.dataset.hidden = false

    } else if(elements.body.className === "theme-light") {

        elements.body.className = "theme-dark"
        target.firstElementChild.dataset.hidden = false
        target.lastElementChild.dataset.hidden = true
    }
}


