import {Player} from "./player"

let player = new Player

it("is defined", () => {

    expect(Player).toBeDefined()
})

it("is a function", () => {

    expect(Player).toBeInstanceOf(Function)
})

it("has property", () => {

    //expect(player).toHaveProperty("ships")
    expect(player).toHaveProperty("name")
    expect(player).toHaveProperty("gameBoard")
})

it("name property value", () => {

    expect(new Player("matuchi").name).toBe("matuchi")
    expect(new Player("gordo lucky").name).toBe("gordo lucky")
})