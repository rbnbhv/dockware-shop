require('@shopware-ag/e2e-testsuite-platform/cypress/support');
const customers = require("../fixtures/customers.json");

const customer = customers.newCustomer;
Cypress.Commands.add('userExists', (user) => {
    cy.searchViaAdminApi({
      endpoint: 'customer',
      data: {
          field: 'email',
          value: user.email
      }
  }).then((customerData) => {
        cy.log(customerData.id ? `found customer ${customerData.id}` : 'no customer found')
        // cy.expect(customerData.id).to.exist);
    })
})