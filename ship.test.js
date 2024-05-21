import {Ship} from "./ship"

let ship = new Ship

it("is defined", () => {
    expect(Ship).toBeDefined()
})  

it("is a function", () => {

    expect(Ship).toBeInstanceOf(Function)
})

it("have length property", () => {

    expect(Ship).toHaveProperty("length")
})

it("is a method", () => {

    expect(ship.hit).toBeInstanceOf(Function)
})

