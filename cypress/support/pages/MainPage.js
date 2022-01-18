import ProductPage from '../../support/pages/productPage.js';

class MainPage {

    openAlpacaWebSite() {
        var appUrl = Cypress.config().baseUrl;
        cy.visit(appUrl);
    }

    getShoppingCartButton() {
        return cy.get('[data-testid="minicart-link"]')
    }

    clickShoppingCartButton() {
        cy.wait(1000) //worst practise
        this.getShoppingCartButton().focus().click({ force: true })
    }

    clickShopByCategory(category) {
        cy.get(category).click()
    }

    clickProductByName(productName) {
        cy.get('.product-grid-item__name-link').contains(productName).click()
        return new ProductPage();
    }

    clickMainLogo() {
        cy.get('[class="logo header__logo"]').click()
    }
}

export default MainPage