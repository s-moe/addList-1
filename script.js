/*

Challenge: addList

Difficulty: Basic

Prompt:

- Write a function called addList that accepts any quantity of numbers as arguments, 
  adds them together and returns the resulting sum.
- Assume all parameters will be numbers.
- If called with no arguments, return 0 (zero).

Examples:

addList(1) //=> 1
addList(1,50,1.23) //=> 52.23
addList(7,-12) //=> -5

*/

// Your solution for 01-addList here:

// const addList = (...args) => {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     if (args.length === 0) {
//     return 0 }
//     else {
//       sum += args[i];
//     }
//   }
//   return sum
// }
// console.log(addList())

const addList = (...args) => {
 return args.reduce((acc, item) => {
   return item + acc
 }, 0)
}
console.log(addList(1, 2, 3))

 