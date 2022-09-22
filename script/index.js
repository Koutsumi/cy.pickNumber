const myButton = document.getElementById('randomNumber')
let formatedLuckNumber = undefined
let saveNumber = {
    number: undefined
}

function randomNumber(){
    
    getRandomNumber()
    printLuckNumber(formatedLuckNumber)
}

function getRandomNumber(){
    const luckNumber = Math.random() * (9999 - 1000) + 1000
    formatedLuckNumber = luckNumber.toFixed(0)
    saveNumber.number = formatedLuckNumber
    localStorage.setItem('number', formatedLuckNumber)
}

function printLuckNumber(number){
    const localPrint = document.getElementById('luckNumber')
    localPrint.innerText = number
}

function checkAnswer(){
    const input = document.getElementById('checkAswer')

    if(localStorage.getItem('number') === input.value){
        console.log('ACERTOU')
        printAnswer('correct')
    }
    else if(localStorage.getItem('number') != input.value){
        console.log('EROU')
        printAnswer('wrong')
    }
}

function resetAnswer(){
    const responseField = document.getElementById('answer')
    const getParagraph = responseField.querySelector('p')

    getParagraph.remove()
}

function printAnswer(answer){
    const responseField = document.getElementById('answer')
    
    if(answer === 'correct'){
        const addParagraph = document.createElement('p')
        addParagraph.classList.add('correct')
        const content = document.createTextNode('Parabéns! O número está correto ;)')
        addParagraph.appendChild(content)
        responseField.appendChild(addParagraph)
    }
    else if(answer === 'wrong'){
        const addParagraph = document.createElement('p')
        addParagraph.classList.add('wrong')
        const content = document.createTextNode('Oh não! O número está errado ):')
        addParagraph.appendChild(content)
        responseField.appendChild(addParagraph)
    }
}

function verify(){
    resetAnswer()
    checkAnswer()
}