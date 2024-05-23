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
})

it("has a method", () => {

    expect(game).toHaveProperty("receiveAttack")
    expect(game).toHaveProperty("createShip")
    expect(game).toHaveProperty("placeShip")
})


// NOTE: IF A I WANT TO RUN THE TEST WITH THIS TWO AT THE SAME TIME, BOTH FAIL OR BOTH PASS.. NOT SURE WHY.

it.skip("placeShip value", () => {

    let ship1 = [6, {type: "carrier", length: 5}]

    game.placeShip()

    //expect(game.adjacencyList[7]).toContainEqual(ship1)
    //expect(game.adjacencyList[7]).toContainEqual("OVERLAP")
    expect(game.adjacencyList[7].length).toBe(0)
    //expect(game.adjacencyList[8]).toContainEqual(ship1)
    expect(game.adjacencyList[8].length).toBe(0)
    expect(game.adjacencyList[9]).toContainEqual(ship1)
    expect(game.adjacencyList[5]).toContainEqual(ship1)
    expect(game.adjacencyList[6]).toContainEqual(ship1)
    expect(game.adjacencyList[4].length).toBe(0)
} )


it.skip("placeShip value OVERLAP", () => {

    game.placeShip()

    expect(game.adjacencyList[7]).toContainEqual("OVERLAP")
})


it.skip("placeShip array of coord value", () => {

    expect(game.placeShip()).toContainEqual([7, 6], [8, 6], [9, 6], [5, 6], [6, 6])
})

it.skip("placeShip array of coord value OVERLAP", () => {

    expect(game.placeShip().length).toBe(0)
})

it.skip("searching for the adjacencyList element", () => {

    let ship1 = [6, {type: "carrier", length: 5}]

    expect(game.placeShip()).toContainEqual(ship1)
})

it.skip("searching for the adjacencyList element", () => {

    expect(game.placeShip()).toBe(5)
})







