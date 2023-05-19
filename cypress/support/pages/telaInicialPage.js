const el = require('../elements/telaInicialElements').ELEMENTS;

class TelaInicialPage{
    validarTelaInicial(){
        cy.get(el.tituloPagina).should('contain',"Products")
    }
}

export default new TelaInicialPage()