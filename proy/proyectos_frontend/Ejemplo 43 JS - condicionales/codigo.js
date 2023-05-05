// Condicional if
var nota = 7
console.log("He realizado mi examen")
if (nota >= 4)
  console.log("¡Estoy aprobado!")

// Condicional if/else
var nota = 7
console.log("He realizado mi examen")
if (nota < 4)
  calificacion = "reprobado"
else
  calificacion = "aprobado"
console.log("¡Estoy ", calificacion, "!")

// Operador ternario: (condición ? verdadero : falso)
var calificacion = nota < 4 ? "reprobado" : "aprobado"
console.log("¡Estoy ", calificacion, "!")

// Condicional if múltiple
var nota = 7
console.log("He realizado mi examen")
if (nota < 5)
  calificacion = "Insuficiente"
else if (nota < 6)
  calificación = "Suficiente"
else if (nota < 8)
  calificacion = "Bien"
else if (nota <= 9)
  calificacion = "Notable"
else
  calificacion = "Sobresaliente"
console.log("He obtenido un", calificacion)

// Condicional switch
var nota = 7
console.log("He realizado mi examen")
switch (nota) {
  case 10:
    calificacion = "Sobresaliente"
    break
  case 9:
  case 8:
    calificacion = "Notable"
    break
  case 7:
  case 6:
    calificacion = "Bien"
    break
  case 5:
    calificacion = "Suficiente"
    break
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    calificacion = "Insuficiente"
    break
  default:
    calificacion = "Nota errónea"
    break
}
console.log("He obtenido un", calificacion)