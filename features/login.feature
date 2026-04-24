# language: pt
Funcionalidade: Login no SauceDemo

  Como um usuário do sistema
  Quero realizar login na plataforma
  Para acessar as funcionalidades da loja

  Cenário: Login com credenciais inválidas deve exibir mensagem de erro
    Dado que estou na página de login
    Quando faço login com usuário "usuario_invalido" e senha "senha_errada"
    Então devo ver a mensagem de erro "Epic sadface: Username and password do not match any user in this service"

  Cenário: Login com credenciais válidas deve redirecionar para o inventário
    Dado que estou na página de login
    Quando faço login com usuário "standard_user" e senha "secret_sauce"
    Então devo ser redirecionado para a página de inventário
