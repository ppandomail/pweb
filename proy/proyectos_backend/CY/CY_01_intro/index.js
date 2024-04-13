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
touch index.js  o  en windows: echo > index.js
gedit index.js

*/

// Test suite
describe("My First Test", () => {
  // Test
  it("Gets, types and asserts", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should("include", "/commands/actions");

    // Get an input, type into it
    cy.get(".action-email").type("fake@email.com");

    //  Verify that the value has been updated
    cy.get(".action-email").should("have.value", "fake@email.com");
  });
});

// Para ejecutar: npx cypress open
