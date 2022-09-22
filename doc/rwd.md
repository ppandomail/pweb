# Diseño Web Responsivo

* RWD: Responsive Web Design
* Es una filosofía de diseño y desarrollo cuyo objetivo es adaptar la apariencia de las páginas web al dispositivo que se esté utilizando para visitarlas (tablets, smartphones, ebook, notebooks, PCs, etc.)
* Dentro de cada tipo, cada dispositivo tiene sus características concretas: tamaño de pantalla, resolución, potencia de CPU, etc.
* Esta tecnología pretende que con un único diseño web, todo se vea correctamente en cualquier dispositivo.

## Media queries

* Permite resolver diferentes estilos de reglas CSS según el tipo de pantalla que carga el documento HTML.
* Los ajustes estéticos son establecidos condicionalmente a través de la regla @media.
* De esta manera, la página se mostrará con características, estilos y visualización de elementos, de acuerdo al dispositivo que la invocó.

```html
<link rel="stylesheet" type="text/css" href="" media="screen" />
```

* Sintaxis básica

```css
@media not | only mediatype and | not | only media-feature {
  ...
  .my_code {
    ...
  } 
  ...
}
```

* Ejemplo:

```css
@media screen and (min-width: 480px) {
  body {
    background: gray;
  }
}

@media screen and (min-width: 720px) {
  body {
    background: red;
  }
}
```
