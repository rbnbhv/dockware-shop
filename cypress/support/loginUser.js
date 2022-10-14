require('@shopware-ag/e2e-testsuite-platform/cypress/support');
import customers from '../fixtures/customers.json';

Cypress.Commands.add('loginUser', (user) => {
    const customer = customers.existingCustomer;
    cy.userExists(customer);

    // visit login page
    cy.visit('/account/login')

    // accept cookies
    // cy.get('.js-cookie-configuration-button > .btn').click()
    // cy.get('.offcanvas-cookie > .btn').click()

    // .get('input.form-control')
    cy.get('#loginMail').click({ force: true })
        .should('be.empty')
        .type(customer.email)
    cy.get('#loginPassword').click({ force: true })
        .should('be.empty')
        .type(customer.password)
    cy.get('.login-submit > .btn').click()
    cy.get('.account-aside > .card > .card-header').contains(`${customer.firstName} ${customer.lastName}`)
})
