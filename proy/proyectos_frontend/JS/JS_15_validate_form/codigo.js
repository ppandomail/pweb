function comprobarUsuario(nombreUsuario) {
  return nombreUsuario != "";
}

function comprobarContraseña(clave, claveRepetida) {
  if (clave != "" && claveRepetida != "") return clave == claveRepetida;
  return false;
}

function comprobarEmail(email) {
  var patron = new RegExp("^\\w+@\\w+\\.\\w{2,3}$");
  if (email != "") return patron.test(email);
  return false;
}

function comprobarIdioma(campoIdioma) {
  return campoIdioma.selectedIndex != -1;
}

function comprobarPublicidad(aceptaPublicidad) {
  if (!aceptaPublicidad)
    return confirm(
      "Nuestra publicidad le mantendrá informado sobre las ofertas y novedades. ¿Desea recibirla en su mail?"
    );
  return true;
}

function validarRegistro() {
  with (document.formRegistro) {
    if (!comprobarUsuario(usuario.value)) {
      alert("El nombre de usuario está vacío.");
      usuario.focus();
    } else if (!comprobarContraseña(clave.value, claveRepe.value)) {
      alert("La contraseña está vacía o no coinciden.");
      clave.value = "";
      claveRepe.value = "";
      clave.focus();
    } else if (!comprobarEmail(email.value)) {
      alert("El email está vacío o no es válido.");
      email.select();
      email.focus();
    } else if (!comprobarIdioma(idioma)) {
      alert("No hay idioma seleccionado.");
      idioma.focus();
    } else publicidad.checked = comprobarPublicidad(publicidad.checked);
  }
}
