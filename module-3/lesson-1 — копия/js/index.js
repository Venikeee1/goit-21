'use strict';
// const user = {};

'use strict';
const user = {};

const user = {
  name: 'One Punch Man',
  mood: '🥳',
}

// вычесляемое свойство
user.email = 'goit@gmail.com';
user['email'] = 'goit@gmail.com';

console.log(user);

const name = 'name'
const hotel = {
  [name]: 'Super Hotel'
}


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

console.log(bar);

// доступ как через точку, так и через квадратные скопки
console.log(bar.name);
console.log(bar['name'])

// Функция создания персонала
const createTeamMember = function(name, position, sallary) {
  return {
    name: name,
    position: position,
    sallary: sallary
  }

  // return { name, position, sallary } // упрощенный способ записи объекта
}

// Создаем работников
const waiter = createTeamMember('Peter Parker', 'waiter', '500$');
const barman = createTeamMember('Tonny Stark', 'barman', '1500$');
const security = createTeamMember('John Cena', 'security', '800$');

// Добаляем работников
bar.addTeamMember(waiter)
bar.addTeamMember(barman)
bar.addTeamMember(security)
console.log(bar);

// проходим по все работникам

