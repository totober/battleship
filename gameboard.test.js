import {GameBoard} from "./gameboard"

let game = new GameBoard

it("is defined", () => {

    expect(GameBoard).toBeDefined()
})

it("is a function", () => {

    expect(GameBoard).toBeInstanceOf(Function)
})

it("has properties", () => {

    expect(game).toHaveProperty("rowQuantity")
    expect(game).toHaveProperty("columnQuantity")
    expect(game).toHaveProperty("adjacencyList")
    expect(game).toHaveProperty("columnLetters")
})

it("has a method", () => {

    expect(game).toHaveProperty("receiveAttack")
    expect(game).toHaveProperty("placeShip")
})





