#language: pt
Funcionalidade: Validar fluxo de compras do site

    Cenario: Realizar compra com sucesso
    Dado que acesso o site
    E realizo a ordenação de menor para maior
    Quando adiciono os produtos no carrinho
    Entao valido o checkout
    E valido que a compra foi realizada com sucesso
