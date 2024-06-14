import {Ship} from "./ship"

export {GameBoard}

class GameBoard {

    constructor(rowQuantity = 10, columnQuantity = 10){

        this.rowQuantity = rowQuantity,
        this.columnQuantity = columnQuantity,
        this.shipTypes = [{type: "carrier", length: 5}, {type: "battleship", length: 4}, 
                          {type: "destroyer", length: 3}, {type: "submarine", length: 3}, 
                          {type: "patrol boat", length: 2}],
        this.ships = [],
        this.shipsSunk = [],
        this.waterHitList = [],
        this.shipHitList = [],
        this.shipsCoords = []   
    }

    #createShips(){
                    
        let shipsQueue = []

        for(let ship of this.shipTypes){
  
            shipsQueue.push(new Ship(ship.length, ship.type))          
        }

        return shipsQueue    
    }

    placeShips() {

        this.ships = []
        this.shipsCoords = []

        let shipsQueue = this.#createShips()
        let adjacencyList = [[], [], [], [], [], [], [], [], [], []]

        while(shipsQueue.length > 0) {


            let randomRow =  Math.floor(Math.random() * 10)
            let randomCol =  Math.floor(Math.random() * 10)
            let vertical =   Math.floor(Math.random() * 2)
    
            let randomRowCopy = randomRow
            let randomColCopy = randomCol 
    
            let ship = shipsQueue.shift()
            this.ships.push(ship)


                for(let i = 0; i < ship.length; i++){

                    if(adjacencyList[randomRowCopy].includes(randomColCopy)){

                        ship.coordinates = []
                        shipsQueue.unshift(ship)
                        this.ships.pop()

                        break
                    }

                    ship.coordinates.push([randomRowCopy, randomColCopy])

                    if(vertical) {

                        if(randomRowCopy < (this.rowQuantity - 1)) {
                
                            randomRowCopy ++
                            continue
                        }
    
                        randomRowCopy = randomRow - (ship.length - (i + 1))

                    } else {

                        if(randomColCopy < (this.columnQuantity - 1)) {
                
                            randomColCopy ++
                            continue
                        }
    
                        randomColCopy = randomCol - (ship.length - (i + 1))
                    }
                }

                if(ship.coordinates.length > 0) this.#encloseShip(ship, adjacencyList)

        }

        this.#shipsRefs()

    }
    
    #encloseShip(ship, adjacencyList){

        for(let coordinate of ship.coordinates) {

            let row = coordinate[0]
            let col = coordinate[1]

            let area = [[row - 1, col], [row - 1, col - 1], [row - 1, col + 1],
                        [row + 1, col], [row + 1, col - 1], [row + 1, col + 1],
                        [row, col], [row, col - 1], [row, col + 1]]

            for(let arr of area) {

                if(arr[0] < 0 || arr[1] < 0 ||
                   arr[0] > (this.rowQuantity - 1) || arr[1] > (this.columnQuantity - 1)) continue

                if(!adjacencyList[arr[0]].includes(arr[1])) adjacencyList[arr[0]].push(arr[1]) 
            }    
        }
    }

    clear() {

        this.shipHitList =  [[], [], [], [], [], [], [], [], [], []]
        this.waterHitList = [[], [], [], [], [], [], [], [], [], []]
        this.ships = []
        this.shipsSunk = []
        this.shipsCoords = []
    }

    receiveAttack(square){
    
        let hitOnTarget = false

        for(let ship of this.ships) {

            for(let coordinate of ship.coordinates){

                if(coordinate[0] === square[0] && coordinate[1] === square[1]) {

                    ship.hit()
                    if(ship.isSunk) this.shipsSunk.push(ship)
                        
                    this.shipHitList.push(square)        
                    hitOnTarget = true

                    break
                }
            }

            if(hitOnTarget) return
        } 

        this.waterHitList.push(square)
    }

    #shipsRefs() {

        for(let ship of this.ships) {

            let coordArr = []

            for(let coordinate of ship.coordinates) coordArr.push(coordinate) 

            this.shipsCoords.push(coordArr)
        }
    }

    /* allShipsSunk(ship) {

        console.log("SHIP SUNKED", ship)

        this.shipsSunk.push(ship)

        console.log("SHIP SUNKED ARRAY", this.shipsSunk)

        if(!this.shipsSunk.length === 5) return null

        //ACA ALGO HARIA PARA AVISAR QUE ESTAN TODOS UNDIDOS
        return true
    } */
    
}

