import {Character} from "../src/Character";

describe("character creation", () => {
    it("should initialize with default values", () => {
        const character = new Character()

        expect(character.getHealth()).toBe(1000)

        expect(character.getLevel()).toBe(1)

        expect(character.isAlive()).toBe(true)
    });
});


describe("character damage", () => {
    it("should reduce health", () => {
        const character = new Character()

        character.doDamage(100)

        expect(character.getHealth()).toBe(900)
        expect(character.isAlive()).toBe(true)
    });
    it("should leave health as 0 when damage bigger than health", () => {
        const character = new Character()

        character.doDamage(1001)

        expect(character.getHealth()).toBe(0)
    });
    it("should die when health is 0", () => {
        const character = new Character()

        character.doDamage(1000)

        expect(character.isAlive()).toBe(false)
    });
});

describe("character heal", () => {
    it("should increase health", () => {
        const character = new Character()
        character.doDamage(200)

        character.doHeal(100)

        expect(character.getHealth()).toBe(900)
    });

    it("should not increase health from dead character", () => {
        const character = new Character()
        character.doDamage(1000)

        character.doHeal(100)

        expect(character.getHealth()).toBe(0)
        expect(character.isAlive()).toBe(false)
    });

    it("should not increase health above from 1000", () =>{
        const character = new Character()

        character.doHeal(100)

        expect(character.getHealth()).toBe(1000)
    });
});
