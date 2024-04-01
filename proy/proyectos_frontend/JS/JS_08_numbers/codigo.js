numero = 4;
decimal = 15.8;

// ¿Número finito?
Number.isFinite(0); // true
Number.isFinite(42); // true
Number.isFinite(551.3); // true
Number.isFinite(Infinity); // false, es infinito

// ¿Número entero?
Number.isInteger(5); // true
Number.isInteger(4.6); // false, es decimal

// Notación exponencial
(1.25).toExponential(0); // "1e+0"
(1.25).toExponential(1); // "1.3e+0"
(1.25).toExponential(2); // "1.25e+0"
(1.25).toExponential(3); // "1.250e+0"

// Notación punto fijo
(1.25).toFixed(0); // "1"
(1.25).toFixed(1); // "1.3"
(1.25).toFixed(2); // "1.25"
(1.25).toFixed(3); // "1.250"

// Cambiando precisión
(523.75).toPrecision(1); // "5e+2"
(523.75).toPrecision(2); // "5.2e+2"
(523.75).toPrecision(3); // "524"
(523.75).toPrecision(4); // "523.8"
(523.75).toPrecision(5); // "523.75"

// Convertir un string en number
Number.parseInt("42"); // 42
Number.parseInt("42€"); // 42 (descarta todo desde un carácter no numérico)
Number.parseInt("Núm. 42"); // NaN (empieza a descartar en Núm, descarta también 42)
Number.parseInt("A"); // NaN (No se puede representar como un número)
Number.parseInt(""); // NaN (No se puede representar como un número)
Number.parseInt("42.5"); // 42 (descarta los decimales)
Number.parseInt("88.99€"); // 88 (descarta decimales y resto de caracteres)
Number.parseInt("Núm. 33.5"); // NaN (empieza a descartar en Núm, descarta todo)

Number.parseFloat("42.5"); // 42.5 (Conserva decimales)
Number.parseFloat("42"); // 42 (El número es entero, convierte a entero)
Number.parseFloat("88.99€"); // 88.99 (Conserva decimales)
Number.parseFloat("42€"); // 42 (El número es entero, convierte a entero)
Number.parseFloat("Núm. 33.5"); // NaN (empieza a descartar en Núm, descarta todo)

// Math
Math.abs(-5); // 5
Math.max(1, 40, 5, 15); // 40
Math.min(5, 10, -2, 0); // -2
Math.pow(2, 10); // 1024 (Equivale a 2**10)
Math.sqrt(2); // 1.4142135623730951 (Equivale a Math.SQRT2)
Math.log(2); // 0.6931471805599453

// Obtenemos un número al azar entre [0, 1) con 16 decimales
let x = Math.random();
// Multiplicamos dicho número por el valor máximo que buscamos (5)
x = x * 5;
// Redondeamos inferiormente, quedándonos sólo con la parte entera
x = Math.floor(x);

// Redondeo natural, el más cercano
Math.round(3.75); // 4
Math.round(3.25); // 3
Math.round(3.5); // 4

// Redondeo superior (el más alto)
Math.ceil(3.75); // 4
Math.ceil(3.25); // 4

// Redondeo inferior (el más bajo)
Math.floor(3.75); // 3
Math.floor(3.25); // 3
