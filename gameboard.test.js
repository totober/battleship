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
    expect(game).toHaveProperty("createShip")
    expect(game).toHaveProperty("placeShip")
})

it("createShip value", () => {

    let ship1 = {type: "carrier", length: 5}
    let ship2 = {type: "battleship", length: 4}
    let ship3 = {type: "destroyer", length: 3}
    let ship4 = {type: "submarine", length: 3}
    let ship5 = {type: "patrol boat", length: 2}

    expect(game.createShip()).toContainEqual(ship1)
    expect(game.createShip()).toContainEqual(ship2)
    expect(game.createShip()).toContainEqual(ship3)
    expect(game.createShip()).toContainEqual(ship4)
    expect(game.createShip()).toContainEqual(ship5)
})

it.skip("placeShip value", () => {

    let ship1 = [6, {type: "carrier", length: 5}]

    game.placeShip()

    expect(game.adjacencyList[7]).toContainEqual(ship1)
    expect(game.adjacencyList[8]).toContainEqual(ship1)
    expect(game.adjacencyList[9]).toContainEqual(ship1)
    expect(game.adjacencyList[5]).toContainEqual(ship1)
    expect(game.adjacencyList[6]).toContainEqual(ship1)
    expect(game.adjacencyList[4].length).toBe(0)
} )

it("placeShip value OVERLAP", () => {

    game.placeShip()

    expect(game.adjacencyList[7]).toBe("OVERLAP")
})






