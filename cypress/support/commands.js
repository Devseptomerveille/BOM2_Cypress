///<reference types="cypress"/>
Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
  })

  //command used to read the contents of a JSON file in tests
  Cypress.Commands.add('readJsonFile',(filePath) => {
    return cy.fixture(filePath)
  })
 