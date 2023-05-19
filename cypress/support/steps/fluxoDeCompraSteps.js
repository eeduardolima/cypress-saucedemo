/// <reference types="Cypress"/>

import { Given as Dado, When as Quando, And as E, Then as Entao } from 'cypress-cucumber-preprocessor/steps'
import TelaInicialPage from '../pages/telaInicialPage'
import FluxoDeCompraPage from '../pages/fluxoDeCompraPage'

Dado("que acesso o site", () => {
    cy.realizarLogin()
    TelaInicialPage.validarTelaInicial()
})

E ("realizo a ordenação de menor para maior", () => {
    FluxoDeCompraPage.realizarOrdenacaoMenorParaMaiorValor()
    FluxoDeCompraPage.realizarValidacaoOrdenacaoDosProdutos()
})

Quando ("adiciono os produtos no carrinho", () => {
    FluxoDeCompraPage.addProdutoCarrinho("Sauce Labs Onesie")
    FluxoDeCompraPage.clicarBotaoVoltarNoCarrinho()
    FluxoDeCompraPage.addProdutoCarrinho("Sauce Labs Bike Light")
    FluxoDeCompraPage.clicarBotaoVoltarNoCarrinho()
    FluxoDeCompraPage.addProdutoCarrinho("Sauce Labs Bolt T-Shirt")
    FluxoDeCompraPage.checarQntdProdutosCarrinho(3)
})

Entao ("valido o checkout", () => {
    FluxoDeCompraPage.realizarCheckout()
    FluxoDeCompraPage.validarValorTotalDaCompra(36.69)
})

E ("valido que a compra foi realizada com sucesso", () => {
    FluxoDeCompraPage.finalizarCompra()
    FluxoDeCompraPage.validarMensagemAposFinalizarCompra()
})
