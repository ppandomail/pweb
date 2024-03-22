const mystring = require("./modules/my_module");
const todo = require("./modules/modules_masive");
const { myNumber, myArray } = require("./modules/modules_masive");

const { add, subtract } = require("./modules/math");

console.log(mystring);
console.log(todo);
console.log(myNumber);
console.log(myArray);
console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(add(30, 40));
