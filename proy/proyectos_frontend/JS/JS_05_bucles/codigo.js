/*

Bucle o ciclo de repetición:

. Es una estructura de control que permite ejecutar cierto código mientras se cumpla una condición
. A diferencia del condicional, una vez ejecutado el código, si la condición se sigue cumpliendo el código se vuelve a ejecutar

*/

// Bucle while
i = 0;
console.log("Inicio del while");
while (i < 5) {
  console.log("Valor de i: ", i);
  i = i + 1;
}
console.log("Fin del while");

// Bucle for
console.log("Inicio del for");
for (i = 0; i < 5; i++) {
  console.log("Valor de i: ", i);
}
console.log("Fin del for");

// Otros ejemplos de for
var arr = ["ub", "uade", "uno"];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (var dato of arr) {
  console.log(dato);
}
