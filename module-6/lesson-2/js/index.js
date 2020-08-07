'use strict';
import users from './users.js';

/* Метод forEach */

// const a = users.forEach(user => {
//   console.log(user.salary);
// })

/* Метод find */

// const searchedUser = users.find(user => {
//   return user.salary === 1000
// })
// console.log(searchedUser);

/* Метод reduce */

// const { name } = users.reduce((acc, user, index) => {
//   console.log(acc);
//   console.log(index);
//   return acc.salary < user.salary ? user : acc
// })

// console.log(name);

// const foo = [4, 32, 8, 10];
// const max = Math.max(...foo);
// const max = Math.max.apply(null, foo);
// console.log(max);

/* Метод some, every */

// const checkUsersSalary = users.every(user => {
//   return user.salary > 100
// })

// const ifSomeoneHasSalary = users.some(user => user.salary > 2000)

// console.log(checkUsersSalary, 'every');
// console.log(ifSomeoneHasSalary, 'some');

// const bar = [[1, [2,[2,3]]], [2], 5, 10];
// console.log(bar.flat(Infinity));

/* Ф-ция глубокого клонирования */
const obj = {
  name: 'obj',
  salary: 2000,
  address: {
    street: 'Hoeger Mall',
    suite: 'Apt. 692',
    city: 'South Elvis',
    zipcode: '53919-4257',
    geo: {
      lat: '29.4572',
      lng: '-164.2990',
    },
  },
};

const deepClone = (obj) => {
  // создаем массив ключей
  const arrOfKeys = Object.keys(obj); //["lat", "lng"]
  
  const result = arrOfKeys.reduce((acc, key) => {
    const value = obj[key]; // '29.4572', '-164.2990'
    // проверяем если значение равно объекту, то рекурсивно вызываем deepClone
    if (typeof value === 'object') {
      acc[key] = deepClone(value);
      return acc;
    }
    acc[key] = value; // acc = { lat: '29.4572' }; // acc = { lat: '29.4572', lng: '-164.2990' };

    return acc;
  }, {});

  return result;
};

const deepClonedObj = deepClone(obj);
const shallowCopy = { ...obj };
// console.log(deepClonedObj);
// console.log(shallowCopy.address === obj.address, 'shallow copy');
// console.log(deepClonedObj.address === obj.address, 'deep clone');

/* Ф-ция плоского массива */
const fooz = [[1, [2,[2,3]]], [2], 5, 10];

const flatArray = (arr) => {
  return arr.reduce((acc, item) => {
    if(Array.isArray(item)) {
      acc = [...acc, ...flatArray(item)]
      return acc
    }
    acc.push(item)
    return acc;
  }, [])
}

// console.log(flatArray(fooz));

// const baar = [1,3,2,15,11,20];
// console.log(baar.sort((a, b) => a - b));

/* Способ избавление из массива falsy значений */
const c = [undefined, 20, 30, undefined, 40];
console.log(c.filter(Boolean));
console.log(Boolean(null));