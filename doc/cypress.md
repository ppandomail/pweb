# Cypress

## Concepto

* Es una herramienta plug and play para realizar test automatizados.
* Diseñado para el testeo de pruebas End-to-End, Pruebas Unitarias y Pruebas de Integración con la posibilidad de realizar pruebas de API.
* Utiliza la librería Mocha para la generación de los test suite y Chai para generar los asserts.

## Diferencias con Selenium

| | **Cy** | **Se** |
| -- | --  | -- |
| **Arquitectura** | Los test se ejecutan en el browser, en el mismo proceso que la aplicación a testear | Los test se ejecutan en un webdriver que a su vez controla el browser que posee la aplicación |
| **1er release** | 2015 | 2004 |
| **Lenguaje** | JS, TS | JS, Java, Python, C#, Ruby, Kotlin, etc. |
| **Instalación** | Simple. Viene con Mocha, Chai, entre otras | Complejo. Elección de frameworks |
| **Waits** | Automáticos | Manuales |

## Ventajas

* Poseer una GUI para ejecutar los test.
* Mensajes de error muy claros
* Utilizando el runner, la UI, al finalizar la ejecución del test, podremos revivir paso a paso el test para analizar los pasos realizados, ver donde fallo o incluso seleccionar el proximo elemento del DOM necesario para avanzar en la construccion de nuestro test.
* Cypress posee Wait automaticos, por default los comandos poseen un timeout de 4 segundos, configurable, donde cypress estara constantemente reintentando ejecucion de dicho comando.
* En las consultas HTTP, Cypress automaticamente envia y almacena las Cookies en el browser.
* Uso de POM (Page Object Model)
* Las pruebas se codean en JavaScript y TypeScript, lenguajes que muchos de los desarrolladores front-end conocen haciendo que la curva de aprendizaje de esta herramienta para ellos sea mas facil.

## Instalación

```sh
npm install cypress --save-dev
```

1. Crear una carpeta donde desee realizar las pruebas con Cypress
1. Generar el archivo package.json con el siguiente comando para almacenar las dependencias y las configuraciones del projecto:

  ```sh
  npm init -y 
  ```

1. Instalación de Cypress

  ```sh
  npm i cypress
  ```

1. Abrir Cypress con el comando:

  ```sh
  npx cypress open
  ```

1. Empezar a realizar sus pruebas.

## Flexibilidad en la estructura

* Uso de Mocha, que posee la posiblidad de declarar los test-suite utilizando tanto los métodos describe() o context() que son sinónimos entre si y anidables. Para los test propiamente dichos, se puede utilizar it() o specify() indistintamente ya que los mismos son sinónimos.
* Esto nos permite poder tener test-suite dentro de otros test-suite y configurar las ejecuciones de los test utilizando los diferentes hooks de ejecución.

```js
describe('Nombre del test-suite', () => {
    it('Nombre del test', () => {
        /* Test propiamente dicho */
    })
})

```

## Ejemplo

```js
describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it
    cy.get('.action-email').type('fake@email.com')

    //  Verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})
```

## Orden de ejecución

* Mocha provee 4 hooks de ejecución.
  * Dos previos a la ejecución de los test, siendo el método **before()** para todo el test-suit y **beforeEach()** previo a cada test.
  * Dos posterior a la ejecución de los test, siendo **AfterEach()** ejecutado posterior a cada test y **After()** como último método a ser ejecutado previo al cierre del programa.

```js
before(() => {
  // runs once before all tests
})

beforeEach(() => {
  // runs before every test block
})

afterEach(() => {
  // runs after each test block
})

after(() => {
  // runs once all tests are done
})
```
