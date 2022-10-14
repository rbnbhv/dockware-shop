import customers from '../fixtures/customers.json';
const customer = customers.newCustomer;

Cypress.Commands.add('checkoutNewCustomer', (user) => {
    cy.visit('/')

    //add product to cart
    //add product to cart and
    // go to the begin of the checkout process
    cy.addToCart()
    cy.get('.begin-checkout-btn').click()
    // fill in the data
    cy.fillRegistrationForm(customer)

    cy.get('.register-submit > .btn').click()
    //check if it was succesful
    cy.get('h1.checkout-main-header.confirm-main-header').contains('Bestellung abschließen')
})
