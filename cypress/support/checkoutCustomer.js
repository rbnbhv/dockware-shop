Cypress.Commands.add('checkoutCustomer', (user) => {
    // cy.visit('/')
    //add product to cart
    //add product to cart and
    // go to the begin of the checkout process
    // cy.addToCart()
    //check if it was succesful
    cy.get('.confirm-main-header').should('be.visible')
})
