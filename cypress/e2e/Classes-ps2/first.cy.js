/// <reference types="cypress" />
beforeEach('Setup',()=>{
    cy.viewport(1440,1080)
    cy.visit('https://www.google.com')
    cy.url().should('contain', 'google')
    cy.url().should('equal', 'https://www.google.com/')
})
describe('Test of Cookie pop-up google',()=>{   
    it('Confirm pop-up', () => {
        cy.get('#L2AGLb > .QS5gu').should('be.visible')
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('#L2AGLb > .QS5gu').should('not.be.visible')
    })
    
    it('Decline pop-up', () => {
    
        cy.get('#W0wltc > .QS5gu').should('be.visible')
        cy.get('#W0wltc > .QS5gu').click()
        cy.get('#W0wltc > .QS5gu').should('not.be.visible')
    })
    
    
    it('More information', () => {
        cy.get('.eOjPIe').click()
        cy.url().should('contain', 'https://consent.google.com/')
    })    
})
describe('Searches',()=>{
    it('input',()=>{
        cy.get('#W0wltc > .QS5gu')
    })
})



