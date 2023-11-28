const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
     
    },
    baseUrl:"https://eximpe.com"
  },
  viewportWidth:1200,
  viewportHeight:900,


});
