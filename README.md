# Projeto de Automação E2E com Playwright

Este projeto é um portfólio de testes automatizados End-to-End (E2E) utilizando **Playwright** e **TypeScript**. O objetivo é demonstrar boas práticas de QA, incluindo o padrão **Page Object Model (POM)** e integração contínua.

## 🚀 Tecnologias Utilizadas

- **[Playwright](https://playwright.dev/)**: Framework de testes moderno e rápido.
- **TypeScript**: Tipagem estática para maior segurança e manutenibilidade.
- **Page Object Model (POM)**: Padrão de projeto para organizar e reutilizar código de testes.
- **Allure Report**: Relatórios detalhados e visuais.
- **GitHub Actions**: Pipeline de CI/CD para execução automática dos testes.

## 🏗️ Estrutura do Projeto

```
d:/Projetos/projeto-playwright/
├── .github/workflows/   # Configuração do CI/CD
├── pages/               # Page Objects (Camada de abstração)
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── tests/               # Arquivos de teste
│   ├── e2e-purchase.spec.ts  # Fluxo completo de compra
│   └── login.spec.ts         # Testes de autenticação (caminho infeliz)
├── playwright.config.ts # Configuração global do Playwright
└── package.json         # Dependências e scripts
```

## 💻 Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado (versão 14 ou superior).

### Instalação
Clone o repositório e instale as dependências:

```bash
npm install
npx playwright install
```

### Executando os Testes
Para rodar todos os testes em modo visual (headed):

```bash
npm test
```

### Gerando Relatórios
Após a execução dos testes, você pode gerar e abrir o relatório Allure:

```bash
npm run report
```

## 🧪 Cenários Cobertos

1.  **Fluxo de Compra (E2E)**:
    - Login com usuário padrão.
    - Adição de produto ao carrinho.
    - Validação do carrinho.
    - Preenchimento de checkout.
    - Finalização da compra com sucesso.

2.  **Autenticação**:
    - Tentativa de login com credenciais inválidas (validação de mensagem de erro).

3.  **API (JSONPlaceholder)**:
    - Busca de post (GET).
    - Criação de post (POST).
    - Atualização de post (PUT).

---
Desenvolvido por Vinicius Carrera como parte do portfólio de QA Automation.
