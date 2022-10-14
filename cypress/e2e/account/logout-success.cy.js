context('Account', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
    })

    beforeEach(() => {

    })

    it('logout success', () => {
        cy.loginUser()
        // call logout function
        cy.logoutUser()

    })
})
