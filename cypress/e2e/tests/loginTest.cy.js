//from branchloginTest
///<reference types="cypress"/>
describe("connection to the cypress BOM2.0 page", () => {

// precondition: login
    beforeEach(() => {
      cy.visit("https://adminbom.smobilpay.integration.maviance.info/agent-payments?filter=")
      cy.get('[data-testid="username"]').type("auto_webagent")
        cy.get('[data-testid="password"]').type("Smobil@2023")
        cy.get(".MuiGrid-container > :nth-child(3)").click()
        cy.wait(500)
    })

//overview of the homepage content after login
      it("preview of the home page after login", () => {
          cy.contains("WELCOME TO YOUR")
          cy.contains("DIGITAL PAYMENT")
          cy.contains("PLATFORM")
          cy.contains("Bulk Payment")
      })
        
  
  })