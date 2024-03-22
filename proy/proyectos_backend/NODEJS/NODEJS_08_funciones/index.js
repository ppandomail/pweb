function showUserInfo(userName, userAge) {
  // return `The username is ${userName}, the user is ${userAge} years old`
  // return "The username is " + userName + ", the user is " + userAge + " years old";
  return "The username is ".concat(userName).concat(", the user is ").concat(userAge).concat(" years old")
}

console.log(showUserInfo('Joe', 30))
console.log(showUserInfo('Maria', 50))

function suma(op1, op2) {
  return op1 + op2;
}

console.log(suma(3, 4));
console.log(suma(4, 6));