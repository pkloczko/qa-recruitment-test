
class ShoppingCartPage {

    //let products;

    getProductNames() {
        return cy.get('[role] [role="row"] .cart-list-item__content a')
    }

    getProductPrice(productName) {
        return cy.get('.cart-list-item__left')
            .contains(productName)
            .parents('.cart-list-item__left')
            .siblings('.cart-list-item__right')
            .find('[data-th="Price\:"] .price')
    }

    getProductQuantity(productName) {
        return cy.get('.cart-list-item__left')
            .contains(productName)
            .parents('.cart-list-item__left')
            .siblings('.cart-list-item__right')
            .find('[data-th="Quantity\:"]')
            .children('[data-role="cart-item-qty"]')
    }

    getProductSubtotal(productName) {
        return cy.get('.cart-list-item__left')
            .contains(productName)
            .parents('.cart-list-item__left')
            .siblings('.cart-list-item__right')
            .find('[data-th="Subtotal\:"]')
    }

    getProductsTotalOrder() {
        return cy.get('.order-summary__total span')
    }

    setProductQuantity(productName) {
        //tbd
    }

    calculateTotalOrderValue() {
        var arr = [];
        var sum = 0;

        return cy.get('[class="cart-list-item__total"]')
            .each(($el) => {
                let number = parseFloat($el.text().trim().replace('$', ''));
                arr.push(number)              
            }).then(() => {
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i];
                    cy.log("Sum: " + sum)
                }})
    }
}

export default ShoppingCartPage