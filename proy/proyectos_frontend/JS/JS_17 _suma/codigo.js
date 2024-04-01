function sumar() {
  campoN1 = document.getElementById("n1");
  n1 = Number.parseFloat(campoN1.value);
  campoN2 = document.getElementById("n2");
  n2 = Number.parseFloat(campoN2.value);

  r = n1 + n2;

  campoRtado = document.getElementById("rtado");
  campoRtado.value = r;
}
