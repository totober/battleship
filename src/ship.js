export {Ship}

class Ship {

    hitCounter = 0
    #isSunk = false

    constructor(length = null, type = null){
        this.length = length
        this.type = type
        this.coordinates = []
    }

    setProperties(state) {
        this.length = state.length;
        this.type = state.type;
        this.coordinates = state.coordinates
        this.hitCounter = state.hitCounter
    }

    hit() {

        this.hitCounter ++
        this.#sunkCheck()
    }

    #sunkCheck(){
 
        if(this.hitCounter === this.length) {
            this.#isSunk = true
        }
    }

    get isSunk(){
        return this.#isSunk
    }
}