'use strict';
import { Player } from './Player.js';
import { NPC } from './NPC.js';
import { Game } from './Game.js';

// // const Hero = function(a, b) {
// //   this.a = a;
// //   this.b = b;
// //   this.name = 'Foo'
// // }

// // Hero.prototype.addName = function() {
// //   this.name = name;
// // }

// class Hero {
//   static sumValues(a, b) {
//     return a + b
//   }

//   constructor(name, health) {
//     this.name = name;
//     this._health = health;
//     this.damage = 400;
//   }

//   get health() {
//     return this._health * 2;
//   }

//   set health(newHealth) {
//     this._health = newHealth * 1.5;
//   }

//   changeName(newName) {
//     this.name = newName
//   }
// }

// const showHeroDamage = (hero) => {
//   const damage = hero.damage;
//   console.log(damage);
// }

// const showHeroHealth = (hero) => {
//   const health = hero.health;
//   console.log(health);
// }

// const superman = new Hero('supername', 500);
// // console.log(superman._health);
// superman.changeName('spiderman');
// // console.log(superman);
// superman.health = 2000;
// superman._health = 2000 * 1.5;
// // console.log(superman.health, 'superman health');

// superman.damage = 800;
// // showHeroDamage(superman);
// // showHeroHealth(superman);

// // console.log(Hero.sumValues(2, 8));
// // console.log(superman.sumValues(2, 8));

// class Warrior extends Hero {
//   constructor(name, health, exp = 0) {
//     super(name, health);
//     this.exp = exp;
//   }

//   get health() {
//     return this._health / 2;
//   }

//   set health(health) {
//     this._health = health;
//   }
// }

// class Bar extends Warrior {

// }

// const SuperWarrior = new Warrior('Warrior', 800, 8000);
// // SuperWarrior.health = 900;
// console.log(SuperWarrior);
// const fooz = new Bar();
// console.log(fooz instanceof Hero);

// class User {
//   constructor(name, description) {
//     this._name = name;
//     this._description = description;
//   }

//   get description() {
//     return `${this._description.slice(0,5)}...`
//   }

//   get name() {
//     if(this._name.length > 5) {
//       return this._name.slice(0,5)
//     }
//   }

//   set name(name) {
//     this._name = this._name
//   }
// }

// const user = new User('Johnoton', 'asddas das dasd asd asd as');
// console.log(user.name);
// console.log(user.description);

/*
// Hero, Game, Player, NPC
// Hero
// - attack()
// - takeDamage()
// - getBlockLevel()
// - getHitLevel()
// Player -> Hero
// - inputHitLevel()
// - inputBlockLevel()
// NPC -> Hero
// - randomHit()
// - randomBlock()
// game
// - run()
// - greet()
// - fight()
*/


// class Hero {
//   constructor({ name, health, damage }) {
//     this.name = name;
//     this.health = health;
//     this.damage = damage;
//     this.hitLevel = 0;
//     this.blockLevel = 0;
//     this.levelLimit = 2;
//   }

//   attack() {
//     return this.damage;
//   }

//   takeDamage(damage) {
//     this.health = this.health - damage;
//   }

//   getBlockLevel() {
//     return this.blockLevel;
//   }

//   getHitLevel() {
//     return this.hitLevel;
//   }
// }

// class Player extends Hero {
//   inputHitLevel() {
//     this.hitLevel = +prompt('Куда хотите ударить');
//   }

//   inputBlockLevel() {
//     this.blockLevel = +prompt('Блок');
//   }

//   requestActions() {
//     this.inputHitLevel();
//     this.inputBlockLevel();

//     return {
//       hitLevel: this.hitLevel,
//       blockLevel: this.blockLevel
//     }
//   }
// }

// class NPC extends Hero {
//   getRandomLevel() {
//     return Math.floor(Math.random() * this.levelLimit)
//   }

//   randomHit() {
//     this.hitLevel = this.getRandomLevel();
//   }

//   randomBlock() {
//     this.blockLevel = this.getRandomLevel();
//   }

//   refresh() {
//     this.randomHit();
//     this.randomBlock();
//   }

//   getActions() {
//     this.refresh();

//     return {
//       npcHitLevel: this.hitLevel,
//       npcBlockLevel: this.blockLevel
//     }
//   }
// }

// class Game {
//   constructor(player, npc) {
//     this.player = player;
//     this.npc = npc;
//   }

//   logFightFrame() {
//     console.log('player: ',this.player.hitLevel, this.player.blockLevel);
//     console.log('player health: ', this.player.health);
//     console.log('npc: ', this.npc.hitLevel, this.npc.blockLevel);
//     console.log('npc health: ', this.npc.health);
//   }

//   fight() {
//     while(this.player.health > 0 && this.npc.health > 0) {
//       const playerDamage = this.player.attack();    
//       const npcDamage = this.npc.attack();
//       const { hitLevel, blockLevel } = this.player.requestActions();
//       const { npcHitLevel, npcBlockLevel } = this.npc.getActions();

//       if(this.checkHitSuccess(hitLevel, npcBlockLevel)) {
//         this.npc.takeDamage(playerDamage);
//       }

//       if(this.checkHitSuccess(npcHitLevel, blockLevel)) {
//         this.player.takeDamage(npcDamage);
//       }

//       this.logFightFrame();
//     }
//   }

//   checkHitSuccess(hitLevel, blockLevel) {
//     return hitLevel !== blockLevel;
//   }

//   greet() {
//     console.log('Yoohhohohoho');
//     console.log(this.player);
//     console.log(this.npc);
//   }

//   run() {
//     this.fight();
//     this.greet();
//   }
// }


const player = new Player({
  name: 'ItMan 🦸‍♂️',
  health: 1000,
  damage: 400
})

const npc = new NPC({
  name: '🧟',
  health: 1000,
  damage: 400
})

const game = new Game(player, npc);
game.run();

