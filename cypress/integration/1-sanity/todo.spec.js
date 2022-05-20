/// <reference types="cypress" />
/*global cy, Cypress*/

describe("First time access", () => {
  it("is redirected to sign in page", () => {
    cy.visit("/");
    cy.url().should(
      'be.equal',
      `${Cypress.config("baseUrl")}/sign-in`
    )
  })
})

// it("works", () => {
//   cy.visit("/");
//   cy.contains("Go To Settings").should("be.visible");
// });
