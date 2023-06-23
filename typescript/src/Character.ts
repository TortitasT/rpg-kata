export class Character {
    private health: number
    private level: number
    private alive: boolean

    constructor() {
        this.health = 1000
        this.level = 1
        this.alive = true
    }

    public getHealth(): number {
        return this.health
    }

    public getLevel(): number {
        return this.level
    }

    public isAlive(): boolean {
        return this.alive
    }

    public doDamage(damage: number): void {
        if (damage >= this.health) {
            this.health = 0
            this.alive = false
            return
        }
        this.health = this.health - damage
    }

    public doHeal(heal: number): void {
        if (!this.alive) {
            return;
        }
        this.health = this.health + heal
        if (this.health > 1000) {
            this.health = 1000;
        }
    }
}
