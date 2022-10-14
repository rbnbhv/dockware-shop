const CustomerFixture = require('@shopware-ag/e2e-testsuite-platform/cypress/support/service/administration/fixture/customer.fixture');

class CustomerService {
    constructor() {
        this.customer = {}
        this.customerFixture = new CustomerFixture();
    }

    createCustomer(customer, addresses) {
        return this.customerFixture.setCustomerFixture(customer, addresses).then((response) => {
            this.customer = response.attributes;
            this.customer.id = response.id

            return this.customer;
        });
    }
    deleteLastCreatedCustomer() {
        return cy.requestAdminApi('DELETE', `${Cypress.env('apiPath')}/customer/${this.customer.id}`).then(()=> {
            this.customer = {};
        });
    }
    getLastCreatedCustomer() {
        return this.customer;
    }

    search(field, value) {
        return this.customerFixture.search('customer', {
            'field': field,
            'value': value
        }).then((response) => {
            const result = response.attributes;
            result.id = response.id
            return result;
        });
    }
    deleteCustomer(id) {
        cy.requestAdminApi('DELETE', `${Cypress.env('apiPath')}/customer/${id}`);
    }
}

module.exports = CustomerService;

global.CustomerService = new CustomerService();
