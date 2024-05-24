import {Ship} from "./ship"

export {GameBoard}

class GameBoard {

    constructor(rowQuantity = 10, columnQuantity = 10 ){
        this.rowQuantity = rowQuantity
        this.columnQuantity = columnQuantity
        this.adjacencyList = [[], [], [], [], [],
                              [], [], [], [], []]
        this.ships = []
    }

    createShip(){

        let shipTypes = [{type: "carrier", length: 5}, {type: "battleship", length: 4}, 
                        {type: "destroyer", length: 3}, {type: "submarine", length: 3}, 
                        {type: "patrol boat", length: 2}]
                    
        let ships = []

        for(let ship of shipTypes){
  
            ships.push(new Ship(ship))            
        }

        return ships    
    }

    placeShip() {

        let ships = this.createShip()

        while(ships.length > 0) {


            let randomRow =  Math.floor(Math.random() * 10)
            let randomCol =  Math.floor(Math.random() * 10)
            let vertical =   Math.floor(Math.random() * 2)
    
            let loopRow = randomRow
            let loopCol = randomCol 
    
            let ship = ships.shift()
            this.ships.push(ship)

            let coord = []

                for(let i = 0; i < ship.length; i++){

                    if(this.adjacencyList[loopRow].includes(loopCol)){

                        ship.coordinate = []
                        ships.unshift(ship)
                        this.ships.pop()

                        break
                    }

                    coord.push([loopRow, loopCol])
                    ship.coordinate.push([loopRow, loopCol])

                    if(vertical) {

                        if(loopRow < (this.rowQuantity - 1)) {
                
                            loopRow ++
                            continue
                        }
    
                        loopRow = randomRow - (ship.length - (i + 1))

                    } else {

                        if(loopCol < (this.columnQuantity - 1)) {
                
                            loopCol ++
                            continue
                        }
    
                        loopCol = randomRow - (ship.length - (i + 1))
                    }
                }

                coord = []

                if(ship.coordinate.length > 0) this.borders(ship)
        }
        
        return this.adjacencyList
    }
    
    borders(ship){

        for(let coord of ship.coordinate) {

            let row = coord[0]
            let col = coord[1]

            let area = [[row - 1, col], [row - 1, col - 1], [row - 1, col + 1],
                        [row + 1, col], [row + 1, col - 1], [row + 1, col + 1],
                        [row, col], [row, col - 1], [row, col + 1]]

            for(let arr of area) {

                if(arr[0] < 0 || arr[1] < 0 ||
                   arr[0] > (this.rowQuantity - 1) || arr[1] > (this.columnQuantity - 1)) continue

                if(!this.adjacencyList[arr[0]].includes(arr[1])) this.adjacencyList[arr[0]].push(arr[1]) 
            }    
        }
    }

    clear() {

        this.adjacencyList = [[], [], [], [], [],
        [], [], [], [], []]

        this.ships = []

    }

    receiveAttack(y, x){

      //this.adjacencyList[x][y]

      return [x, y]

    }
}





/* 

placeShip(){

    let ships = []

       for(let boat of this.ships){

        ships.push(new Ship(boat))
        
       } 

       // LOOP PADRE WHILE:
       while(ships.length > 0) {

        let randomRow = Math.floor(Math.random() * 10)
        let randomCol = Math.floor(Math.random() * 10)
        let vertical = Math.floor(Math.random() * 2)

        let loopRow = randomRow
        let loopCol = randomCol

        let ship = ships.shift()

        // si es vertical, voy cambiando la ROW
        if(vertical) {

            // guardo las coordenadas, para borrarlas si el barco no entra en el lugar
            let coord = []

            // voy loopeando por cada posicion que ocupa el barco (su length)
            for(let i = 0; i < ship.length; i++){

                // si alguna posicion del barco ya esta tomada, tengo que reiniciar todo el posicionamiento
                // de ESTE barco (por eso fui guardando las coordenadas)
                if(this.adjacencyList[loopRow].includes(loopRow)) {

                    // mientras que haya coordenasas en el array, las voy eliminando
                    while(coord.length > 0) {
                        delete this.adjacencyList[coord.pop()]
                    }

                    // vuelvo a agregar el barco al inicio del array de barcos
                    ships.unshift(ship)
                    // y salgo de este loop, para vovler a empezae el loop PADRE WHILE
                    break
                }

                // Si la posicion NO esta tomada, la guardo en la adjacencyList
                this.adjacencyList[loopRow].push([loopCol, ship])

                // y guardo esa coordenada en el array de coordenadas
                coord.push(loopRow)

               // si el numero de row es menor a 9, sumo una posicion y paso a la soguiente iteracion,
               // desde una posicion mas  
               if(loopRow < 9) {

                    loopRow ++
                    continue
               } 

               // pero si ya alcance el limite del board que es 9, REINICIO el valor de loopRow
               // al valor que tenia al inicio (osea el primer valor, con el que inicie el loop)
               // y le resto las posiciones que ya fui sumando.
               // De esta manera puedo colocar el barco de forma equilibrada, usado primero el espacio
               // disponible hacia abajo (desde el punto de partida) y luego hacia arriba 
               loopRow = randomRow - i
            }

            
 
 
        } // si no, voy cambiando la COLUMN
         else {

            let coord = []

            for(let i = 0; i < ship.length; i++){

                // si alguna posicion del barco ya esta tomada, tengo que reiniciar todo el posicionamiento
                // de ESTE barco (por eso fui guardando las coordenadas)
                if(this.adjacencyList[loopRow][loopCol].includes(loopCol)) {

                    // mientras que haya coordenasas en el array, las voy eliminando
                    while(coord.length > 0) {
                        delete this.adjacencyList[loopRow][coord.pop()]
                    }

                    // vuelvo a agregar el barco al inicio del array de barcos
                    ships.unshift(ship)
                    // y salgo de este loop, para vovler a empezae el loop PADRE WHILE
                    break
                }

                // Si la posicion NO esta tomada, la guardo en la adjacencyList
                this.adjacencyList[loopRow][loopCol]

                // y guardo esa coordenada en el array de coordenadas
                coord.push(loopCol)

               // si el numero de column es menor a 9, sumo una posicion y paso a la soguiente iteracion,
               // desde una posicion mas  
               if(loopCol < 9) {

                    loopCol ++
                    continue
               } 

               // pero si ya alcance el limite del board que es 9, REINICIO el valor de loopRow
               // al valor que tenia al inicio (osea el primer valor, con el que inicie el loop)
               // y le resto las posiciones que ya fui sumando.
               // De esta manera puedo colocar el barco de forma equilibrada, usado primero el espacio
               // disponible hacia abajo (desde el punto de partida) y luego hacia arriba 
               loopCol = loopCol - i
            }


 
        }

       }  

    }

*/


