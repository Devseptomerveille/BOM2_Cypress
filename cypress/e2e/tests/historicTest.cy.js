///<reference types="cypress"/>

//import login page field
import { LoginPage } from "../pages/LoginPage";
//import historicPage identifiers
import {HistoricPage} from "../pages/HistoricPage"

//import page identifiers
const loginPage = new LoginPage 
const historicPage = new HistoricPage

let loginData = null;
let test_filePath = "loginData.json"

describe("connection to the cypress BOM2.0 page", () => {
    before(() => {
        cy.readJsonFile(test_filePath).then((data) => {
            loginData=data
            hitoricData=data
        })
      })

// precondition: login
    beforeEach(() => {
//Visit the login page
        cy.visit("https://adminbom.smobilpay.integration.maviance.info/")
        cy.get(loginPage.user_name_field).type(loginData.login_page.user_name_login)
        cy.get(loginPage.password_field ).type(loginData.login_page.password_login)
        cy.get(loginPage.button_login_field).click()
        cy.get(historicPage.click_historic_field).click()
 
    })
// access the different elements of the historic page   
  it ("the elements contained in the table of the historic page", () =>{   
         cy.contains(historicPage.click_service_ident,hitoricData.historic_page.click_service_th).click()
         cy.contains(historicPage.destination_ident,hitoricDatahistoric_page.destination_th).as("destination")
         cy.contains(historicPage.click_collected_amount_ident,hitoricData.historic_page.click_collected_amount_th).click()
         cy.contains(historicPage.click_paid_at_ident,hitoricData.historic_page.click_paid_at_th).click()
         cy.contains (historicPage.ptn_on_table_ident,hitoricData.historic_page.ptn_th)
         cy.contains(historicPage.click_processed_at_ident ,click_processed_at_th).click()
         cy.contains(historicPage.click_payment_status_ident,hitoricData.historic_page.click_payment_Status).click()
         cy.contains(historicPage.actions_ident,hitoricData.historic_page.actions_th)
         cy.get(historicPage.rows_per_page_ident,hitoricData.historic_page.rows_per_page).click()
         cy.wait(400)
         cy.get(historicPage.select_rows_per_page_ident).click()
         cy.contains(historicPage.click_pagination_1_ident,hitoricData.historic_page.click_pagination_1).click()

   
     })
})