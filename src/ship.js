export {Ship}

class Ship {

    #hitCounter = 0
    #isSunk = false

    constructor({length, type}){
        this.length = length
        this.type = type
        this.coordinates = []
    }

    setProperties(state) {
        this.length = state.length;
        this.type = state.type;
        this.coordinates = state.coordinates
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