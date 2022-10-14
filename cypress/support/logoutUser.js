Cypress.Commands.add('logoutUser', (user) => {
    // click on "abmelden"
    cy.get('.account-content .account-aside-footer .btn-link').click()
    //check if the container contains the keyword
    cy.get('.alert-content').should('be.visible');
})
