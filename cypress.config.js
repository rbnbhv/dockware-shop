const { defineConfig } = require('cypress')

module.exports = defineConfig({
  _comment: 'No credentials in this file. Please use gitlab.ci environment variable CYPRESS_ENV_JSON',
  defaultCommandTimeout: 10000,
  watchForFileChanges: false,
  video: true,
  videoUploadOnPasses: false,
  videoCompression: false,
  screenshotOnRunFailure: true,
  requestTimeout: 60000,
  responseTimeout: 60000,
  numTestsKeptInMemory: 0,
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'artifacts/cypress/[hash].xml',
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
  useDarkTheme: false,
  useShopwareTheme: true,
  theme: 'dark',
  screenshotsFolder: 'cypress/e2e/screenshots',
  videosFolder: 'cypress/e2e/videos',
  chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
