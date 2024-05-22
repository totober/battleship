import {GameBoard} from "./gameboard"

export {Player}

class Player {

    constructor(name){

        this.name = name
        /* this.ships = [{type: "carrier", length: 5}, {type: "battleship", length: 4}, {type: "destroyer", length: 3},
                     {type: "submarine", length: 3}, {type: "patrol boat", length: 2}] */
        this.gameBoard = new GameBoard
    }
}

