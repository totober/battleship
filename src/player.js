import {GameBoard} from "./gameboard"

export {Player}

class Player {

    constructor(name, ID){

        this.name = name
        this.ID = ID
        /* this.ships = [{type: "carrier", length: 5}, {type: "battleship", length: 4}, {type: "destroyer", length: 3},
                     {type: "submarine", length: 3}, {type: "patrol boat", length: 2}] */
        this.gameBoard = /* new GameBoard() ||  */new GameBoard()
        this.moves = []
    }

    setProperties(state) {

        this.name = state.name
        this.ID = state.ID
        this.moves = state.moves
    }

    upperCaseName() {

       return this.name.charAt(0).toUpperCase() + this.name.slice(1)
    }

    checkMoves(quadrant) {

        //if(this.moves.length < 1) return

        for(let move of this.moves) {

            let [row, col] = move

            if(row === quadrant[0] && col === quadrant[1]) return true
        }

        this.moves.push(quadrant)
    }
}

