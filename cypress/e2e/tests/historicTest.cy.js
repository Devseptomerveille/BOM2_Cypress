///<reference types="cypress"/>

//import login page field
import { LoginPage } from "../pages/LoginPage";
//import historicPage identifiers
import {HistoricPage} from "../pages/HistoricPage"

//import page identifiers
const loginPage = new LoginPage 
const historicPage = new HistoricPage

let testdata= null;
let test_filePath = "testdata.json"


describe("connection to the cypress BOM2.0 page", () => {
    before(() => {
        cy.readJsonFile(test_filePath).then((data) => {
            testdata=data
           
        })
      })

// precondition: login
    beforeEach(() => {
//Visit the login page
        cy.visit("https://adminbom.smobilpay.integration.maviance.info/")
        cy.get(loginPage.user_name_field).type(testdata.login_page.user_name_login)
        cy.get(loginPage.password_field ).type(testdata.login_page.password_login)
        cy.get(loginPage.button_login_field).click()
        cy.get(historicPage.click_historic_field).click()
 
    })
// access the different elements of the historic page   
  it ("the elements contained in the table of the historic page", () =>{   
         cy.contains(testdata.historic_page.click_service_th).click().as("service")
         cy.contains(testdata.historic_page.destination_th).as("Destination")
         cy.contains(testdata.historic_page.click_collected_amount_th).click()
         cy.contains(testdata.historic_page.click_paid_at_th).click()
         cy.contains(testdata.historic_page.ptn_th)
         cy.contains(testdata.historic_page.click_processed_at_th).click()
         cy.contains(testdata.historic_page.click_payment_Status).click()
         cy.contains(testdata.historic_page.actions_th).as("action")
         cy.contains(testdata.historic_page.rows_per_page_).click()
   // Define a function to click the button until it becomes inactive
const clickButtonUntilInactive = () => {
    cy.get(historicPage.pagination_next_button_identifier).then($button => {
        if ($button.prop('disabled')) {
            // If button is inactive, stop clicking
            return;
        } else {
            // If button is active, click it and recursively call this function
            cy.get(historicPage.pagination_next_button_identifier).click();
            cy.wait(1000); // Optional: Wait for a certain time before clicking again
            clickButtonUntilInactive(); // Recursive call
        }
    });
};

// Start clicking pagination buttons
clickButtonUntilInactive(); // Recursive call


     })
})
