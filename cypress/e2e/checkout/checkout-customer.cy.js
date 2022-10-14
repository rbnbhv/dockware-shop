context('Checkout as customer', () => {
    beforeEach(() => {
        cy.visit('/')
        //login first
        cy.loginUser()
    })

    it('checkout as customer', () => {
        
        //add product to cart and
        // go to the begin of the checkout process
        // and checkout as a customer
        // cy.checkoutCustomer()
        cy.addToCart()
        cy.get('.begin-checkout-btn').click()
        cy.checkoutCustomer()
    })
})
