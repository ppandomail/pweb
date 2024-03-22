/*

REPL: Read Eval Print Loop 

. Leer: lee la entrada del usuario, la analiza en una estructura de datos de JS y la almacena en la memoria.
. Eval: toma y evalúa la estructura de datos
. Imprimir: imprime el resultado
. Bucle: repite el comando anterior hasta que el usuario presiona ctrl-c dos veces

. Es muy útil para experimentar con códigos Node.js y para depurar códigos JS

En shell:

node
Welcome to Node.js v21.7.1.
Type ".help" for more information.

> console.log('Olá mundo')

> 5 + 5

> Math.random() * 10

> total = 10 + 20 + 30

> total

> let cumprimento = 'oi'

> cumprimento

> let x = 0

> do {
... x++
... console.log(x)
... } while (x < 10)

>

Con guión bajo (_) se obtiene el último resultado

> 2 + 2
> console.log(_)

Comandos:
> .help            lista todos los comandos
> .break           sale de la expresión multilínea
> .clear           sale de la expresión multilínea
> .editor          entra en modo editor
> .save filename   guarda la sesión actual de Node REPL en un archivo
> .load filename   carga el contenido del archivo en la sesión actual de Node REPL
> .exit            sale de REPL

*/
