describe("Mi primera prueba", () => {
  it("Gets, types e asserts", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");
    cy.get(".action-email").type("pepe@email.com");
    cy.get(".action-email").should("have.value", "pepe@email.com.ar");
    cy.get(".action-email").invoke("val").then((p) => {
      cy.log(p)
    })
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
