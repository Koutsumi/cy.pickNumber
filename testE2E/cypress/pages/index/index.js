import { el } from './elements'

class indexPage{
    go(){
        cy.visit('https://koutsumi.github.io/cy.pickNumber/')
        cy.get(el.subtitle)
            .should('have.text', 'Gere o seu número aleatório!')
    }

    button(){
        cy.get(el.button)
            .click()
    }

    assertRNumber(){
        cy.get(el.number)
            .invoke('text')
                .then(($el) => {
                    expect($el).not.eq('0000')
                    cy.log($el)
                })
    }

    pickNumber(){
        cy.get(el.number)
            .invoke('text')
                .then(($el) => {
                    if($el != '0000'){
                        Cypress.env('myNumber', $el)
                        cy.log(Cypress.env('myNumber'))
                    }
                })
    }

    goVerifyPage(){
        cy.contains(el.verifyPage.selector, el.verifyPage.text)
            .click()
    }
}

export default new indexPage()