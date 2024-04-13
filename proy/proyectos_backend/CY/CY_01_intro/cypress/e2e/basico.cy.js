/*

Cypress:

. Es una herramienta plug and play para realizar test automatizados.
. Diseñado para el testeo de pruebas end-to-end, pruebas unitarias y pruebas de integración. También pruebas de API.
. Utiliza la librería Mocha para la generación de los test suite y Chai para generar los asserts.
. Crear un proyecto nodejs e instalar cypress:

mkdir tests
cd tests
npm init -y
npm i cypress
npx cypress open
clic en E2E Testing : crea estructura de carpeta

Dentro de la carpeta cypress:
mkdir e2e
touch basico.cy.js  o  en windows: echo > basico.cy.js
gedit basico.cy.js

*/

// Test suite
describe("Minha primeira prova", () => {
  // Test
  it("Gets, types e asserts", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    // Se verifica que la nueva URL incluya '/commands/actions'
    cy.url().should("include", "/commands/actions");

    // Obtiene un input y escribe en el
    cy.get(".action-email").type("pepe@email.com");

    // Verifica que el valor ha sido modificado
    cy.get(".action-email").should("have.value", "pepe@email.com");
  });
});

/*
Para ejecutar: 
1. npx cypress open
2. Clic en E2E Testing
3. Clic en Start E2E Testing in [Chrome | Electron | Firefox]
4. Clic en el archivo basico.cy.js

Para ejecutar por línea de comando
npx cypress run "cypress/e2e/basico.cy.js"
*/
