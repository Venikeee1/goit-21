import { Hero } from './Hero.js';

export class Player extends Hero {
  inputHitLevel() {
    this.hitLevel = +prompt('Куда хотите ударить');
  }

  inputBlockLevel() {
    this.blockLevel = +prompt('Блок');
  }

  requestActions() {
    this.inputHitLevel();
    this.inputBlockLevel();

    return {
      hitLevel: this.hitLevel,
      blockLevel: this.blockLevel
    }
  }
}