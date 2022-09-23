import { el } from './elements'

class verifyPage {

    title(){
        cy.contains(el.title.selector, el.title.text)
            .should('be.visible')
    }
    
    typeNumber(){

        cy.get(el.input)
            .clear()
                .type(Cypress.env('myNumber'))
        
    }

    typeWrongNumber(){
        let randomNumber = Math.random() * (9999 - 1000) + 1000
            randomNumber = randomNumber.toFixed(2)

            cy.get(el.input)
                .clear()
                    .type(randomNumber)
    }

    submit(){
        cy.contains(el.submit.selector, el.submit.text)
            .click()
    }

    checkResponse(expectedMessage){
        cy.contains(el.response, expectedMessage)
            .should('be.visible')
    }

}

export default new verifyPage()
