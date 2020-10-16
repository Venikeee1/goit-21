// unit tests

const testTool = {
  message: '',
  is(firstVal, secondVal) {
    if(firstVal !== secondVal) throw new Error(this.message)
  }
}

// const test = (comment, cb) => {
//   testTool.message = comment;
//   cb(testTool)
// }

// const sum = (a,b) => a + b;

// test('Should sum two values', t => {
//   t.is(sum(1,3), 4)
// })

// test('Should throw an error', t => {
//   t.is(sum(1,3), 5)
// })

// O(1)

const foo = [1, 3, 4, 5];
// O(n)
const item = foo.find(item => item === 4);
console.log(item);

// [50n]
const hugeArray = new Array(50000);
// const item = hugeArray.find(item => item.id === id);
// O(n) - если обычный фаинд использовать
// O(log n) - бинарный поиск

// O(n**2)

const sum = (a,b) => {};

test('Should sum two values', t => {
  t.is(sum(1,3), 4)
})