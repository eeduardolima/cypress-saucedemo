const el = require('../elements/fluxoDeCompraElements').ELEMENTS;

class FluxoDeCompraPage {

    realizarOrdenacaoMenorParaMaiorValor(){
        cy.get(el.botaoFiltroOrdenacao).select('Price (low to high)')
    }

    realizarValidacaoOrdenacaoDosProdutos(){
        cy.get(':nth-child(1) > .inventory_item_description').should('contain','Sauce Labs Onesie')
        cy.get(':nth-child(2) > .inventory_item_description').should('contain','Sauce Labs Bike Light')
        cy.get(':nth-child(3) > .inventory_item_description').should('contain','Sauce Labs Bolt T-Shirt')
    }

    addProdutoCarrinho(produto){
        cy.contains(produto).click()
        cy.get(el.botaoAddProdutoCarrinho).click()
    }

    clicarBotaoVoltarNoCarrinho(){
        cy.get(el.botaoVoltarCarrinho).click()
    }

    checarQntdProdutosCarrinho(qntd){
        cy.get(el.infoQntdProdutoCarrinho).should('have.text',qntd)
    }

    realizarCheckout(){
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get(el.inputPrimeiroNome).type('Teste primeiro nome')
        cy.get(el.inputSegundoNome).type('Teste segundo nome')
        cy.get(el.inputCEP).type('88130500')
        cy.get(el.botaoContinuarCheckout).click()
    }

    validarValorTotalDaCompra(valorTotal){
        cy.get(el.inputValorTotalDaCompra).should('have.text','Total: $' + valorTotal)
    }

    finalizarCompra(){
        cy.get(el.botaoFinalizarCompra).click()
    }

    validarMensagemAposFinalizarCompra(){
        cy.get(el.infoCompraRealizadaComSucesso).should('have.text','Thank you for your order!')
    }

}

export default new FluxoDeCompraPage();