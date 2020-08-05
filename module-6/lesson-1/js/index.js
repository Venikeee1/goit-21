'use strict';
import users from './users.js';
// - забрать массив из имейлов
// - забрать массив из объекта({username, email, id})
// - поиск по совпадению строки
// - поиск по совпадению улицы
// - сортировать по нейму
// - поле address сделать плоским
// - найти юзера с максимальной зарплатой

// const a = Object.create(null);
// a.name = 5;
// // console.log(a.hasOwnProperty()); - выдаст ошибку

/* Императивно */

// const userName = prompt('Введите имя');
// console.log(userName);
/* Декларативно */
// const requestUserName = () => {
//   return prompt('Введите имя')
// }

// // const name = requestUserName();
// // console.log(name);

// const arr = [1,2,3,4];

// // for( let value of arr) {
// //   console.log(value);
// // }

// const logArrayValues = (arr) => {
//   for( let value of arr) {
//     console.log(value);
//   }
// }

// logArrayValues(arr);

// /* Грязная ф-ция */
// const car = {
//   name: 'Audi'
// }

// const changeCarName = (name) => {
//   car.name = name;
// }

// changeCarName('BMW');
// console.log(car);

// /* Чистая ф-ция */
// let car = {
//   name: 'Audi'
// }

// const changeCarName = (car, name) => {
//   return {
//     ...car,
//     name
//   }
// }

// const bar = changeCarName(car, 'BMW');
// console.log(bar);

/* Методы массива */

// let arr = [];
// for(let user of users) {
//   arr.push(user.email)
// }

const getUserEmail = (user) => {
  return user.email;
};

const trimUserData = (user) => {
  const { username, email, id } = user;

  return { username, email, id };
};
/* Метод map */
// const getUserEmail = ({ email }) => email // короткая запись

// const usersEmails = users.map(getUserEmail);
// const usersShortInfo = users.map(trimUserData);

// const usersEmails = users.map(({ email }) => email) // короткая запись

// console.log(usersEmails);
// console.log(usersShortInfo);

/* Метод filter */
const requestUserName = () => {
  return prompt('Введите имя');
}

// реализация через замыкание. Мы таким образом избавляемся от зависимости внешних переменных
// const deleteUserById = (id) => {
//   return (user) => {
//     return user.id !== id
//   }
// }

const filterByName = (user) => {
  return user.username.toLowerCase().includes(userInputName.toLowerCase())
}

// const userInputName = requestUserName();
// const filteredUsers = users.filter(filterByName);
// console.log(filteredUsers);
// const filteredUsersById = users.filter(deleteUserById(+requestUserName()));
// console.log(filteredUsersById);

/* Метод sort */
const usersSortedBySalary = [...users].sort((a, b) => {
  return a.salary - b.salary
})
console.dir(users, 'users');
console.dir(usersSortedBySalary, 'usersSortedBySalary');

