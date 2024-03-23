op1 = 4
op2 = 2
op = 0

console.log("Operadores aritméticos")
console.log("Suma:  op1 + op2 ",           op1+op2)
console.log("Resta: op1 - op2 ",           op1-op2)
console.log("Multiplicación: op1 * op2 ",  op1*op2)
console.log("División: op1 / op2 ",        op1/op2)
console.log("Módulo: op1 % op2 ",          op1%op2)
console.log("Exponenciación: op1 ** op2 ", op1**op2)

console.log("Operadores de asignación")
console.log("Asignación op = op1 ",                     op=op1)
console.log("Suma y asignación:  op += op1 ",           op+=op1)
console.log("Resta y asignación: op -- op1 ",           op-=op1)
console.log("Multiplicación y asignación: op *= op1 ",  op*=op1)
console.log("División y asignación: op /= op1 ",        op/=op1)
console.log("Módulo y asignación: op %= op1 ",          op%=op1)
console.log("Exponenciación y asignación: op **= op1 ", op**=op1)

console.log("Operadores unarios")
console.log("Incremento: op1++ ",        op1++)
console.log("Decremento: op1-- ",        op1--)
console.log("Incremento previo: ++op1 ", ++op1)
console.log("Decremento previo: --op1 ", --op1)
console.log("Resta unaria: -op1",        -op1)

console.log("Operadores de comparación")
console.log("Igualdad: op1 == op2 ",        op1==op2)
console.log("Desigualdad: op1 != op2 ",     op1!=op2)
console.log("Mayor que: op1 > op2 ",        op1>op2)
console.log("Mayor/igual que: op1 >= op2 ", op1>=op2)
console.log("Menor que: op1 < op2 ",        op1<op2)
console.log("Menor/igual que: op1 <= op2 ", op1<=op2)
console.log("Identidad: op1 === op2 ",      op1===op2)
console.log("No idéntico: op1 !=== op2 ",   op1!==op2)


op1 = "hola"
op2 = "pepe"
console.log("Operador de strings")
console.log("Concatenación: op1 + op2 ", op1+op2)

op1 = true
op2 = false
console.log("Operadores lógicos")
console.log("And: op1 && op2 ",  op1&&op2)
console.log("Or: op1 || op2 ",   op1||op2)
console.log("Null: op1 ?? op2 ", op1??op2) // Nullish coalescing operator
console.log("Not: !op1 ",        !op1)
