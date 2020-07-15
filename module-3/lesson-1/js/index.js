'use strict';
// создание объекта юзера

// const user = {
//   name: 'One Punch Man',
//   mood: '🥳',
// }

// Добавление свойств
// console.log(user.mood);
// user.email = 'goit@gmail.com';
// user['email'] = 'goit@gmail.com';
// console.log(user);

// Вычисляемые свойства
// const name = 'name';
// const hotel = {
//   [name]: 'Super Hotel',
//   stars: 5,
//   email: 'goit@gmail.com'
// }

// Удаление свойства
// delete hotel.email
// console.log(hotel);

/* Создаем бар */
const bar = {
  name: 'BeerJS',
  address: 'Lesi Ukrainki, 28',
  stars: '⭐⭐⭐⭐⭐',
  menu: ['🍷', '🍾', '🍻', '🍹'],
  teamMembers: {},
  addTeamMember: function(teamMember) {
    this.teamMembers[teamMember.position] = teamMember
  }
}

// console.log(bar);
// функция создания персонала
const createTeamMember = function(name, position, salary) {
  return {
    name: name,
    position: position,
    salary: salary
  }

  // return {
  //   name,
  //   position,
  //   salary
  // } // упрощенный способ записи объекта
}

// Создаем персонал
// const waiter = createTeamMember('Peter Parker', 'waiter', '500$');
// const barman = createTeamMember('Tonny Stark', 'barman', '1500$');
// const security = createTeamMember('John Cena', 'security', '800$');
// // console.log(waiter);
// // console.log(barman);
// // console.log(security);

// Добавляем персонал в наш бар
// bar.addTeamMember(waiter);
// bar.addTeamMember(barman);
// bar.addTeamMember(security);
// console.log(bar.teamMembers);

// записываем наш персонал в переменную team
// const team = bar.teamMembers;

// for(let key in team) {
//   console.log(`${key}: `, team[key]);
// }

// const keys = Object.keys(team);
// const values = Object.values(team);
// const entries = Object.entries(team);
// // console.log(keys, values);
// // console.log(entries);

// // console.log(team.hello.name);
// // console.log(team);

/* rest, spread */

const users = ['John', 'Alex', 'Ann'];
// деструтуризация массива,
// и запись в restUsers остальных элементом массива используя rest оператор 
const [firstUser, ...restUsers] = users; 
// const restUsers = users.slice(0) // старый метод
console.log(firstUser, restUsers);
const cars = ['audi', 'bmw'];
const result = [...cars, ...users]; // spread для массива
console.log(result);

const hotel = {
  name: 'Hello hotel',
  age: 50
}

// const age = hotel.age
// const name = hotel.name
const {name, age} = hotel; // деструтуризация объекта
console.log(name, age);

const hotelProperties = {
  address: 'Mars',
  secondName: 'Upiter'
}

// spread для объекта
const mergedHotel = {
  ...hotel,
  ...hotelProperties
}

console.log('mergedHotel', mergedHotel);

/* Решение тестовой задачки, мы можем переопределять метод toString у объекта */
// let a = 1;
// let b = {
//   name: 'hello',
//   toString() {
//     return this.name + '1'
//   }
// };
// let c = 1;
// console.log(a + b + c);

/* Пример рекурсии */
const factorial = function(val) {
  if(val === 1) return 1;

  return val * factorial(val - 1);
}
'5 * 4 * 3 * 2 * 1'

console.log(factorial(5))
'5! = 1 *2 *3 *4 *5'
