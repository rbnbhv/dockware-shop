module.exports = require('@shopware-ag/e2e-testsuite-platform/cypress/plugins');
// This example plugins/index.js can be used to load plugins
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
    // console.log(config) // see everything in here!

    // modify config values
    config.baseUrl = config.env.baseUrl

    // IMPORTANT return the updated config object
    return config
}