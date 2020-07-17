'use strict';

// const bar = ['hello', 'world', 'nice', 'nike'];
// const [firstElement, ...restValues] = bar;
// console.log(firstElement, restValues);

// const foo = {
//   name: 'John',
//   age: 15,
//   email: 'sss@sss.com'
// }

// const { name, age, secondName = 'Valera' } = foo;
// console.log(name, age, secondName);

// const sum = (...args) => {
//   // argument нет в стрелочной функции
//   let result = 0;
//   for (let value of args) {
//     result += value;
//   }

//   return result;
// }

// console.log(sum(5,15,20,22,36));

// const user1 = {
//   name: 'Valera',
//   age: 15
// }

// const user2 = {
//   name: 'Anton',
//   age: 25
// }

// const { age: firstUserAge, name: firstUserName } = user1;
// const { age: secondUserAge, name: secondUserName } = user2;
// console.log(firstUserAge, firstUserName);
// console.log(secondUserAge, secondUserName);

// массив персонажей мортал комбата
const mortalCombatCharacters = [
  {
    name: 'Motaro',
    damage: 95,
    health: 500,
    icon: '👿',
    missChance: 0.05
  },
  {
    name: 'Liu Kang',
    damage: 85,
    health: 400,
    icon: '👦',
    missChance: 0.35,
    url: 'https://facebook.com'
  },
  {
    name: 'Raiden',
    damage: 100,
    health: 550,
    icon: '👦',
    missChance: 0.15
  },
  {
    name: 'Sindel',
    damage: 90,
    health: 520,
    icon: '👩‍🦳',
    missChance: 0.25
  },
]

// функция которая забирает персонажа из массива бойцов
const createPlayer = function(characterName) {
  let searchedCharacter

  for ( let character of mortalCombatCharacters) {
    const { name } = character;

    if(characterName.toLowerCase() === name.toLowerCase()) {
      searchedCharacter = character;
    }
  }

  return searchedCharacter;
}

// создания самой игры
const game = {
  firstPlayer: null,
  secondPlayer: null,
  // метод добавления первого игрока
  addFirstPlayer: function(player) {
    this.firstPlayer = player;
  },
  // метод добавления второго игрока
  addSecondPlayer: function(player) {
    this.secondPlayer = player;
  },
  // метод в котором мы проверяем если хотя бы у одного игрока здоровья стало меньше нуля,
  // то выходим из цыкла
  fight: function() {
    while(this.firstPlayer.health > 0 && this.secondPlayer.health > 0) {
      this.firstPlayer.health = this.firstPlayer.health - this.secondPlayer.damage;
      this.secondPlayer.health = this.secondPlayer.health - this.firstPlayer.damage;
      this.logPlayersHit(this.secondPlayer, this.firstPlayer);
      this.logPlayersHit(this.firstPlayer, this.secondPlayer);
    }
    // определяем победителя
    const winner = this.getWinner(this.firstPlayer, this.secondPlayer);
    // вызываем метод приветствия победителя
    this.greetWinner(winner);
  },
  // в этом методе проверяем если у первого игрока здоровья больше нуля,
  // то победитель он, если нет то победил второй игрок
  getWinner(firstPlayer, secondPlayer) {
    const { health } = firstPlayer;
    return health > 0 ? firstPlayer : secondPlayer
  },
  // красивое оформление победителя
  greetWinner: function(winner) {
    const { name, icon } = winner;
    console.log('');
    console.log(`🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈`);
    console.log(`⭐🎈🏆  ${icon} ${name} wins  🏆🎈⭐`);
    console.log(`🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈`);
  },
  // красивое оформление удара одного игрока по другому
  logPlayersHit(firstPlayer, secondPlayer) {
    const {
      name: firstPlayerName,
      damage: firstPlayerDemage,
      icon: firstPlayerIcon
    } = firstPlayer;

    const {
      name: secondPlayerName,
      icon: secondPlayerIcon,
      health: secondPlayerHealth
    } = secondPlayer;

    console.log(
      `${firstPlayerIcon}${firstPlayerName} (${firstPlayerDemage})🤜💨 ${secondPlayerIcon}${secondPlayerName} - health left: %c${secondPlayerHealth} `,
      'color: red;'
    )
  },
  // метод запуска игры
  run() {
    if(!this.firstPlayer) {
      console.log('Please add first player');
      return;
    }

    if(!this.secondPlayer) {
      console.log('Please add second player');
      return;
    }
    // %c - после этого символа будут применяться стили из второго аргумента console.log
    // другими словами "Let the battle begin" будет зеленного цвета
    console.log('🔥🔥🔥 %cLet the battle begin 🔥🔥🔥\n ', 'color: green;')

    this.fight()
  }
}

// создали двух игроков
const firstPlayer = createPlayer('sindel');
const secondPlayer = createPlayer('Liu Kang');

// добавили двух игроков в игру
game.addFirstPlayer(firstPlayer);
game.addSecondPlayer(secondPlayer);

// запустили игру
game.run();

