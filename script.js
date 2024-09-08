let option = parseInt(prompt(` Escolha uma opção:\n 1:\n 2:\n 3:\n 4:\n 5: Encerrar`))
while (option !== 5 ) {
switch (option) {
    case 1:
        alert('1')
        break
    case 2:
        alert('Você escolheu a opção 2')
        break
    case 3:
        alert('Você escolheu a opção 3')
        break
    case 4:
        alert('Você escolheu a opção 4')
        break
    default:
        alert('Opçao Invalida')                    
}
    option = parseInt(prompt(` Escolha uma opção:\n 1:\n 2:\n 3:\n 4:\n 5: Encerrar`)) 
}
alert('Programa encerrado')