const fs = require('fs');
const a = fs.readFileSync('./src/node-test.js', 'utf-8')
const user = {
    name: 'name',
    salary: 1000
}

console.log(user);
console.log(a);