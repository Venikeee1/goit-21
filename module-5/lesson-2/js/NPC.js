import { Hero } from './Hero.js';

export class NPC extends Hero {
  getRandomLevel() {
    return Math.floor(Math.random() * (this.levelLimit + 1))
  }

  randomHit() {
    this.hitLevel = this.getRandomLevel();
  }

  randomBlock() {
    this.blockLevel = this.getRandomLevel();
  }

  refresh() {
    this.randomHit();
    this.randomBlock();
  }

  getActions() {
    this.refresh();

    return {
      npcHitLevel: this.hitLevel,
      npcBlockLevel: this.blockLevel
    }
  }
}