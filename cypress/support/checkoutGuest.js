import customers from '../fixtures/customers.json';
const customer = customers.newCustomer;

Cypress.Commands.add('checkoutGuest', (user) => {
    cy.visit('/')

    // add product to cart and
    // go to the begin of the checkout process
    cy.addToCart()
    cy.get('.begin-checkout-btn').click()
    // fill in the personal data
    cy.fillRegistrationForm(customer)
    cy.get('.register-submit > .btn').click()
    // //check if it was succesful
    cy.get('.confirm-main-header').should('be.visible')
})
