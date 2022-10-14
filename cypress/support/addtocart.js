Cypress.Commands.add('addToCart', (user) => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
    })
    cy.visit('/')
    // cy.intercept('GET', '/').as('ajaxLazyNavi')
    // // accept cookies
    //
    // cy.wait('@ajaxLazyNavi').its('response.statusCode').should('eq', 200)

    cy.visit('/Clothing/')
    cy.get(':nth-child(1) > .card > .card-body > .product-image-wrapper > .product-image-link > .product-image').click()
    cy.get('.btn.btn-primary.btn-block.btn-buy').first().click()
    // cy.get('.buy-widget-container > .col > .btn').click()

    // check if product is in cart
    cy.get('.alert-content').should('be.visible')
})
