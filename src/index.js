import "../src/style.css"
import {Player} from "./player"
import {GameBoard} from "./gameboard"
import {Ship} from "./ship"
import {elements} from "./dom"
import { Game } from "./game"

export { GAME }

let GAME = new Game()
elements.init()




