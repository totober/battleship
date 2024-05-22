export {Ship}

class Ship {

    #hitCounter = 0
    #isSunk = false

    constructor({type, length}){
        this.length = length
        this.type = type
        
    }

    hit() {
        this.#hitCounter ++

        this./* # */isSunk()
    }

    // Comento el PRIVATE porque Jest me tira error.. creo que no lo reconoce, igual que con es6 modules.
    /* # */isSunk(){
 
        if(this.#hitCounter === this.length) {
            this.#isSunk = true
        }
    }

}