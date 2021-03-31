import {link, login, email, email_value, password, password_value, logout} from './selectors';

describe('visit', () => {
    it('visits page', () => {
        cy.visit(link)
        cy.request('GET', 'https://www.caseative.com/').its('status').should('eq', 200)
    })
})


describe('sign in', () => {
    it('verifies sign in button visibility', () => {
        cy.get(login).should('be.visible')
    })
})

describe('click sign in', () => {
    it('clicks sign in button', () => {
        cy.contains('Sign in').click()
    })
})

describe('redirect to login page', () => {
    it('redirects to login page', () => {
        cy.request('GET', 'https://www.caseative.com/account/login').its('status').should('eq', 200)
        cy.get('h1').should('contain', 'Login')
    })
})

describe('clear input', () => {
    it('clears input fields', () => {
        cy.get(email).clear()
        cy.get(password).clear()
    })
})

describe('enter creds', () => {
    it('enters valid credentials to input fields and signs in', () => {
        cy.get(email).type(email_value)
        cy.get(password).type(password_value)
        cy.get('input[value="Sign In"]').click()
    })
})

describe('verify name', () => {
    it('verifies name', () => {
        cy.get('a[href="/account"]').should('contain', 'Thomas')
    })
})

describe('log out', () => {
    it('verifies log out button visibility', () => {
        cy.get(logout).should('be.visible')
    })
})

describe('click log out', () => {
    it('clicks log out button', () => {
        cy.contains('Log out').click()
    })
})

describe('redirect to main page', () => {
    it('redirects to main page', () => {
        cy.request('GET', 'https://www.caseative.com/').its('status').should('eq', 200)
        cy.get(login).should('contain', 'Sign in')
    })
})