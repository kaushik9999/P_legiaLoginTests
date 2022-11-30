/// <reference types="cypress" />

import LandingPageFlow from "../flows/landing_page_flow.js";
import LandingPage from "../pages/landing_page.js"
describe('Pflegia Login Tests', () => {
    let data;
    let errorCodeData;
    let landing_page_flow;
    let landing_page;

    before('Set Up', () => {
        cy.visit('https://pflegia-nx.vercel.app');
        cy.fixture('logindata').then((dataVar) => {
            data = dataVar;
        })
        cy.fixture('errorMessages').then((error) => {
            errorCodeData = error;
        })
        landing_page_flow = new LandingPageFlow();
        landing_page = new LandingPage();
        landing_page_flow.acceptCookiesMethod();
        landing_page_flow.goToSignIn();

    })
    it('verify un-successful login, incorrect password, incorrect username', () => {
        
        landing_page_flow.login(data.invalid_userName, data.invalid_password);
        cy.wait(1000)
        cy.get('small[class="mx-2 mt-2 block text-xs font-medium text-error"]').should('have.text',errorCodeData.no_registered_user_found)
    })
    it('verify un-successful both fields blank', () => {
        landing_page.getUserName().clear()
        landing_page.getPassword().clear()
        landing_page.getSignInButton().click()
        cy.get('small[class="mx-2 mt-2 block text-xs font-medium text-error"]').should('have.text',errorCodeData.no_registered_user_found)
    })

    it('verify un-unsuccessful login in-correct username and correct password', () => {
        landing_page_flow.login(data.invalid_userName, data.valid_password);
        cy.get('small[class="mx-2 mt-2 block text-xs font-medium text-error"]').should('have.text',errorCodeData.no_registered_user_found)
        
    })

    it('verify un-unsuccessful login correct username and in-correct password', () => {
        landing_page.getUserName().clear()
        landing_page.getPassword().clear()
        landing_page_flow.login(data.valid_email, data.invalid_password);
        cy.get('small[class="mx-2 mt-2 block text-xs font-medium text-error"]').should('have.text',errorCodeData.password_error)
        
    })
    it('verify un-unsuccessful username field @ sign validation', () => {
        landing_page.getUserName().clear()
        landing_page.getPassword().clear()
        landing_page_flow.login(data.noEmailSignString, data.valid_password);
        
    })
    it('verify successful login', () => {
        landing_page.getUserName().clear()
        landing_page.getPassword().clear()
        landing_page_flow.login(data.valid_email, data.valid_password);
        if(cy.get('a[href="/fast-track"]').should('be.visible')){
            expect(true).to.be.true
        }
        else if(cy.get('ul > li:nth-child(1) > a > font > font').should(be.visit)){
            expect(true).to.be.true
        }
        else{
            expect(true).to.be.false
        }
        
    })




})
