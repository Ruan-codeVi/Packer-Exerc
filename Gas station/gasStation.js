/*                  Dificulade Nivel médio

Existem N postos de gasolina ao longo de uma rota circular,
onde a quantidade de gasolina presente nesses postos de posições N,
tem valor Y de gasolina para reabastecer o tanque.

Você tem um carro com tanque de gasolina limitado e
custa (Z) da gasolina anterior para viajar do posto atual para o 
proximo posto ou seja (Valor_Gasolina_atual - valor_custoViagem)
 
Você começa a jornada com um tanque vazio em um dos postos de gasolina.

Duas matrizes de números inteiros e positivos, array Y com os valores da gasolina  
e array Z com os valores dos custos das viagens.

O desafio é retornar o índice do posto de gasolina inicial que possibite
viajar ao redor do circuito uma vez no sentido horário, ou seja 
iniciar em posto X dar a volta e parar nesse mesmo posto X, se possivel
se não for possivel retorne -1.

* Se houver uma solução, é garantido que será única.


*Dica antes de codificar aplicar testes do tipo:

Se somatório de todos os Deltas for < 0 (menor que zero) é impossivel
Descobresse somando todos os valores que iam abastecer o tanque e subtrai
com o soma de todos os custos de viagens
Exemplo: gasolina [2, 3, 4] = 9    
                 9   - 10        Delta = -1
         custos [3, 4, 3] = 10      

A estação inical o valor inicial abestecido tem que ser maior
que o custo de viagem para o proximo posto.
Delta >=0 (maior ou igual 0)
*/




// Complexidade de tempo N linear ou O(N)
let gasolina =    [1, 2, 3, 4, 5] //[2, 3, 4]
let custoViagem = [3, 4, 5, 1, 2] //[3, 4, 3]

function gasStation(gasolina, custoViagem) {
    let numeroPostos = gasolina.length
    let postoAtual = 0
    let tanque = 0
    let total = 0
    for (let i = 0; i < numeroPostos; i++) {
        // console.log(gasolina[i], custoViagem[i])
        tanque += gasolina[i] - custoViagem[i]
        //  console.log('Valor atual',tanque)
        if (tanque < 0) {
            tanque = 0
            console.log('valor do tanque',tanque);
            postoAtual = i + 1
            // console.log('Posto Atual', postoAtual)
        }

        total += gasolina[i] - custoViagem[i]
        //  console.log( 'Index', i )
        //  console.log( 'Total', total )  
    }

    return total < 0 ? -1 : postoAtual

}
console.log(gasStation(gasolina, custoViagem))


