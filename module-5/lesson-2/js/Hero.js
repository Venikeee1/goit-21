export class Hero {
  constructor({ name, health, damage }) {
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.hitLevel = 0;
    this.blockLevel = 0;
    this.levelLimit = 2;
  }

  attack() {
    return this.damage;
  }

  takeDamage(damage) {
    this.health = this.health - damage;
  }

  getBlockLevel() {
    return this.blockLevel;
  }

  getHitLevel() {
    return this.hitLevel;
  }
}