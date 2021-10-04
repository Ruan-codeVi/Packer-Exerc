/* Desenvolva uma função que receba quatro parametros numero, minino, maximo, inclusivo
retorne se o numero está entre minimo e maximo.
Quando o argumento inclui é passado como true ele faz a logica de incluir
vendo se numero passado é igual a minino e maximo. Caso não seja passado valor
verdadeiro para a parametro incluir, tera o valor como false como padrão 
portanto a logica tem que ser exclusiva não considerando 
se numero tem valor  igual a minimo e maximo.

Exemlo:
                    numero minimo = 1
                            2
                            3
                            4
                        numero = 5
                            6
                            7
                            8
                            9
                    numero Maximo = 10


* Ordem das posição de argumentos em relação com os parametros fazem diferença                    
*/

var numeroVar = 3
var maximoVar = 100
var minimoVar = 3

function estaEntre( minimoParam, numeroParam ,maximoParam,  incluir = false ) {
    // console.log( maximo );
   
    if ( incluir ) {
        return  numeroParam >= minimoParam && numeroParam <= maximoParam 
    }

    return numeroParam > minimoParam && numeroParam < maximoParam
}

console.log(estaEntre(minimoVar,numeroVar,maximoVar));
 console.log( estaEntre( minimoVar, numeroVar, maximoVar, true ) );
  
// 2ª Forma

// *Cuidado com a ordem dos argumentos e dos parametros da função tem que ser iguais

var numero1 = 15
var maximo1 = 100
var minimo1 = 160

function estaEntre1( minimo1, numero1, maximo1, incluir = false ) {
                         // Caso for true
    return incluir ? numero1 >= minimo1 && numero1 <= maximo1
                        // Caso for False
        : numero1 > minimo1 && numero1 < maximo1
}

console.log(estaEntre1(minimo1, numero1, maximo1));
console.log(estaEntre1(10, 10, 200, true));
