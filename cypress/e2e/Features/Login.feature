#language: pt
Funcionalidade: Login

    Cenario: Realizar login com sucesso
    Dado que estou na pagina inicial de login
    Quando preencher dados de acesso validos
    Entao valido que foi possivel realizar o acesso

    Cenario: Validar mensagem de erro apos preencher username incorreto na tela de login
    Dado que estou na pagina inicial de login
    Quando preencher username incorreto
    E preencher senha correta
    Entao valido que foi apresentado mensagem informando que os dados estao invalidos
    
    Cenario: Validar mensagem de erro apos preencher senha incorreta na tela de login
    Dado que estou na pagina inicial de login
    Quando preencher username correto
    E preencher senha incorreta
    Entao valido que foi apresentado mensagem informando que os dados estao invalidos
