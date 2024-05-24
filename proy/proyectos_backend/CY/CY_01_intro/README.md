# Cypress

## Qué es ?

* Es una herramienta plug and play para realizar tests automáticos.
* Diseñado para el testeo de pruebas E2E, Pruebas Unitarias y Pruebas de Integración con la posibilidad de realizar pruebas de API.
* Utiliza la librería Mocha para la generación de los test suite y Chai para generar de los asserts.

## Ventajas

* Interfaz gráfica
* Waits automáticos
* Mensajes claros de error
* Análisis en el browser
* Simplicidad en consultas http
* Page Object Model
* Test de componentes de Vue y React
* Gran cantidad de documentación y muy detallada
* Ejemplos de pruebas

## Flexibilidad en la estructura

* TestSuite: describe() o context()
* Test: it() o specify()
* .should(), .expect(), .assert()  

* describe y it vienen de Mocha (framework de prueba de JS)
* expect viene de Chai (libreria de aserciones)

```js
// Testsuite
describe("todos los tests", () => {
  // Test
  it("test 1", () => {

  })
  it("test 2", () => {

  })
})
```

## Ejemplo

1. mkdir tests
1. cd tests
1. npm init -y
1. npm i cypress
1. npx cypress open
1. clic en E2E Testing : crea estructura de carpeta
1. cd cypress
1. mkdir e2e
1. touch basico.cy.js  o  en windows: echo > basico.cy.js
1. gedit basico.cy.js

    ```js
    describe('Mi primer test', () => {
      it('No hace mucho', () => {
        expect(true).to.equal(true)
      })
    })
    ```

## Ejecución

### Para ejecutar

1. npx cypress open
2. Clic en E2E Testing
3. Clic en Start E2E Testing in [Chrome | Electron | Firefox]
4. Clic en el archivo basico.cy.js

### Para ejecutar por línea de comando

npx cypress run "cypress/e2e/basico.cy.js"

## SUT

* Lenguaje natural:

1. Visitar: <https://example.cypress.io>
1. Encontrar el elemento con contenido:type
1. Hacer clic al elemento
1. Obtener la URL
1. Verificar que incluye: /commands/actions
1. Obtener el campo de texto con el valor action-email del atibuto data-testid
1. Escribir <fake@email.com> en el campo de texto
1. Verificar que el campo de texto refleja el nuevo valor

* En sintaxis Gherkin (BDD):

```gherkin
GIVEN un usuario visita https://example.cypress.io
WHEN hace clic en el link type
AND escribe fake@email.com en el campo de texto [data-testid="action-email"]
THEN la URL deberia incluir /commands/actions
AND el campo de texto [data-testid="action-email"] tiene como valor "fake@email.com"
```

* Cypress:

```js
describe('Mi primer test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email').type('fake@email.com')
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})
```
