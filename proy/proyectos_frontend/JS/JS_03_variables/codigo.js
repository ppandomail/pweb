/*
Variables: Es el nombre genérico que se le da a pequeños espacios de memoria 
donde guardas una información determinada
JS es casesensitive (importan mayúsculas y minúsculas en los nombres de las variables)
El tipo de dato es la naturaleza del contenido.
JS es un lenguaje dinámico, ya que automáticamente detecta de que tipo de dato se trata en cada caso, 
dependiendo del contenido que le hemos asignado a la variable.

Convenciones de nombres para las variables ("camel case"). Ejemplos:
. contador
. acumuladorGranos
. dispositivoElectronicoMecanico 

Convenciones de nombres para las constantes ("snake case"). Ejemplos:
. PI = 3.14
. SIGLAS_DE_LA_UNIVERSIDAD = "UNO"
*/

var n = 5             // nombre: n, valor: 5, tipo de dato: number
var s = "Hola"        // nombre: s, valor: Hola, tipo de dato: string
var s2 = 'Hola'
var b = true          // nombre: b, valor: true, tipo de dato: boolean
var u                 // nombre: u, valor: undefined, tipo de dato: undefined
var f = function(){}  // nombre: f, valor: f(){}, tipo de dato: function
var o = {}            // nombre: o, valor: {}, tipo de dato: object

console.log(n, typeof(n))
console.log(s, typeof(s))
console.log(b, typeof(b))
console.log(u, typeof(u))
console.log(f, typeof(f))
console.log(o, typeof(o))


// Método 1: Declaración de variables de forma independiente
var a = 3
var c = 1
var d = 2

// Método 2: Declaración masiva de variables con el mismo var
var a = 3, c = 1, d = 2;

// Constante: son variables inicializadas a un valor específico y que no pueden redeclararse.
const PI = 3.14
