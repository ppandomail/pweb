# CSS3

* CSS: Cascading Style Sheets (Hojas de Estilo en Cascada)
* Nació en 1996.
* Lenguaje de texto orientado al diseño gráfico.
* Es el código que se ocupa de dar vida gráfica al contenido por el cual navegamos.
* Con una hoja de estilo CSS vinculada al documento HTML, se cambia significativamente la forma de visualizar el contenido web. 

## Incorporación de CSS en un documento HTML

* Incorporación en línea:

```html
<div style="margin:10px;"></div>
```

* Incorporación interna:

```html
<!DOCTYPE html>
<html lang="es">
<head>  
  <style type="text/css">h1 {color:#000;} </style>
</head>
<body>
  <h1>Hola</h1>
</body>
</html>
```

* Incorporación externa.

```html
<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
```

```css
body {
  background-color: chocolate;
}

h1 {
  background-color: black;
  font-family: Verdana, Arial;
  font-size: 3;
  color: yellow;
}
```

## Sintaxis

* selector {propiedad : valor}
  * selector: es un descriptor que le permite dirigirse a elementos específicos de la página.
  * propiedad: atributos para los que se pueden especificar valores

* Ejemplo:

```css
h1 {
  color: red;
  background: yellow;
}
```

