context('Account', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
    })

    beforeEach(() => {
    })

    it('register', () => {
        cy.register()
        // Logout User
        // cy.logoutUser()
    })

    it('login success', () => {
        cy.loginUser()
        // Logout User
        // cy.logoutUser()
    })
})
