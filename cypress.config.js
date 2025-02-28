const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //the below line is added for overcoming CORS[Cross-Origin Resource Sharing]error
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config)
      // implement node event listeners here
    },
    specPattern: '**/*.feature',
    excludeSpecPattern: ['**/stepDefinitions/*', '*.js', '*.md'],
  },
});
