# language: pt
Funcionalidade: Fluxo de compra E2E

  Como um cliente da loja SauceDemo
  Quero realizar uma compra completa
  Para garantir que o fluxo de compra funciona corretamente

  Cenário: Realizar compra de um produto com sucesso
    Dado que estou logado com usuário "standard_user" e senha "secret_sauce"
    Quando adiciono o produto "sauce-labs-backpack" ao carrinho
    Então o badge do carrinho deve exibir "1"

    Quando acesso o carrinho
    Então devo ver o título "Your Cart"
    E o produto "Sauce Labs Backpack" deve estar no carrinho

    Quando prossigo para o checkout
    Então devo ver o título "Checkout: Your Information"

    Quando preencho os dados com nome "Vinicius", sobrenome "Carrera" e CEP "12345-678"
    Então devo ver o título "Checkout: Overview"

    Quando finalizo a compra
    Então devo ver a confirmação do pedido
    
    Quando volto para a página inicial
    Então devo ver o título "Products"
