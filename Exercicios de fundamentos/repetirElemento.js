/*
 *Faça uma função que receba dois parâmetros.
 O primeiro parametro é o elemento  que se repetirá,
 equanto o segundo será o número de vezes que haverá a repetição.
 o retorno deve ser um array.

 Exemplo: repetir("código", 2)
                 retornará ["código", "código"]
 */

function repeteElemento( elemento, numRep ) {
    let saida = []

    while ( saida.length < numRep ) {
             saida.push(elemento)
    }
    return saida
}

console.log(repeteElemento("codigo", 2));
console.log(repeteElemento(7, 3));