/// <reference types="Cypress"/>

import LoginPage from '../../support/pages/loginPage'
import TelaInicialPage from '../../support/pages/telaInicialPage'

describe.only('Teste funcional de login', () => {
    it('Validar login com sucesso', () => {
        LoginPage.acessarSite('https://www.saucedemo.com/')
        LoginPage.preencherUsername('standard_user')
        LoginPage.preencherSenha('secret_sauce')
        LoginPage.clicarBotaoLogin()
        TelaInicialPage.validarTelaInicial()
    });

    it('Não deve realizar login com username incorreto', () => {
        cy.realizarLogin('incorreto','secret_sauce')
        LoginPage.validarMensagemErro()
    });

    it('Não deve realizar login com password incorreta', () => {
        cy.realizarLogin('standard_user','incorreto')
        LoginPage.validarMensagemErro()
    });
    
});