'use strict';
// const add = function(a, b) {
//     return a + b
// }

// console.log('function expression', add(2, 10));
// console.log('function declaration', multiply(2, 10));

// function multiply(a, b) {
//     return a * b
// }

// const logFirstElement = function(arr) {
//     console.log(arr[0])
// }

// console.log(logFirstElement(drinks))

/* Параметры по умолчанию */

// const add = function(a = 15, b = 10) {
//     return a + b
// }

// console.log(add(1, 5));
// console.log(add(1));
// console.log(add());

/* arguments */

// Суммирование всех аргументов - плохое решение
// const sumValuesBad = function(a = 0, b = 0, c = 0, t = 0, p = 0) {
//     return a + b + c + t + p
// }

// const sumValues = function(...args) {
//     console.log('arguments', Array.from(arguments))
//     console.log('rest', args)
//     const arrOfArguments = Array.from(arguments);
//     let result = 0;

//     for (const value of arrOfArguments) {
//         result += value
//     }

//     return result;
// }

// const total = sumValues(22, 55, 100, 213, 12312 ,123123);
// console.log(total);


/* Область видимости */

// const a = 5;
// const c = 15;

// const b = function(value) {
//     const a = 10;
//     console.log(a, c);
// }

// b();

// console.log('after', a)

/* Hoisting */

// const a = 55;

// const foo = function(value) {
//     const a = 10;

//     console.log(value)
//     console.log(a);

// }

// foo(a)

/* Arrow function */

// const add = (...arg) => {
//     // console.log(arguments) не работает в стрелочных функциях
//     console.log(arg)
//     return arg[0] + arg[1]
// }

// const multiply = (a = 15, b = 20) => a * b;
// const logger = (value) => console.log(value);

// console.log(add(10, 15));
// console.log('multiply', multiply(undefined, 15));
// logger('Logger is here');

const drinks = ['🍷', '🍾', '🍻', '🍹'];
let amountOfDrinks = [];

// Выбираем напиток по типу
const getDrinkByName = (drinkType) => {
    if (drinkType === 'wine') {
        return '🍷'
    }
    
    if (drinkType === 'champagne') {
        return '🍾'
    }

    if (drinkType === 'beer') {
        return '🍻'
    }

    return '🍹'
}

// Показываем количество выпитого
const showAmountOfDrinks = function() {
    console.log(amountOfDrinks);
}

// Кладем лед
const withIce = function(drink) {
    return `${drink} 🧊`
}

// Добавляем напитки
const addDrinks = function(...drinks) {
    // amountOfDrinks = [...amountOfDrinks, ...drinks] // with spread
    amountOfDrinks = amountOfDrinks.concat(drinks)
}

// добавляем два напитка и выводим их в консоль
const firstDrink = withIce(getDrinkByName('beer'));
const secondDrink = withIce(getDrinkByName('wine'));
addDrinks(firstDrink, secondDrink);
showAmountOfDrinks();
