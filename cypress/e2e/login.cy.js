/// <reference types="cypress" />
import PortfolioPage from "./pageObjects/PortfolioPage"
describe('My First Test', () => {
    before(function () {
        cy.fixture('web-data').then((data) => {
            this.data = data
        })
    })
    it('Verify the login and return to the home page', function () {
        this.data.forEach(element => {
            cy.login(element.url, element.email, element.password)
            const portfolioPage = new PortfolioPage()
            portfolioPage.getPortfolioValue().should('have.value', element.portfolioValue)
        });
    })
})