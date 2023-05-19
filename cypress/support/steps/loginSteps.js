
import { Given as Dado, When as Quando, And as E, Then as Entao } from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../pages/loginPage'
import TelaInicialPage from '../pages/telaInicialPage'

Dado("que estou na pagina inicial de login", () => {
    loginPage.acessarSite()
})

Quando("preencher dados de acesso validos", () => {
    loginPage.preencherUsername('standard_user')
    loginPage.preencherSenha('secret_sauce')
    loginPage.clicarBotaoLogin()
})

Quando("preencher username incorreto", () => {
    loginPage.preencherUsername('standard_user1')
})

Quando("preencher username correto", () => {
    loginPage.preencherUsername('standard_user')
})

E("preencher senha correta", () => {
    loginPage.preencherSenha('secret_sauce')
    loginPage.clicarBotaoLogin()
})

E("preencher senha incorreta", () => {
    loginPage.preencherSenha('secret_sauce1')
    loginPage.clicarBotaoLogin()
})

Entao("valido que foi possivel realizar o acesso", () => {
    TelaInicialPage.validarTelaInicial()
})

Entao("valido que foi apresentado mensagem informando que os dados estao invalidos", () => {
    loginPage.validarMensagemErro()
})
