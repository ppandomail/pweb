/*

CommonJS Modules

. Son archivos que podemos agregar a un archivo principal y 
crear una aplicación grande

*/

const mystring = require("./modules/my_module");

// se importa como un objeto
const todo = require("./modules/modules_masive");

// se importa una selección dentro del módulo
const { myNumber, myArray } = require("./modules/modules_masive");

// se importan funciones
const { add, subtract } = require("./modules/math");

console.log(mystring);
console.log(todo);
console.log(myNumber);
console.log(myArray);
console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(add(30, 40));
