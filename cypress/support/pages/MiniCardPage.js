
class MiniCardPage {

    getMiniCardHeading() {
        return cy.get('.minicart-content__heading')
    }

    getMiniCardEmptySubtitile() {
        return cy.get('.minicart-content__counter')
    }

}


export default MiniCardPage