'use strict';

// Функции высшего порядка
// const smilyFace = function() {
//   console.log('😄'.repeat(8));
// }

// const starFace = function() {
//   console.log('🤩'.repeat(8));
// }

// const introduceMyselfWithEmotion = function(name, callBack) {
//   console.log(`🔮 My name is ${name} 🔮`);

//   if(typeof callBack === 'function') {
//     callBack();
//   }
// }

// introduceMyselfWithEmotion('John', smilyFace);
// introduceMyselfWithEmotion('John', starFace);
// introduceMyselfWithEmotion('John', 55555);

const animals = [
  { icon: '😺', name: 'cat' },
  { icon: '🙈', name: 'monkey' },
  { icon: '🐕', name: 'dog' },
  { icon: '🦊', name: 'fox' },
];

const logger = (array) => {
  for (let item of array) {
    console.log(item);
  }
}

// logger(animals);

const findInArray = (array, callback) => {
  for (let item of array) {
    if (typeof callback !== 'function') {
      continue;
    }

    if(callback(item)) {
      return item;
    }
  }
}

const findFoxByName = (animal) => {
  const { name } = animal
  return name === 'fox';
}

const findFoxByIcon = (animal) => {
  const { icon } = animal
  return icon === '🦊';
}

// не надо так делать
// const findFoxByIcon = (array) => {
//   for (let item of array) {
//     if(item.icon === '🦊') {
//       return item;
//     }
//   }
// }

// const findFoxByName = (array) => {
//   for (let item of array) {
//     if(item.name === 'fox') {
//       return item;
//     }
//   }
// }

// const foo = findInArray(animals, findFoxByName);
// console.log(foo);

// const bar = findInArray(animals, findFoxByIcon);

const bar = () => {
  let foo = 0;
  return function() {
    console.log(foo += 1);
  }
}

// const fooz = bar();
// fooz();
// fooz();
// fooz();
// fooz();
// fooz();
// fooz();
// как это выглядит после вызова bar()
// const logger = function() {
//   console.log(foo += 1);
// }
const add = (a, b = undefined) => {
  if(b !== undefined) {
    return a + b;
  }

  return function(b) {
    return a + b;
  }
}

console.log(add(1, ''));
console.log(add(1, 2));
console.log(add(1)(2));

// без замыканий
// const calcObj = function(w, h, l) {
//   return w * h * l;
// }

const calcObj = function(w) {
  return function(h) {
    return function(l) {
      return w * h * l;
    }
  }
}
// короткая запись(карирования)
// const calcObj = w => h => l => w * h * l;

const objWithWidth = calcObj(10);
const objWithWidthAndHeight = objWithWidth(15);
console.log(objWithWidth(15)(20));
console.log(objWithWidthAndHeight(20));
console.log(calcObj(1)(3)(5));

console.log(kyoo);





