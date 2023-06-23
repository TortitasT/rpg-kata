export class Character {
  private health
  private level
  private alive

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
}
