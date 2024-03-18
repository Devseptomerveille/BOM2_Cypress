//from branchloginTest
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
        })
      })

// precondition: login
    beforeEach(() => {
//Visit the login page
        cy.visit("https://adminbom.smobilpay.integration.maviance.info/")
        cy.get(loginPage.user_name_field).type(loginData.login_page.user_name_login)
        cy.get(loginPage.password_field ).type(loginData.login_page.password_login)
        cy.get(loginPage.button_login_field).click()
 
    })

//overview of the homepage content after login
    it("preview of the home page after login", () => {
        cy.contains(loginData.home_page.welcome_text1).as('welcomeText');
        cy.contains(loginData.home_page.digital_payment_text2)
        cy.contains(loginData.home_page.platform_text3)
        cy.contains(loginData.home_page.bulk_payment_text4)
      })
        
  
  })