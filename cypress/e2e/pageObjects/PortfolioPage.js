class PortfolioPage {
    getPortfolioValue() {
        return cy.get('span[class*="text-ds-primary"]')
    }
}
export default PortfolioPage