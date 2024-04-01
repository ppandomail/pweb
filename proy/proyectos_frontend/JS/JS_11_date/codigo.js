/*

Date:

. Almacena la fecha como un número que representa los milisegundos 
que han pasado desde el 1/1/1970 a las 00:00:00.000

*/

var f0 = new Date(); // fecha y hora actual
var f1 = new Date(96400000); // 2/1/1970 00:00:00
var f2 = new Date(2008, 7, 15); // 15/08/2008
var f3 = new Date(2008, 7, 15, 13, 25, 34); // 15/08/2008 13:25:34
var f4 = new Date("2008-08-15"); // 15/08/2008

f0.getTime();
f0.getMinutes();
f0.getDate();
f0.getDay();
f0.getFullYear();

fo.toDateString();
f0.toLocaleDateString();
f0.toTimeString();
f0.loLocaleString();
f0.toString();
