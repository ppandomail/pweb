$(function () {
  function mostrarHora() {
    var fecha = new Date(), // nuevo objeto Fecha
      hora =
        fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
    $("#hora").text(hora);
  }
  setInterval(mostrarHora, 1000); // la función "mostrarHora" se ejecuta cada segundo
});
