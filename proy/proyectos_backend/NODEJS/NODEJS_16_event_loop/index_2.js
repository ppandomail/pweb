console.log("Primero");
setTimeout(() => {
  console.log("Segundo");
}, 3000);
console.log("Tercero");

/*

Primero
Tercero
Segundo

Nodejs coloca la función que muestra "Segundo" como una tarea pendiente y 
sigue ejecutando la siguiente línea
Por más que el tiempo sea 0, lo manda a ejecutar a otro lado

*/
