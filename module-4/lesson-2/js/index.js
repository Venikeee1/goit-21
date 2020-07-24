'use strict'
// console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());

const logger = function () {
  console.log(this);
}

const showArrowFunctionContext = () => {
  console.log(this, 'arrow function');
}

const foo = 'Hello world';

// logger();

// const user = {
//   name: 'Ilona Maskovna',
//   showContext: function() {
//     const userNameArrowFunction = () => {
//       // this === user
//       console.log(this.name, 'ArrowFunction');
//     }

//     const userName = function() {
//       console.log(this.name, 'function');
//     }

//     // setTimeout(
//     //   () => {
//     //     userNameArrowFunction();
//     //     userName();
//     //   },
//     //   1000
//     // )
//   },
//   methodWithArrowFunction: () => {
//     console.log(this.name, 'methodWithArrowFunction');
//     console.log(foo, '-----foo');
//   }
//   // showContext: logger
// }

// console.table(user, '-----user');


// user.showContext();
// user.methodWithArrowFunction();

// showArrowFunctionContext();

// const randomFn = (...args) => {
//   const [firstElem] = args;
//   return Array.isArray(firstElem) ? firstElem[0] : firstElem;
// }

// randomFn([1,2,3,4,5],90);
// console.log(randomFn([1,2,3,4,5],90));

// const car = {
//   name: 'BMW',
//   price: 55555
// }

// /* bind */
// const showPrice = function(methodType = '', name = 'noname') {
//   console.log(this, methodType, name);
// }

// const functionWithFixedContext = showPrice.bind(car);
// functionWithFixedContext('bind');

// /* apply and call */

// showPrice.call(car, 'call', 'Petrov');
// showPrice.apply(car, ['apply', 'Sidorov']);

// const bar = function(a) {
//   // a - записала в лексическое окружение
//   return function(b) {
//     return a + b;
//   }
// }

// const fooz = bar(2);
// // function(b) {
// //   return a + b;
// // }
// console.dir(fooz);

// console.log(fooz(5));


// Морской бой
// поля 4 на 4
// играет всего один игрок
// всего три судна противника
// генерировать случайное расположение кораблей

/*
--- Методы ---
1) Метод run()
2) Метод requestUserHit()
3) Метод logger()
4) Метод проверить попал ли юзер

*/

const battleship = {
  name: 'Super game',
  freeShipsLeft: 3,
  numberOfShips: 0,
  // если пользователь попал, то меняет 1 на 2
  // учли промахнулся, то меняем на 3
  layout: [
    ['🌊', '🌊', '🌊', '🌊'],
    ['🌊', '🌊', '🌊', '🌊'],
    ['🌊', '🌊', '🌊', '🌊'],
    ['🌊', '🌊', '🌊', '🌊'],
  ],

  logger() {
    for(const row of this.layout) {
      let result = '';
      for(const item of row) {
        result += `| ${item} |`;
      }

      console.log(result);
    }
  },

  requestUserHit() {
    const cords = prompt('Please fire!!!');
    const [x, y] = cords.split(',');

    return {
      x: Number(x),
      y: Number(y)
    }
  },

  addRandomShip() {
    const x = Math.round(Math.random() * 3 );
    const y = Math.round(Math.random() * 3 );
    const item = this.layout[x][y]

    if(item === '🌊') {
      this.layout[x][y] = '⛵';
      this.freeShipsLeft -= 1;
      this.numberOfShips += 1;
    }
  },

  addRandomShips() {
    while(this.freeShipsLeft !== 0) {
      this.addRandomShip();
    }
    console.log('All random ships created');
  },

  userFire() {
    const { x, y } = this.requestUserHit();
    this.addUserHit(x, y);
  },

  addUserHit(x, y) {
    const item = this.layout[x][y];

    if (item === '🌊') {
      console.log('Промах');

      this.layout[x][y] = '💥';
    } else if (item === '⛵') {
      console.log('Убил!!!');

      this.numberOfShips -= 1;
      this.layout[x][y] = '☠';
    } else {
      console.log('Ты сюда сюда уже стрелял');
    }

    this.logger();
  },

  battle() {
    while (this.numberOfShips !== 0) {
      this.userFire()
    }
    this.greetUser();
  },

  greetUser() {
    console.log('Поздравляем, ты победил!!!!');
  },

  run() {
    console.log(`Welcome to our ${this.name}`);
    this.addRandomShips();
    this.battle();
  }
}

battleship.run()


