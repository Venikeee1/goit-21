'use strict';
const userNames = ['John', 'Vasil', 'Mikola'];
const products = ['skrew', 'hammer'];
userNames[1] = 'Vera';
// console.log(userNames[1])
// console.log(userNames)

const length = userNames.length;
// console.log('userNames.length', length)

// for (let index = 0; index < length; index += 1) {
//     console.log(userNames[index]);
// }

// userNames[55] = 55;
// console.log(userNames, userNames.length);

// for (let name of userNames) {
//     console.log(name)
// }

/* for of with break */

// for (let name of userNames) {
//     if(name === 'Vera') {
//         break;
//     }

//     console.log(name)
// }

/* for of with continue */

// for (const name of userNames) {
//     if(name === 'Vera') {
//         continue;
//     }

//     console.log(name)
// }

/* Matrix */
// const matrix = [
//     [1, 1, 1],
//     [2, 2, 2],
//     [3, 3, 3],
// ]
// console.log('---matrix---', matrix[1][1])

/* Referense type */
// const a = 5;
// const arrA = [2, 5, 10];
// const arrB = arrA;
// arrB[0] = 0;
// arrA[3] = 3;

// console.log('arrA[0]', arrA)

/* Split & join */

// const sentense = 'nice world today';
// const words = sentense.split(' ');
// const foo = words.join('_');
// console.log(words);
// console.log(foo);

/* Indexof & includes */

// const cars = ['audi', 'ford', 'bmw', 'kia', 'bmw'];
// const bmwIndex = cars.indexOf('bmw');

// // old method
// if(cars.indexOf('bmw') !== -1) {
//     console.log('car exist');
// }

// // modern method
// if(cars.includes('bmw')) {
//     console.log('includes works');
// }
// console.log(bmwIndex)

/* Push, Pop, shift & unshift */

// const cars = ['audi', 'ford', 'bmw', 'kia'];
// cars.push('suzuki');
// console.log('push', cars);
// const lastElement = cars.pop();
// console.log('pop', cars, lastElement);
// cars.unshift('bibi');
// console.log('unshift', cars);
// const firstElement = cars.shift();
// console.log('shift', cars, firstElement);

/* Slice, splice */
// const cars = ['audi', 'ford', 'bmw', 'kia'];
// const newCars = cars.slice(1,3);
// console.log('Slice', cars, newCars);

// const bar = cars.splice(2, 0, 'bibi');
// console.log('splice', bar, cars);

/* Concat */
const cars = ['audi', 'ford', 'bmw', 'kia'];
const bykes = ['honda', 'suzuki'];
const bar = bykes.concat(cars);
console.log(bar)
