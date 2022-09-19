# VUE

* Desarrollado por Evan You (ex-trabajador de Google)
* Es un framework progresivo (agrega componentes a medida que la aplicación lo necesite) para construir interfaces de usuario.
* Usa Javascript.
* La librería central está enfocada solo en la capa de visualización, y es fácil de utilizar e integrar con otras librerías o proyectos existentes.
* Es perfectamente capaz de impulsar sofisticadas Single-Page Applications cuando se utiliza en combinación con herramientas modernas y librerías de apoyo.

## Instalación

* Crear un archivo html e incluir Vue con:

```javascript
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

* La página de instalación proporciona más opciones de instalación de Vue, como por ejemplo, vue-cli.

## Renderización declarativa

* En el núcleo de Vue.js se encuentra un sistema que permite procesar datos de forma declarativa al DOM mediante una sintaxis de plantilla sencilla:

```html
<!-- El id indica el punto de montaje de la app Vue en el DOM -->
<div id="app">
    <!-- Las dobles llaves permiten escribir JS y leer variables del objeto data -->
    <h1>{{ message }}</h1>
</div>

<!-- Trae a Vue desde un CDN (no lo instala) -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
    // Instancia un nuevo objeto Vue
    var app = new Vue({
        // Referencia al id del punto de montaje en HTML
        el: '#app',
        // El contenido del objeto data es accesible desde el DOM (HTML)
        data: {
            message: 'Hola Vue!'
        }
    })
</script> 
```

* Los datos y el DOM ahora están vinculados, y todo ahora es reactivo.
* Abra la consola de JavaScript de su navegador y cambie el valor de app.message a un valor diferente. Debería ver que el ejemplo se ha renderizado con el nuevo valor que acaba de ingresar.

## Directivas de Vue

* Son atributos que le indican a Vue.js realizar ciertos cambios a un elemento DOM
* Siempre empiezan con "v-"

| Directiva | Descripción |
| -- | -- |
| v-bind | vincula un atributo HTML a un valor que tenemos en nuestro modelo |
| v-show | muestra u oculta un elemento usando la propiedad display de CSS |
| v-for | se usa para iterar un array o un objeto |
| v-on | escucha un evento nativo o creado por nosotros |
| v-if | inyecta un elemento al DOM según la condición |
| v-else | trabaja en función a si la condición declarada en una directiva v-if se cumple o no |

### Ejemplo v-bind

* Además de la interpolación de texto, también se puede enlazar atributos de elementos como este:

```html
<div id="app-2">
  <span v-bind:title="message">
    Mueva el mouse sobre mí durante unos segundos para ver mi título enlazado dinámicamente.
  </span>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
    var app2 = new Vue({
        el: '#app-2',
        data: {
            message: 'Usted cargó esta página el ' + new Date().toLocaleString()
        }
    })
</script>
```

### Ejemplo v-if

* Condicional para alternar la presencia de un elemento:

```html
<div id="app-3">
  <span v-if="seen">Ahora    
     me ves
  </span>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
    var app3 = new Vue({
        el: '#app-3',
        data: {
            seen: true
        }
    })
</script>
```

### Ejemplo v-for

* Bucle para mostrar una lista de elementos:

```html
<div id="app-4">
  <ol>
    <li v-for="idio in idiomas">
      {{ idio.text }}
    </li>
  </ol>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
    var app4 = new Vue({
        el: '#app-4',
        data: {
            idiomas: [
                { text: 'Portugués' },
                { text: 'Inglés' },
                { text: 'Alemán' }
            ]
        }
    })
</script>
```

* En consola, ingrese: app4.idiomas.push ({text: 'Italiano'}).
* Debería ver un nuevo elemento agregado a la lista.

### Ejemplo v-on

* Para permitir que los usuarios interactúen con su aplicación, podemos usar la directiva v-on para adjuntar escuchas de eventos que invocan métodos en nuestras instancias de Vue:

```html
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Mensaje invertido</button>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
    var app5 = new Vue({
        el: '#app-5',
        data: {
            message: 'Hola Vue.js!'
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }
        }
    })
</script>
```

### Ejemplo v-model

* Hace que el enlace bidireccional entre los controles de los formularios y el estado de la aplicación sea muy sencilla.
* Actualiza el modelo si la vista cambia y viceversa.

```html
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message">
</div>

<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
    var app6 = new Vue({
        el: '#app-6',
        data: {
            message: 'Hola Vue!'
        }
    })
</script>
```

## Composición con componentes

* El sistema de componentes es otro concepto importante en Vue, porque es una abstracción que permite crear aplicaciones a gran escala compuestas de componentes pequeños, independientes y, a menudo, reutilizables.
* Casi cualquier tipo de interfaz de aplicación se puede abstraer en un árbol de componentes.
* En Vue, un componente es esencialmente una instancia de Vue con opciones predefinidas. Registrar un componente en Vue es sencillo:

```html
<ol>
  <!-- Crea una instancia del componente todo-item -->
  <todo-item></todo-item>
</ol>

<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
    // Define un nuevo componente llamado todo-item
    Vue.component('todo-item', {
        template: '<li>Esta es una tarea.</li>'
    })
</script>
```

* Es posible que se pueda pasar datos de un scope o contexto padre a uno secundario en los componentes hijos. Modifique la configuración del componente para que acepte una propiedad:

```html
<div id="app-7">
    <ol>
        <!-- Ahora proporcionamos a cada todo-item con el objeto todo que representa, para que su contenido pueda ser dinámico. También necesitamos proporcionar a cada componente con una "clave" -->
        <todo-item
            v-for="item in groceryList"
            v-bind:todo="item"
            v-bind:key="item.id">
        </todo-item>
    </ol>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
    Vue.component('todo-item', {
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'
    })
    var app7 = new Vue({
        el: '#app-7',
        data: {
            groceryList: [
                { id: 0, text: 'Vegetales' },
                { id: 1, text: 'Queso' },
                { id: 2, text: 'Cualquier otra cosa que se supone que los humanos coman' }
            ]
        }
    })
</script>
```

* Este es un ejemplo ficticio, pero se ha logrado separar la aplicación en dos unidades más pequeñas, y el componente hijo está razonablemente bien desacoplado del componente padre a través de la interfaz de propiedades.
* Ahora se puede mejorar aún más el componente \<todo-item> con un template y lógica más complejas sin afectar la aplicación principal.
* En una aplicación grande, es necesario dividir toda la aplicación en componentes para que el desarrollo sea manejable.
