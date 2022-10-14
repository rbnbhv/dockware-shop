context('Checkout as Guest', () => {
    beforeEach(() => {
        cy.deleteCustomerByEmail()
        cy.clearCookies()
        cy.visit('/')
        // accept cookies
    })

    it('checkout as guest', () => {
        //add product to cart and
        // go to the begin of the checkout process
        // and checkout as a guest
        cy.checkoutGuest()
    })
})
