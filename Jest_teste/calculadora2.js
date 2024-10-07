function calculadora(operacao, numeros) {
    let resultado = 0

    switch (operacao) {

 //adição       
        case '+':

            for (let i = 0; i < numeros.length; i++) {
                resultado += numeros[i];

            }
            return resultado

 //subtração           
        case '-':

            for (let i = 1; i < numeros.length; i++) {
                resultado -= numeros[i];

            }
            return resultado

//multiplicação
        case '*':

            for (let i = 0; i < numeros.length; i++) {
                resultado *= numeros[i];

            }
            return resultado

//divisão
        case '/':

            for (let i = 0; i < numeros.length; i++) {
                resultado /= numeros[i];

            }
            return resultado

        default:
            break;
    }
}

console.log(calculadora('+' , [1, 53, 6, 8]));
console.log(calculadora('-' , [1, 53, 6, 8]));
console.log(calculadora('*' , [1, 53, 6, 8]));
console.log(calculadora('/' , [1, 53, 6, 8]));


module.exports = calculadora;