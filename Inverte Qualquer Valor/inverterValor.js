/* 
Faça uma função que receba um valor do tipo booleano ou numérico.
Se o argumento passado for do tipo booleano o valor que for passado vai
ter seu valor invertido. Exemplo se passou true como argumento o retorno sera false
Se for do tipo numérico o retorno devara ser o inverso. Exemplo Positivo vira negatio e vice virsa
Se o argumento passado não for nenhum dos dois retorne "Booleano  ou numerico são esperados,
o argumento é do tipo..."
*/


function inverterValor( valor ) {
    let tipo = typeof valor
    let inverteNum;

    if ( tipo == 'number' && valor > 0 || tipo == 'number' && valor < 0 ) {
        inverteNum = valor * -1
        return inverteNum 
    }
    if ( tipo == 'boolean' ) {
        return !valor
    }
    
    return `booleano ou numérico são esperados, mas o argumento passado é do tipo: ${tipo}`
}

console.log(inverterValor( 'Cachorro' ));
console.log(inverterValor( false ));
console.log(inverterValor( -45 ));
console.log(inverterValor( 10000 ));



// let num = 20
// let positivoConver = ( num > 0 ) ? num * -1 : num
// console.log(positivoConver);

