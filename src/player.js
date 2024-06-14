import {GameBoard} from "./gameboard"

export {Player}

class Player {

    constructor(name, ID){

        this.name = name
        this.ID = ID
        this.gameBoard = new GameBoard()
        this.moves = []
    }

    upperCaseName() {

       return this.name.charAt(0).toUpperCase() + this.name.slice(1)
    }

    checkMoves(quadrant) {

        for(let move of this.moves) {

            let [row, col] = move

            if(row === quadrant[0] && col === quadrant[1]) {

                return true
            } 
        }

        this.moves.push(quadrant)
    }

    placeShips(){

        this.gameBoard.placeShips()
    }

    receiveAttack(square) {

        this.gameBoard.receiveAttack(square)
    }

    getHitList(){

       return this.gameBoard.shipHitList
    }

    getMissList(){

        return this.gameBoard.waterHitList
    }

    getShipsCoords(){
        
        return this.gameBoard.shipsCoords
    }

}

