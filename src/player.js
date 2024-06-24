import {GameBoard} from "./gameboard"

export {Player, CPU}

class Player {

    constructor(name){

        this.name = name
        this.gameBoard = new GameBoard()
        this.moves = [[], [], [], [], [], [], [], [], [], []]
    }

    upperCaseName() {

       return this.name.charAt(0).toUpperCase() + this.name.slice(1)
    }

    checkMoves(quadrant) {

        if(this.moves[quadrant[0]][quadrant[1]] === quadrant[1]) return true

        this.moves[quadrant[0]][quadrant[1]] = quadrant[1]
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
        
        let ships = this.gameBoard.ships

        let shipsCoords = []
     
        for(let ship of ships) shipsCoords.push(ship.coordinates)

        return shipsCoords
    }

    getSunkShips(){
        
        let ships = this.gameBoard.sunkShips

        if(ships.length < 1) return []
     
        let coords = []
     
        for(let ship of ships) coords.push(ship.coordinates)
     
        return coords
    }

    replay(){

        this.moves = [[], [], [], [], [], [], [], [], [], []]
        this.gameBoard = new GameBoard()
    }

}


class CPU extends Player {

    rivalHitList = [];
    rivalSunkList = [];
    direction = null;

    constructor(name, difficulty){
        super(name)
        this.difficulty = difficulty
    }

    replay(){

        this.moves = [[], [], [], [], [], [], [], [], [], []]
        this.gameBoard = new GameBoard()
        this.rivalHitList = []
        this.rivalSunkList = []
        this.direction = null
    }

    setRivalHitList(rivalHitList) {

        this.rivalHitList = rivalHitList
    }

    setRivalSunkShips(rivalSunkList){

        if(rivalSunkList.length === this.rivalSunkList.length) return

        this.rivalSunkList = rivalSunkList
        this.direction = null

        if(this.difficulty === "hard") this.#encloseSunkShip() 
    }

    attack(){

        let square = this.#moveAlgorithm()

        if(square !== null) return square

        square = this.#randomSquare()

            while(this.checkMoves(square)) square = this.#randomSquare()

        return square
    }

    #randomSquare(){

        let randomRow =  Math.floor(Math.random() * 10)
        let randomCol =  Math.floor(Math.random() * 10)

        let square = [randomRow, randomCol]

        return square
    }

    #isSunk(move){

        for(let coord of this.rivalSunkList.flat()) if(coord[0] === move[0] && coord[1] === move[1]) return true
    }

    #moveAlgorithm(){

        if(this.rivalHitList.length < 1) return null

        let coordQueue = [...this.rivalHitList]

        while(coordQueue.length > 0) {

            let coord = coordQueue.pop()

            if(this.#isSunk(coord)) break  

            let row = coord[0]
            let col = coord[1]

            let moves = [[row - 1, col], [row, col + 1], [row + 1, col], [row, col - 1]]

            if(this.difficulty !== "easy") {

                if(this.direction === null) this.#checkDirection(coord)
                if(this.direction === "vertical") moves = [[row - 1, col], [row + 1, col]]
                if(this.direction === "horizontal") moves = [[row, col + 1], [row, col - 1]]
            }

            for(let move of moves) {

                if(move[0] < 0 || move[1] < 0 || move[0] > (this.gameBoard.rowQuantity - 1) || 
                move[1] > (this.gameBoard.columnQuantity - 1)) continue

                if(this.checkMoves(move) !== true) return move
            }
        }

        return null
    }

    #checkDirection(hit){

        let rivalHitList = [...this.rivalHitList]
        let lastHit = rivalHitList[rivalHitList.length - 2]

        if(typeof lastHit === "undefined") return

        if(hit[1] === lastHit[1] &&
          (hit[0] + 1 === lastHit[0] || hit[0] - 1 === lastHit[0])) {

            this.direction = "vertical"
            return
        }

        if(hit[0] === lastHit[0] &&
          (hit[1] === lastHit[1] + 1 || hit[1] === lastHit[1] - 1)) {

            this.direction = "horizontal"
            return
        }
    }

    #encloseSunkShip(){

        let rivalSunkList = [...this.rivalSunkList]

        let sunkShip = rivalSunkList.pop()

        for(let coordinate of sunkShip) {

            let row = coordinate[0]
            let col = coordinate[1]

            let area = [[row - 1, col], [row - 1, col - 1], [row - 1, col + 1],
                        [row + 1, col], [row + 1, col - 1], [row + 1, col + 1],
                        [row, col], [row, col - 1], [row, col + 1]]

            for(let move of area) {

                if(move[0] < 0 || move[1] < 0 || move[0] > (this.gameBoard.rowQuantity - 1) || 
                   move[1] > (this.gameBoard.columnQuantity - 1)) continue

                this.checkMoves(move)
            }    
        }
    }


}


// ALGORITHM

// 1 - Cuando encuentra 1 barco, que vaya como las agujas del reloj en cada vez que le pega
// 2 - Cuando encuentra que es vertical u horizontal, solo atacar en la linea que va (ya no como agujas del reloj)
// 3 - Seguir asi hasta que el barco este hundido
// 4 - Eliminar adyacencias del ship de la posibilidad de golpeo. 