Cypress.Commands.add('deleteWishlistCustomer', (user) => {
    cy.intercept('GET', '/wishlist/count').as('WishlistUpdate')
    cy.visit('/wishlist/index')

    // delete wishlist
    cy.wait('@WishlistUpdate').its('response.statusCode').should('eq', 200)
    cy.get('#prems-wishlist').then((container) => {
        if (container.find('.wishlist').length > 0) {
            cy.get('.wishlist--head-title').first().click()
            cy.get('.change-link').first().click()
            cy.get('.float-right > .btn').first().click()
            cy.get('.alert-content').contains('Die Wunschliste wurde erfolgreich entfernt.')
        } else {
            cy.log('WISHLIST EMPTY')
        }
    })

})
