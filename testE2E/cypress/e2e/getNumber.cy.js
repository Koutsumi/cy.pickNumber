import indexPage from '../pages/index'
import verifyPage from '../pages/verify'

describe('Verificando o número gerado pelo sistema', function() {

    beforeEach(() => {
        indexPage.go()
    })

    context('Gerando um número', function(){
        it('O sistema deve gerar um número aleatório', function(){
            indexPage.button()
            indexPage.assertRNumber()
        })
    })

    context('Verificando o número gerado', function(){

        beforeEach(() => {
            indexPage.button()
            indexPage.pickNumber()
        })
        it('Número correto', function(){
            
            indexPage.goVerifyPage()

            verifyPage.title()
            verifyPage.typeNumber('correct')
            verifyPage.submit()
            const expectedMessage = 'Parabéns! O número está correto ;)'
            verifyPage.checkResponse(expectedMessage)
        })

        it('Número incorreto', function(){
    
            indexPage.goVerifyPage()

            verifyPage.title()
            verifyPage.typeNumber('wrong')
            verifyPage.submit()
            const expectedMessage = 'Oh não! O número está errado ):'
            verifyPage.checkResponse(expectedMessage)
        })
    })
})