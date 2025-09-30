'use strict';

// console.log(varX);
// // console.log(letX);
// // console.log(constX);

// var varX = 1;
// let letX = 2;
// const constX = 3;

// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// let age = 30;

// let oldAge = age;
// age = 31;

// console.log(`age`, age);
// console.log(`oldAge`, oldAge);

// const me = { name: `Shin`, age: 21 };

// const friend = me;

// friend.name = `John`;
// friend.age = 25;

// console.log(`me:`, me);
// console.log(`friend:`, friend);

// const original = {
//   name: 'Alice',
//   age: 28,
//   hobbies: ['reading', 'coding'],
// };

// const shallowCopy = { ...original };

// shallowCopy.name = 'Bob';

// console.log('original name:', original.name); // Alice
// console.log('copy name:', shallowCopy.name); // Bob

// shallowCopy.hobbies.push('gaming');

// console.log(original.hobbies);
// console.log(shallowCopy.hobbies);

const deepOriginal = {
  name: 'Charlie',
  age: 32,

  address: { city: `Paris`, Country: `France` },

  hobbies: ['travel', 'photography'],
};

const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'London';
deepCopy.hobbies.push('cooking');
deepCopy.name = 'Lex';

console.log(deepOriginal);
console.log(deepCopy);
