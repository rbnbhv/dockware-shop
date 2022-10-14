// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
require('@shopware-ag/e2e-testsuite-platform/cypress/support');

// Import commands.js using ES2015 syntax:
import './commands'
// Require test suite commons
import './logoutUser'
import './loginUser'
import './fillRegistrationForm'
import './register'
import './addtocart'
import './offcanvas'
import './checkoutGuest'
import './checkoutNewCustomer'
import './checkoutCustomer'
import './deleteCustomerByEmail'
import './userExists'