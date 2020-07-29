'use strict';

/* ООП в js */

// const value = 5;

// const logValue = () => {
//   console.log(value + 15);
// }

// logValue();


const creature = {
  icon: '🦠',
  // префикс "_" условность котрая подразумевает, что данный метод приватный
  _getName() {
    return 'Creature'
  },
  move() {
    console.log('I am moveing');
  },
  greet() {
    console.log(`Hello I am ${this.icon} ${this.getName()}`);
  }
}

const dog = {
  icon: '🐶',
  move() {
    console.log('I am moving like a dog');
  },
  greet() {
    console.log(`Hello I am ${this.icon}`);
  }
}

const cat = {
  icon: '😼',
  move() {
    console.log('I am moveing like a Cat');
  },
  greet() {
    console.log(`Hello I am ${this.icon}`);
  }
}

// creature.move();
// dog.move();
// cat.move();
// console.log(creature._getName());

/* Создание класса старославянский способ */

const Creature = function({ icon, name }) {
  // создается новай объект с именем this = {}
  this.icon = icon;
  this.name = name;

  // не рекомендуется, выделяется не нужная память при создании экземпляра класса
  // this.move = function() {
  //   console.log(`I am moving ${this.name}`);
  // }

  // this.greet = function() {
  //   console.log(`Hello I am ${this.icon}`);
  // }
}

Creature.prototype.move = function() {
  console.log(`I am moving ${this.name}`);
}

Creature.prototype.greet = function() {
  console.log(`Hello I am ${this.icon}`);
}

// [[Contsruct]] - нет в стрелочных функция
// [[Contsruct]] - вызывается при вызове функции с оператором new
const superCreature = new Creature({
  icon: '🦠',
  name: 'superCreature'
})

// console.log(superCreature);
// superCreature.move();
// superCreature.greet();

// console.log(superCreature.__proto__.constructor === Creature );
/* Создаем класс Dog который наследуется от класса  Creature*/
// const Dog = function({ icon, name }) {
//   Creature.call(this, { icon, name });
// }
// // переопределяем прототип и в него записываем прототип Creature
// Dog.prototype = Object.create(Creature.prototype);
// // так как действием выше мы затерли конструктор, то нам нужно его востановить
// Dog.prototype.constructor = Dog;

// // только после махинаций выше модем дописывать методы  класса
// Dog.prototype.bark = function() {
//   console.log('I am barking');
// }

// Dog.prototype.move = function() {
//   console.log('I am moving like a dog');
// }

// const droopy = new Dog({ name: 'Droopy', icon: '🐶'});
// // // не переопределять на прямую __proto__
// // droopy.__proto__ = superCreature;
// droopy.move();
// droopy.bark();
// console.log(droopy);
// console.log(superCreature);

// const foo = {};
// console.log(droopy instanceof Dog);

/* Улучшенная запись классов */
class Hero {
  constructor(name, health, damage) {
    this.name = name;
    this.health = health;
    this.damage = damage;
  }

  attack() {
    return this.damage
  }
}

class Warrior extends Hero {
  constructor(name, health, damage) {
    super(name, health, damage);
    this.damageMultiplier = 1.2;
  }

  attack() {
    return this.damage * this.damageMultiplier
  }
}

class SuperWarrior extends Warrior {
  constructor(name, health, damage) {
    super(name, health, damage);
  }
}

const superWarrior = new SuperWarrior('Sven', 1000, 89);
console.log(superWarrior);
console.log(superWarrior.attack());

const a = new Object();
console.log(a);
