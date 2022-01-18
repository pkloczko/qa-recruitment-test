
import cat from '../../support/locators/categories.js';
import MainPage from '../../support/pages/MainPage.js';
import MiniCardPage from '../../support/pages/MiniCardPage.js';

describe('Basic shopping card web tests', () => {

    let productDetails;

    beforeEach(() => {
        cy.fixture("productdata").then((data) => {
            productDetails = data;
        });
        Cypress.config('defaultCommandTimeout', 10000);
    });

    it('Should verify if shopping card is empty', () => {
        const mainPage = new MainPage()
        mainPage.openAlpacaWebSite()
        mainPage.clickShoppingCartButton()
        const miniCardPage = new MiniCardPage()
        miniCardPage.getMiniCardHeading().should("be.visible").should('not.be.empty')
        miniCardPage.getMiniCardHeading().invoke("text").should("contain", "Shopping cart")
        miniCardPage.getMiniCardEmptySubtitile().should('not.be.empty')
            .should("contain", "You have no items in your shopping cart.")
    })

    it('Should add single product to shopping card', () => {
        const mainPage = new MainPage()
        mainPage.openAlpacaWebSite()
        mainPage.clickShopByCategory(cat.clothing)
        const productPage = mainPage.clickProductByName(productDetails.products[0].name)
        productPage.setProductSize()
        productPage.setProductColor()
        productPage.clickAddToCardButton();
        cy.log(productPage.getMessage().invoke("text"))
        productPage.getMessage().invoke("text").should("contain", "You added " +productDetails.products[0].name+" to your shopping cart.");
        const shoppingCard = productPage.clickShoppingCartLink();

        //Veryfi product
        shoppingCard.getProductNames().invoke('text').should("contain", productDetails.products[0].name)
        shoppingCard.getProductPrice(productDetails.products[0].name).invoke('text').should('eq', productDetails.products[0].price)
        shoppingCard.getProductQuantity(productDetails.products[0].name).invoke('val').should('eq', "1")
        shoppingCard.getProductSubtotal(productDetails.products[0].name).invoke('text').should('contain', productDetails.products[0].price)

    })

    it('Should add two products to shopping card', () => {
        const mainPage = new MainPage()
        mainPage.openAlpacaWebSite()
        mainPage.clickShopByCategory(cat.clothing)
        const productPage = mainPage.clickProductByName(productDetails.products[0].name)
        productPage.setProductSize()
        productPage.setProductColor()
        productPage.clickAddToCardButton();
        productPage.getMessage().invoke("text").should("contain", "You added " + productDetails.products[0].name + " to your shopping cart.");
        mainPage.clickMainLogo()
        mainPage.clickProductByName(productDetails.products[1].name)
        productPage.setProductSize()
        productPage.setProductColor()
        productPage.clickAddToCardButton();
        productPage.getMessage().invoke("text").should("contain", "You added " + productDetails.products[1].name + " to your shopping cart.");
        const shoppingCard = productPage.clickShoppingCartLink();

        //Verify product0
        shoppingCard.getProductNames().invoke('text').should("contain", productDetails.products[0].name)
        shoppingCard.getProductPrice(productDetails.products[0].name).invoke('text').should('eq', productDetails.products[0].price)
        shoppingCard.getProductQuantity(productDetails.products[0].name).invoke('val').should('eq', "1")
        shoppingCard.getProductSubtotal(productDetails.products[0].name).invoke('text').should('contain', productDetails.products[0].price)

        //Verify product1
        shoppingCard.getProductNames().invoke('text').should("contain", productDetails.products[1].name)
        shoppingCard.getProductPrice(productDetails.products[1].name).invoke('text').should('eq', productDetails.products[1].price)
        shoppingCard.getProductQuantity(productDetails.products[1].name).invoke('val').should('eq', "1")
        shoppingCard.getProductSubtotal(productDetails.products[1].name).invoke('text').should('contain', productDetails.products[1].price)
        shoppingCard.getProductsTotalOrder().invoke('text').should('eq', "$94.00")
        shoppingCard.calculateTotalOrderValue()
    })
})