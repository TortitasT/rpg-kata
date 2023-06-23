export class Character {
  private health: number
  private level: number
  private alive: boolean

  constructor() {
    this.health = 1000
    this.level = 1
    this.alive = true
  }

  public getHealth() {
    return this.health
  }

  public getLevel() {
    return this.level
  }

  public isAlive() {
    return this.alive
  }

  public doDamage(damage: number) {
    if(damage >= this.health) {
      this.health = 0
      this.alive = false
      return
    }
    this.health = this.health - damage
  }
}
