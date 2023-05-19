// acoes de interacao com a pagina
// acoes page
/// <reference types="Cypress"/>

const url = Cypress.config("baseUrl")

// mapeamento dos elementos - opção 1 (deixar em outra classe e exportar para a page)

//mapeamento dos elementos - opção 2
const inputUsername = '[data-test="username"]'
const inputPassword = '[data-test="password"]'
const buttonLogin = '[data-test="login-button"]'
const infoErro = '[data-test="error"]'

//mapeamento dos elementos - opção 3
const elements ={
    inputUsername : '[data-test="username"]',
    inputPassword : '[data-test="password"]',
    buttonLogin : '[data-test="login-button"]',
    infoErro : '[data-test="error"]'
}

class loginPage {

    // mapeamento dos elementos - opção 4
    get inputUsername() {return cy.get('[data-test="username"]')}
    get inputPassword() {return cy.get('[data-test="password"]')}
    get buttonLogin() {return cy.get('[data-test="login-button"]')}
    get infoErro() {return cy.get('[data-test="error"]')}

    acessarSite(){
        cy.visit(url)
    }

    preencherUsername(username){
        cy.get(inputUsername).type(username)
    }

    preencherSenha(password){
        cy.get(elements.inputPassword).type(password)
    }

    clicarBotaoLogin(){
        this.buttonLogin.click()
    }

    validarMensagemErro(){
        this.infoErro.should('contain','Epic sadface: Username and password do not match any user in this service')
    }
}

export default new loginPage();