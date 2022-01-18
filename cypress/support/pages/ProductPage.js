import ShoppingCartPage from '../../support/pages/ShoppingCartPage.js';

class ProductPage {

    setProductSize() {
        cy.get('[aria-label="size 29"]').click()
    }

    setProductColor() {
        cy.get("[data-role='swatch-options'] [data-attribute-code='color'] [index='0'] .swatch__option").click()
    }

    clickAddToCardButton() {
        cy.get('#product-addtocart-button').click({ force: true })
    }

    getMessage() {
        return cy.get('[data-ui-id="message-success"]')
    }

    clickShoppingCartLink() {
        cy.get('div[data-ui-id="message-success"] a').click()
        return new ShoppingCartPage();
    }

    //should be part of Store Navigation page
    clickShoppingCartButton() {
        cy.get('[data-testid="minicart-link"]').click()
    }

    back() {
        cy.go('back')
    }
}

export default ProductPage