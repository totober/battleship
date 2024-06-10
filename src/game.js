import {elements, playersReady} from "./dom"
import { Player } from "./player"
//import { Ship } from "./ship"
import {storeData, retrieveData, updateData} from "./storage"
import { displayTurn } from "./display"
import { GAME } from "."


export { Game }

function gameModeData(mode){

    let playerOne, playerTwo, difficulty

    if(mode === "PlayerMode") {

        playerOne = new Player(elements.inputsNames[0].value || "Player One", 0)
        playerTwo = new Player(elements.inputsNames[1].value || "Player Two", 1)
    }
    
    else if(mode === "CpuMode") {

        playerOne = new Player(elements.inputsNames[2].value || "Player One", 0)
        playerTwo = new Player("CPU", 1)

        elements.inputsRadio.forEach(input => {
            if(input.checked) difficulty = input.value
        })
    }

    storeData(mode, playerOne, playerTwo)
}

function gameOver() {

    let state = retrieveData()

    for(let player of state.players) {

       if (player.gameBoard.shipsSunk.length === 5) {

            console.log("GAMEOVER")

            return true
       }

    }

    return false
}



function startGame(e){

    e.currentTarget.dataset.ready = true


    if(!(elements.btnReadyArr[0].dataset.ready === "true" 
    && elements.btnReadyArr[1].dataset.ready === "true")) return

    console.log("START GAME")

    let playerTurn =   /* Math.floor(Math.random() * 2) */ 0


    let rivalBoard = playerTurn === 0 ? 1 : 0
    elements.boards[rivalBoard].classList.toggle("unable")

    displayTurn(playerTurn)
}

function turn(e) {

   //let playerBoard = e.currentTarget.dataset.board
   let playerBoard = e.target.parentElement.dataset.board
   console.log("este es el board", playerBoard)

   let target = e.target
   console.log("target", target)

   let quadrant = e.target.dataset.square.split("-").map(str => Number(str))

   //console.log("quadrant", quadrant)

   let duplicatedMove = saveMove(playerBoard, quadrant)

    if(duplicatedMove) return

   elements.boards.forEach(board => board.classList.toggle("unable"))

   let isOver = gameOver()

   if(isOver) {
       // chequear quien gano y anunciarlo.
       console.log("GAME OVER")

   }

}

function saveMove(playerBoard, quadrant){

    let state = retrieveData()

    let whichPlayer = playerBoard === "0" ? 1 : 0

    let player = state.players[whichPlayer]

    console.log("a ver player", player)

   let duplicatedMove = player.checkMoves(quadrant)

   if(duplicatedMove) {

        console.log("movimiento repetido!")
        return true
   }

    updateData(state)
}


class Game {

    constructor() {
        
        this.playerTurn;
        this.playerOne;
        this.playerTwo; 
        this.players = [];
        this.mode;
        this.difficulty;
    }

    getGameData(mode, players, difficulty) {

        this.mode = mode
        this.difficulty = difficulty

        if(mode === "PlayerMode") {

            for(let player of players) this.createPlayer(player)
            
            return
        }

        this.createPlayer(players[0])
        //this.createCPU(players[1])
        this.createPlayer(players[1])

    }
  
    createPlayer(name) {

        let index = this.players.length
        let num = index === 0 ? "One" : "Two"

        let player = new Player(name || `Player ${num}`, index)

        this.players.push(player)
    }

    createCPU() {

        let CPU = new CPU("CPU", 1, this.difficulty)

        this.players.push(CPU)
    }

    startGame(){
    
        console.log("START GAME")
    
        this.playerTurn = Math.floor(Math.random() * 2)
    }

    turn(quadrant) {
 
        let duplicatedMove = this.players[this.playerTurn].checkMoves(quadrant)
     
        if(duplicatedMove) {
             
             console.log("movimiento repetido!")
             return
        }
        
        this.#sendAttack(quadrant)

        if(this.gameOver()) {
            // chequear quien gano y anunciarlo.
            console.log("GAME OVER")
        }

        this.playerTurn = this.getPassivePlayer()
    }

    #sendAttack(quadrant) {

        let player = this.players[this.getPassivePlayer()]
        player.receiveAttack(quadrant)
    }

    gameOver() {
    
        for(let player of this.players) {
            if(player.gameBoard.shipsSunk.length === 5) return true
        }
        
        return false
    }

    getPassivePlayer() {

        return this.playerTurn === 0 ? 1 : 0
    }

}
