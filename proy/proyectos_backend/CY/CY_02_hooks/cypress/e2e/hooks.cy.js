/*

Mocha provee 4 hooks de ejecución:

. Previo a la ejecución de todo el test suite : before(() => {})
. Previo a la ejecución de cada test: beforeEach(() => {})
. Posterior a la ejecución de cada test : afterEach(() => {})
. Posterior a la ejecución de todo el test suite : after(() => {})

*/

before(() => {
  console.log("Previo a la ejecución de todo el test suite")
})

beforeEach(() => {
  cy.visit("https://example.cypress.io");
  cy.contains("type").click();
})

describe("TS", () => {
  it("TST01", () => {
    cy.url().should("include", "/commands/actions");
  }),
  it("TST02", () => {
    cy.get(".action-email").type("pepe@email.com");
    cy.get(".action-email").should("have.value", "pepe@email.com");
  })
});

// Ejecutar: npx cypress run "cypress/e2e/hooks.cy.js"