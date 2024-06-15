import {elements, playersReady} from "./dom"
import { Player } from "./player"
//import { Ship } from "./ship"
import {storeData, retrieveData, updateData} from "./storage"
import { displayTurn } from "./display"
import { GAME } from "."


export { Game }


class Game {

    #playerTurn;
    #players = [];
    #mode;
    #difficulty;

    constructor() {
        
        //this.#playerTurn; 
        //this.players = [];
       /*  this.mode;
        this.difficulty; */
    }

    setGameData(mode, playersNames, difficulty) {

        this.#mode = mode
        this.#difficulty = difficulty

        if(mode === "PlayerMode") {

            for(let player of playersNames) this.createPlayer(player)
            
            return
        }

        this.createPlayer(playersNames[0])
        //this.createCPU(players[1])
        this.createPlayer(playersNames[1])

    }
  
    createPlayer(name) {

        let index = this.#players.length
        let num = index === 0 ? "One" : "Two"

        let player = new Player(name || `Player ${num}`, index)

        this.#players.push(player)
    }

    createCPU() {

        let CPU = new CPU("CPU", 1, this.#difficulty)

        this.#players.push(CPU)
    }

    startGame(){
            
        this.#playerTurn = Math.floor(Math.random() * 2)
    }

    turn(quadrant) {
 
        let duplicatedMove = this.#players[this.#playerTurn].checkMoves(quadrant)
     
        if(duplicatedMove) {
             
             console.log("movimiento repetido!")
             return
        }
        
        this.#sendAttack(quadrant)
        this.#playerTurn = this.getPassivePlayerRef()
    }

    replay(){

        this.#players.forEach(player => player.replay())
        this.#playerTurn = ""
    }

    reset(){

        this.#difficulty = ""
        this.#mode = ""
        this.#playerTurn = ""
        this.#players = []
    }

    #sendAttack(quadrant) {

        let player = this.#players[this.getPassivePlayerRef()]
        player.receiveAttack(quadrant)
    }

    isGameOver() {
    
        for(let player of this.#players) {

            if(player.gameBoard.shipsSunk.length === /* 5 */1) {

                return true
            }
        }
        
        return false
    }

    getPassivePlayerRef() {

        return this.#playerTurn === 0 ? 1 : 0
    }

    getActivePlayerRef() {

        return this.#playerTurn
    }

    getPlayerName(whichPlayer = this.#playerTurn){

        return this.#players[whichPlayer].upperCaseName()
    }

    getPlayerHitList(whichPlayer = this.#playerTurn){

      return this.#players[whichPlayer].getHitList()
    }

    getPlayerMissList(whichPlayer = this.#playerTurn){

        return this.#players[whichPlayer].getMissList()
    }

    getPlayerShips(whichPlayer = this.#playerTurn){

        return this.#players[whichPlayer].getShipsCoords()
    }

    placePlayerShips(whichPlayer = this.#playerTurn){

        this.#players[whichPlayer].placeShips()
    }

}
