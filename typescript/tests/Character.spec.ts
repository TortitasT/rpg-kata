import {Character} from "../src/Character";

describe("character creation", () => {
  it("should initialize with default values", () => {
    const character = new Character()

    expect(character.getHealth()).toBe(1000)

    expect(character.getLevel()).toBe(1)

    expect(character.isAlive()).toBe(true)
  });
});
