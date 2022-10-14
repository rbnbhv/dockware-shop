import customers from '../fixtures/customers.json';
const customer = customers.newCustomer;


Cypress.Commands.add('register', (user) => {
    // delete old Customer
    cy.deleteCustomerByEmail()

    cy.visit('/')
    // accept cookies
    // cy.get('.js-cookie-configuration-button > .btn').click()
    // cy.get('.offcanvas-cookie > .btn').click()
    // fill in the data

    cy.visit('/account/register')
    cy.fillRegistrationForm(customer)

    cy.get('div.register-submit .btn').click()

    // check if it was succesful
    cy.get('.card-header')
        .contains(`${customer.firstName} ${customer.lastName}`)
})
