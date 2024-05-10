# VUE_01_intro

## VUE 3

* Es un framework de JS para construir GUI
* Es un framework (libreria, conjunto de herramientas) de intefaces (desarrollo frontend) reactivas (al ejecutar nuestras construcciones, estas van a ir actualizando la información en el navegador sin necesidad que estemos actualizando peticiones del refresco del navegador)
* Se basa en HTML, CSS y JS estándar
* Proporciona un modelo de programación declarativo y basado en componentes que lo ayuda a desarrollar GUI de manera eficiente
* Arquitectura: patrón MVVM (Modelo-Vista-Vista-Modelo)
* Comenzar con API composition

## Vite

* Es un empaquetador que permite reemplazar a lo que era webpack
* Traduce (transpila) archivos .sass, .vue a archivos .html, .css, .js que el browser entiende

## Instalación con Vite

* Es necesario tener instalado Node.js (entorno de ejecución de JS).
* Ir al Sitio para descargarlo. [Sitio Oficial de Node.js](https://nodejs.org/en)
* Verificar que node esté instalado:

```sh
node --version
```

* Agregar al Navegador de Chrome las Vue.js devtools, esto va a permitir debugear aplicaciones Vue.js

* Agregar al VSC el plugins: Vue 3 Snippets

```sh
cd VUE
npm init vue@latest     # crea estructura del proyecto. Nombre del proyecto y el resto de las preguntas "No"
cd VUE_01_intro
npm i                   # instala dependencias declaradas en el package.json: vue  y devDependencies: @vitejs/plugin-vue y vite 
npm run dev             # luego ir a localhost:5173
```

* En VSC instalar el plugin Vue - Official para formatear el código de Vue

## Estructura del proyecto

* Archivo vite.config.js : para configurar plugins
* Archivo index.html : toda la aplicación se va a renderizar en \<div id="app"></div>
* Carpeta src : es donde se trabaja
  * Archivo main.js : raíz del proyecto.
  * Archivo App.vue
  * Carpeta assets : para archivos estáticos. Ejemplo: css, svg, etc.
  * Carpeta components

## Empezar a trabajar

1. Borrar todo el contenido del archivo App.vue
2. Editarlo

    ```vue
    <template>
      <h1>Hola Vue</h1>
    </template>
    ```

3. Ir a localhost:puerto

## SFC (single file component)

* Es una técnica que permite separar estructura (HTML), lógica (JS) y estilos (CSS)
