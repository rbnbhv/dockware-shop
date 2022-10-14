context('Loading Homepage', () => {
    beforeEach(() => {
        cy.visit('/')
        // accept cookies t
        cy.get('.js-cookie-configuration-button > .btn').click()
        cy.get('.offcanvas-cookie > .btn').click()
    })

    it('loading homepage', () => {
        // load the homepage and check if the loading was successful
        cy.get('#collapseFooterHotlineTitle').contains('Service hotline')
    })
})
