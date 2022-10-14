require('@shopware-ag/e2e-testsuite-platform/cypress/support');
import customers from '../fixtures/customers.json';

const customer = customers.newCustomer;
Cypress.Commands.add('deleteCustomerByEmail', () => {
    cy.log("Gesuchte email: " + customer.email)
    // gives info of userdata (we need the userID)
    cy.searchViaAdminApi({
        endpoint: 'customer',
        data: {
            field: 'email',
            value: customer.email
        }
    }).then((customerData) => {
        cy.log(customerData.id ? `found customer ${customerData.id}` : 'no customer found');
        while (customerData.id != null) {
            cy.log("Lösche User mit der gefundenen ID " + customerData.id);
            cy.requestAdminApi('DELETE', `/api/customer/${customerData.id}`)
                .then((r) => expect(r.status).to.eq(204));
            return;
        }
    });
});
