var p1 = new RegExp("hola+"); // hola, holaa, holaaa, ...
var p2 = new RegExp("^A"); // lineas que empiezan con A
var p3 = new RegExp("\\d\\d"); // número de 2 dígitos
var p4 = new RegExp("\\d{2}-\\d{2}-\\d{4}"); // formato fecha dd-dd-dddd

var texto = "Este mes aprendo JavaScript";
new RegExp("/va/").test(texto); // true
new RegExp("/lol/").test(texto); // false
new RegExp("/apr/").exec(texto); // ["apr"]
