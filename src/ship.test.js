import {Ship} from "./ship"

let ship = new Ship({type: "submarine", length: 3})

it("is defined", () => {
    expect(Ship).toBeDefined()
})  

it("is a function", () => {

    expect(Ship).toBeInstanceOf(Function)
})

it("have properties", () => {

    expect(ship).toHaveProperty("type")
    expect(ship).toHaveProperty("length")
    expect(ship).toHaveProperty("coordinates")
})

it("have propeties values", () => {

    expect(ship.type).toBe("submarine")
    expect(ship.length).toBe(3)
})


it("is a method", () => {

    expect(ship.hit).toBeInstanceOf(Function)
})

