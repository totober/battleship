import {elements} from "./dom"
import { Player } from "./player"
//import { Ship } from "./ship"
import {storeData, retrieveData, updateData} from "./storage"


export {gameModeData, game, startGame, turn}

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



function game(){

    


}

/* function turnToggle(player) {

    if(player.ID === 0) return 1

    if(player.ID === 1) return 0 
} */





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


function displayTurn(player) {

    let state = retrieveData()

    let title = elements.title

    title.textContent = `${state.players[player].upperCaseName()}'s turn!`
}

function startGameButton(e) {

    e.currentTarget.dataset.ready = true

   /*  if(!(elements.btnReadyArr[0].dataset.ready === "true" 
        && elements.btnReadyArr[1].dataset.ready === "true")) return */

    for(let btn of elements.btnReadyArr) {

       if(btn.dataset.ready === "false") return
    }

}

class Game {

    constructor() {
        
        this.playerOne
        this.playerTwo 
        this.players = [this.playerOne, this.playerTwo]
        this.mode
        this.difficulty
        this.playerTurn
    }
  

    gameModeData(mode){

        //let playerOne, playerTwo, difficulty

        this.mode = mode
    
        if(mode === "PlayerMode") {
    
            this.playerOne = new Player(elements.inputsNames[0].value || "Player One", 0)
            this.playerTwo = new Player(elements.inputsNames[1].value || "Player Two", 1)
            this.difficulty = null
        }
        
        else if(mode === "CpuMode") {
    
            this.playerOne = new Player(elements.inputsNames[2].value || "Player One", 0)
            this.playerTwo = new Player("CPU", 1)
            this.difficulty = elements.inputsRadio.forEach(input => { if(input.checked) return input.value })
        }
    
        //storeData(mode, playerOne, playerTwo)
    };

    startGame(e){

        e.currentTarget.dataset.ready = true
    
    /* 
        if(!(elements.btnReadyArr[0].dataset.ready === "true" 
        && elements.btnReadyArr[1].dataset.ready === "true")) return */

        for(let btn of elements.btnReadyArr) if(btn.dataset.ready === "false") return
    
        console.log("START GAME")
    
        this.playerTurn =   /* Math.floor(Math.random() * 2) */ 0

    }
    
    turn(e) {

        let rivalBoard = this.playerTurn === 0 ? 1 : 0

        elements.boards[rivalBoard].classList.toggle("unable")
    
       //let playerBoard = e.target.parentElement.dataset.board
       //console.log("este es el board", playerBoard)
    
       let target = e.target
       console.log("target", target)
    
       let quadrant = e.target.dataset.square.split("-").map(str => Number(str))
    
       //console.log("quadrant", quadrant)
    
       //let duplicatedMove = saveMove(playerBoard, quadrant)
        let duplicatedMove = this.players[this.playerTurn].checkMoves(quadrant)
    
        if(duplicatedMove) return
    
        elements.boards.forEach(board => board.classList.toggle("unable"))
    
        if(this.gameOver) {
           // chequear quien gano y anunciarlo.
           console.log("GAME OVER")
    
       }
    }

    /* saveMove(playerBoard, quadrant){

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
    } */

    gameOver() {
    
        for(let player of this.players) {
    
           if (player.gameBoard.shipsSunk.length === 5) {
    
                console.log("GAMEOVER")
    
                return true
           }
    
        }
    
        return false
    }




}
