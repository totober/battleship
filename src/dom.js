import {Player} from "./player"
import {GameBoard} from "./gameboard"
import {Ship} from "./ship"

document.addEventListener("load", createGrid)

function createElement(element, className){

    let el = document.createElement(element)
    el.classList.add(className)
    return el
}

function createGrid(){

    let board = document.querySelector(".board")
    let num = 10

    for(let i = 0; i < num; i++) {

        let rowQuadrant = createElement("div", `${i}`)
        board.appendChild(rowQuadrant)

        for(let j = 0; i < num; j++) {

            let Colquadrant = createElement("div", `${j}`)
            rowQuadrant.appendChild(Colquadrant)
        }
    }
}


function displayBoard(){

    let player = new Player("player one")

   //player.gameBoard.

}