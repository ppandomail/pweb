/*
Array: es una colección o agrupación de elementos en una misma variable, 
cada uno de ellos ubicado por la posición que ocupa en el array.
*/

letters = ["a", "b", "c"]  // Array con 3 elementos
letters = []               // Array vacío (0 elementos)
letters = ["a", 5, true]   // Array mixto (String, Number, Boolean)

// Acceso a elementos del array
letters.length   // 3
letters[0]       // 'a'
letters[2]       // 'c'
letters[5]       // undefined
letters.at(0)    // 'a'
letters.at(-1)   // 'c'

// Modificar elementos del array

letters[1] = "Z" // Devuelve "Z" y modifica letters a ["a", "Z", "c"]
letters[3] = "D" // Devuelve "D" y modifica letters a ["a", "Z", "c", "D"]
letters[5] = "A" // Devuelve "A" y modifica letters a ["a", "Z", "c", "D", undefined, "A"]

// Agregar o eliminar elementos
elements = ["a", "b", "c"]

elements.push("d")    // Devuelve 4.   Ahora elements = ['a', 'b', 'c', 'd']
elements.pop()        // Devuelve 'd'. Ahora elements = ['a', 'b', 'c']

elements.unshift("Z") // Devuelve 4.   Ahora elements = ['Z', 'a', 'b', 'c']
elements.shift()      // Devuelve 'Z'. Ahora elements = ['a', 'b', 'c']

// Une elementos del array por el separador indicado
letters.join("->")       // Devuelve 'a->b->c'
letters.join(".")        // Devuelve 'a.b.c'

// Separa elementos del string por el separador indicado
"a.b.c".split(".")       // Devuelve ['a', 'b', 'c']
"5-4-3-2-1".split("-")   // Devuelve ['5', '4', '3', '2', '1']

// Buscar elementos
numbers = [5, 10, 15, 20, 25, 20, 15, 10, 5]
numbers.includes(3)     // false
numbers.includes(15)    // true

numbers.indexOf(5)      // 0
numbers.indexOf(15)     // 2
numbers.indexOf(25)     // 4
numbers.indexOf(99)     // -1

numbers.lastIndexOf(5)  // 8
numbers.lastIndexOf(15) // 6
numbers.lastIndexOf(25) // 4
numbers.lastIndexOf(99) // -1

// Array functions
letters = ["a", "b", "c", "d"]
letters.forEach(function (e) { console.log("Elemento: ", e) })
letters.forEach((e) => console.log("Elemento: ", e))

letters.every((e) => e.length === 1) // true

letters = ["a", "bb", "c", "d"]
letters.some((e) => e.length == 2)   // true

names = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
names.map((e) => e.length)                // Devuelve [3, 5, 5, 9, 9]
names.filter((e) => e.startsWith("P"))    // Devuelve ['Pablo', 'Pedro', 'Pancracio']
names.find((e) => e.length == 5)          // 'Pablo'
names.findIndex((e) => e.length == 5)     // 1
names.findLast((e) => e.length == 5)      // 'Pedro'
names.findLastIndex((e) => e.length == 5) // 2


