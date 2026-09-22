const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // Ativa o gerador de HTML
  reporterOptions: {
    reportDir: 'cypress/reports', // Pasta onde o HTML será salvo
    charts: true,                // Adiciona gráficos lindos de pizza/barra
    embeddedScreenshots: true,   // Cola a foto do erro DENTRO do arquivo HTML
    inlineAssets: true,          // Deixa o HTML independente (fácil de compartilhar)
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    baseUrl: 'http://localhost:3000',
    
  },
});
