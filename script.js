let number1 = Number(prompt("Digite o primeiro número"))
let number2 = Number(prompt("Digite o segundo número"))

function calcular(number1, number2){
    let soma = number1 + number2
    let subtracao = number1 - number2
    let mutiplicacao = number1 * number2
    let divisao = number1 / number2
    let resto = number1 % number2

    alert(`A soma dos dois números: ${soma}`)
    alert(`A subtração dos dois números: ${subtracao}`)
    alert(`A multiplicação dos dois números: ${mutiplicacao}`)
    alert(`A divisão dos dois números: ${divisao}`)
    alert(`O resto da divisão dos dois números: ${resto}`)

    if(soma % 2 === 0){
        alert("A soma dos dois números é par: " + soma)
    } else {
        alert("A soma dos dois números é impar: " + soma)
    }

    if(number1 == number2){
        alert("Os números são iguais")
    } else {
        alert("Os números são diferentes")
    }
}

calcular(number1, number2)