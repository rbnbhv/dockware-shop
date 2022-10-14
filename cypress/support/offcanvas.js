Cypress.Commands.add('offcanvas', (user) => {
    //add product to cart
    cy.addToCart()
    // click on the checkout button
    cy.get('.begin-checkout-btn').click()
    // check if the shipping information is found
    cy.get('.checkout-main-header').contains('Versandinformation')
})
