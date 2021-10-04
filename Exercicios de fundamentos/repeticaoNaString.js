/* 
Faça uma função que receba um número como parâmetro e retorne uma string com 
o simbolo + na quantidade de vezes que o número passado no parâmetro

Exemplo:
  simboloMais(2) // retornará "++"
*/

function simboloMais( numero ) {
    let string = ''
    while (string.length < numero) {
        string += '+'
    }
    return string
}
 console.log(simboloMais(2));
 console.log(simboloMais(4));


// let letras = ''
// function teste() {
//     while ( letras.length < 3 ) {
//         letras += 'A'
//     }
//     return letras
// }
// console.log(teste());