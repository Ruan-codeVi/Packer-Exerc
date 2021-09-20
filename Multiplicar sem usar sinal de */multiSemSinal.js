/* Faça uma função que receba e multiplique dois numeros inteiros 
não negativos(maiores ou iguais a zero).
Não utilize o operador de multiplicação.
*/




function multiplicaSemOperador(numA = 0 , numB = 0) {
    let result = 0

    if ( numA == 0 || numB == 0 ) {
        return 0
    }
    for ( let i = 0; i < numA; i++ ){
        result+= numB
    }
    return result
}

// console.log(multiplicaSemOperador(0, 2));
// console.log(multiplicaSemOperador(1, 7));

// Segunda Forma

function multiSemSinal( numero, multiplicador ) {
    if ( numero === 0 || multiplicador === 0 ) return 0
    
    return multiplicador === 1 ? numero : numero + multiSemSinal( numero, multiplicador - 1 )
    /* essa linha executa uma especie de looping de função, 
    onde o primeiro parametro numero receber a soma de seu proprio valor o numero de vezes 
    do tamanho da parametro multiplicador por isso o -1.

    exemplo: numero = 2 multiplicador = 3

    a função vai se invocar o tamanho de multiplicador que é 3
    e numero vai somando seu proprio valor que é 2 o tamnho de multiplicador: 3
    
    1 exc: 2
    2 exc: 4
    3 exc: 6

    retornando numero com valor 6
    */
}
console.log(multiSemSinal(2,3));
console.log(multiSemSinal(3,1));





// let a = 5
// let b = 0
// console.log(a + b);