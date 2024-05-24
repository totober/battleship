export {Ship}

class Ship {

    #hitCounter = 0
    #isSunk = false

    constructor({type, length}){
        this.length = length
        this.type = type
        this.coordinates = []
    
    }

    hit() {

        this.#hitCounter ++
        this.#sunkCheck()
    }

    #sunkCheck(){
 
        if(this.#hitCounter === this.length) {
            this.#isSunk = true
        }
    }

    get isSunk(){
        return this.#isSunk
    }

}