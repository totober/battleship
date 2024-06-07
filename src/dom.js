import { Player } from "./player"
import { GameBoard } from "./gameboard"
import { Ship } from "./ship"
import { storeData, retrieveData, updateData } from "./storage"
import { displayBoard, displayShip, displayNames } from "./display"
import { gameModeData, game, startGame, turn} from "./game"

export {elements, createGrid}


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
        //window.addEventListener("load", game);
        this.dialogChildren().forEach(child => child.addEventListener("click", gameModeSelection));
        this.btnCancel.forEach(btn => btn.addEventListener("click", cancelDialog));
        this.btnOk.forEach(btn => btn.addEventListener("click", approveDialog));
        this.btnOk.forEach(btn => btn.addEventListener("click", displayNames));
        this.btnRandomArr.forEach(btn => btn.addEventListener("click", createRandomShips));
        this.btnReadyArr.forEach(btn => btn.addEventListener("click", startGame));
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

    board.innerHTML = ""
    board.classList.add("unable")

    let num = 10

    for(let i = 0; i < num; i++) {

        for(let j = 0; j < num; j++) {

            let quadrant = createElement("div", `row-${i}`, `col-${j}`)
            quadrant.setAttribute("data-square", `${i}-${j}`)
            quadrant.addEventListener("click", hitListener)
            quadrant.addEventListener("click", turn)
            board.appendChild(quadrant) 
        } 
    }
}

function applyGrid() {

    for(let board of elements.boards) createGrid(board) 
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

    gameModeData(mode)
    //game(playerOne, playerTwo)

    e.currentTarget.parentElement.parentElement.setAttribute("id", "close")
    elements.inputsNames.forEach(input => input.value = "")
    elements.wrapper.classList.remove("blur")
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
    //console.log("quadrant", quadrant)
    let whichPlayer = Number(e.target.parentElement.dataset.board)

    let player = state.players[whichPlayer]
    //console.log("PLAYER", player)

   let hitOnTarget = player.gameBoard.receiveAttack(quadrant)

    //displayBoard()

    //console.log("SHIPS DEL PLAYER", player.gameBoard.ships)

    displayBoard(player, hitOnTarget)

   

    /* let shiphit = player.gameBoard.shipHitList
    console.log("shiphit LIST", shiphit)
    let waterhit = player.gameBoard.waterHitList
    console.log("waterhit LIST", waterhit) */


    updateData(state)

    //turnToggle(player)
}


