const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
      allureWriter(on, config)
    },
    env: {
      // define here which tags will run
      "TAGS": "not @ignore" 
    },
    baseUrl: "https://www.saucedemo.com/", 
    chromeWebSecurity: false,
    specPattern: '**/*.feature',
  },

});
