/*
Evento: notificación de que alguna característica acaba de ocurrir, 
generalmente relacionada con el usuario que navega por la página.
Como desarrolladores, nuestro objetivo es preparar nuestro código 
para que cuando ocurra un determinado evento, se lleve a cabo una funcionalidad asociada. 
Formas de manejar eventos:
* Mediante atributos HTML.   Ej: <button onClick="..."></button>
* Mediante propiedades JS.   Ej: .onclick = function() { ... }
* Mediante addEventListener. Ej: .addEventListener("click", ...)  Aconsejable por ser potentes y flexibles.
*/

// Eventos mediante HTML
function doTask() {
    alert("Bom dia!!!")
}

// Eventos utilizando propiedades JS
button2 = document.querySelector("#idBtn2")
button2.onclick = function() {
  alert("Boa tarde!!!")
}

button3 = document.querySelector("#idBtn3")
button3.setAttribute("onclick", "doTask()")

// Eventos utilizando Listener
button4 = document.querySelector("#idBtn4")
button4.addEventListener("click", function() {
    alert("Boa Noite!!!")
});

// Eventos utilizando múltiples Listeners
button5 = document.querySelector("#idBtn5")
action = () => alert("Oi!!!");
toggle = () => button5.classList.toggle("red")
button5.addEventListener("click", action)    // Add listener
button5.addEventListener("click", toggle)    // Toggle red CSS
button5.removeEventListener("click", action) // Delete listener
