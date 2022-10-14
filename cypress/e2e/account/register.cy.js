context('Account', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
    })

    beforeEach(() => {
    })

    it('register as customer', () => {
        // call login function
        cy.register()
    })
})
