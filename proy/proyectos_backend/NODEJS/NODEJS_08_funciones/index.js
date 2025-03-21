function mostrarInfoUsuario(userName, userAge) {
  // return `The username is ${userName}, the user is ${userAge} years old`
  // return "The username is " + userName + ", the user is " + userAge + " years old";
  return "El username es ".concat(userName).concat(", el usuario tiene ").concat(userAge).concat(" años")
}

console.log(mostrarInfoUsuario('Joe', 30))
console.log(mostrarInfoUsuario('Maria', 50))

function suma(op1, op2) {
  return op1 + op2;
}

console.log(suma(3, 4));
console.log(suma(4, 6));