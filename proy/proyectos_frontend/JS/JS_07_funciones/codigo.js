// Creación de una función por declaración: función "saludar"
function saludar() {
    // Cuerpo o contenido de la función
    console.log("Hola, soy una función")
}

// Ejecución de la función
saludar()

function tablaMultiplicar(tabla, hasta=10) {
    for(i=1; i<=hasta; i++)
        console.log(tabla, "x", i, "=", tabla * i)
}

tablaMultiplicar(2)
tablaMultiplicar(5, 7)

function sumarPorDeclaracion(op1, op2) {
    return op1 + op2
}

console.log(sumarPorDeclaracion(2, 4))
console.log(sumarPorDeclaracion("pepe", 2))
console.log(sumarPorDeclaracion(2, "pepe"))
console.log(sumarPorDeclaracion("pepe", "pepe"))
console.log(sumarPorDeclaracion(true, "pepe"))
console.log(sumarPorDeclaracion(true, true))
console.log(sumarPorDeclaracion(true, 4))

// Creación de una función por expresión
// El nombre de la función pasa a ser el nombre de la variable, 
// mientras que el nombre de la función desaparece y se omite, 
// dando paso a lo que se llaman las funciones anónimas (o funciones lambda).
const sumarPorExpresion = function (op1, op2) {
    return op1 + op2
}

console.log(sumarPorExpresion, typeof(sumarPorExpresion))
console.log(sumarPorExpresion(2, 4))

/*
Callback (llamada hacia atrás): es pasar una función B por parámetro a una función A, 
de modo que la función A puede ejecutar esa función B de forma genérica desde su código, 
y nosotros podemos definirlas desde fuera de dicha función
*/

const fB = function () {
    console.log("Función B ejecutada.");
};
  
const fA = function (callback) {
    callback();
};

fA(fB);

/*
Clausura: una función que "encierra" variables en su propio ámbito y 
que continúan existiendo aún habiendo terminado la función
*/

const incr = (function () {
    let num = 0
    return function () {
      num++
      return num
    }
})()
  
typeof incr // 'function'
incr() // 1
incr() // 2
incr() // 3

/*
Arrow functions: son una forma corta de escribir funciones:
* Si el cuerpo de la función sólo tiene una línea, podemos omitir las llaves ({}).
* Además, en ese caso, automáticamente se hace un return de esa única línea, por lo que podemos omitir también el return.
* En el caso de que la función no tenga parámetros, se indica: () =>.
* En el caso de que la función tenga un solo parámetro, se puede indicar simplemente el nombre del mismo: e =>.
* En el caso de que la función tenga 2 ó más parámetros, se indican entre paréntesis: (a, b) =>.
* Si queremos devolver un objeto, que coincide con la sintaxis de las llaves, se puede englobar con paréntesis: ({name: 'Manz'}).
*/

const sumarConNotacionFlecha = (op1, op2) => {
    return op1 + op2
}

console.log(sumarConNotacionFlecha(2, 4))

const sumarConNotacionFlecha2 = (op1, op2) => op1 + op2

console.log(sumarConNotacionFlecha2(2, 4))