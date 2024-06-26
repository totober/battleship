import {elements, playersReady} from "./dom"
import { Player, CPU } from "./player"
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

    //constructor() {}

    setGameData(mode, playersNames, difficulty) {

        this.#mode = mode
        this.#difficulty = difficulty

        if(mode === "PlayerMode") {

            for(let name of playersNames) this.#createPlayer(name)
            
            return
        }

        this.#createPlayer(playersNames[0])
        this.#createCPU(playersNames[1])
    }
  
    #createPlayer(name) {

        let index = this.#players.length
        let num = index === 0 ? "One" : "Two"

        let player = new Player(name || `Player ${num}`)

        this.#players.push(player)
    }

    #createCPU() {

        let player = new CPU("CPU", this.#difficulty)

        this.#players.push(player)
    }

    startGame(){
            
        this.#playerTurn = Math.floor(Math.random() * 2)

        if(this.#mode === "CpuMode") this.#playerTurn = 0
    }

    turn(quadrant) {
 
        let duplicatedMove = this.#players[this.#playerTurn].checkMoves(quadrant)
     
        if(duplicatedMove) return
        
        this.#sendAttack(quadrant)

        this.#playerTurn = this.getPassivePlayerRef()
    }

    CPUturn(){

        if(this.#playerTurn === 0) return

        this.#updateState()

        let square = this.#players[1].attack()
        this.#sendAttack(square)

        this.#playerTurn = this.getPassivePlayerRef()
    }

    #updateState(){

        let rivalHitList = this.getPlayerHitList(0)
        this.#players[1].setRivalHitList(rivalHitList)

        let sunkenList = this.getPlayerSunkShips(0)
        this.#players[1].setRivalSunkShips(sunkenList)
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

            if(player.getSunkShips().length === 5) {

                return true
            }
        }
        
        return false
    }

    getMode() {
        return this.#mode
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

    getPlayerSunkShips(whichPlayer = this.#playerTurn) {
        
        return this.#players[whichPlayer].getSunkShips()
    }

    placePlayerShips(whichPlayer = this.#playerTurn){

        this.#players[whichPlayer].placeShips()
    }

}
