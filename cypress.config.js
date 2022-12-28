const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: true,
  e2e: {
    baseUrl:'http://sampleapp.tricentis.com/101/'
  },
});
