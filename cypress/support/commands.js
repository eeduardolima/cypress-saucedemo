// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress"/>

Cypress.Commands.add('realizarLogin', () => {
    cy.visit("https://www.saucedemo.com/")
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('verificaProdutos',()=>{
    cy.get('.cart_list > :nth-child(3)').should('contain','Sauce Labs Onesie')
    cy.get('.cart_list > :nth-child(4)').should('contain','Sauce Labs Bike Light')
    cy.get('.cart_list > :nth-child(5)').should('contain','Sauce Labs Bolt T-Shirt')
})