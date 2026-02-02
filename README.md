# Projeto de Automação E2E com Playwright

Este projeto é um portfólio de testes automatizados End-to-End (E2E) utilizando **Playwright** e **TypeScript**. O objetivo é demonstrar boas práticas de QA, incluindo o padrão **Page Object Model (POM)** e integração contínua.

## 📊 Ver Relatório Online
Você pode visualizar a execução mais recente dos testes diretamente no navegador, sem precisar baixar nada:
[**Acessar Relatório Allure (GitHub Pages)**](https://vinicarrera.github.io/projeto-playwright/)

## 🚀 Tecnologias Utilizadas

- **[Playwright](https://playwright.dev/)**: Framework de testes moderno e rápido.
- **TypeScript**: Tipagem estática para maior segurança e manutenibilidade.
- **Page Object Model (POM)**: Padrão de projeto para organizar e reutilizar código de testes.
- **Allure Report**: Relatórios detalhados e visuais dos testes E2E.
- **k6**: Ferramenta de testes de carga/performance.
- **GitHub Actions**: Pipeline de CI/CD para execução automática dos testes.

## 🏗️ Estrutura do Projeto

```
projeto-playwright/
├── .github/workflows/       # Configuração do CI/CD
│   └── playwright.yml
├── pages/                   # Page Objects (Camada de abstração)
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── tests/                   # Arquivos de teste
│   ├── e2e-purchase.spec.ts # Fluxo completo de compra
│   ├── login.spec.ts        # Testes de autenticação
│   ├── api.spec.ts          # Testes de API
│   └── performance/         # Testes de performance
│       └── load-test.js     # Teste de carga com k6
├── playwright.config.ts     # Configuração global do Playwright
├── tsconfig.json            # Configuração do TypeScript
└── package.json             # Dependências e scripts
```

## 💻 Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado (versão 18 ou superior).
- [k6](https://k6.io/docs/get-started/installation/) instalado para testes de performance.

### Instalação
Clone o repositório e instale as dependências:

```bash
npm install
npx playwright install
```

### Executando os Testes E2E
Para rodar todos os testes:

```bash
npm test
```

### Gerando Relatórios Allure
Após a execução dos testes, você pode gerar e abrir o relatório Allure:

```bash
npm run report
```

### Testes de Performance (Carga)
Para executar o teste de carga com k6:

```bash
npm run test:perf
```

> **Nota**: O k6 precisa estar instalado na máquina. Consulte a [documentação oficial](https://k6.io/docs/get-started/installation/) para instalação.

## 🧪 Cenários Cobertos

1. **Fluxo de Compra (E2E)**:
   - Login com usuário padrão.
   - Adição de produto ao carrinho.
   - Validação do carrinho.
   - Preenchimento de checkout.
   - Finalização da compra com sucesso.

2. **Autenticação**:
   - Tentativa de login com credenciais inválidas (validação de mensagem de erro).

3. **API (JSONPlaceholder)**:
   - Busca de post (GET).
   - Criação de post (POST).
   - Atualização de post (PUT).

4. **Performance**:
   - Teste de carga com k6 na API JSONPlaceholder.
   - Fases de warm-up e ramp-up.
   - Thresholds de SLA (95% das requisições < 500ms, taxa de erro < 1%).

---
Desenvolvido por Vinicius Carrera como parte do portfólio de QA Automation.
