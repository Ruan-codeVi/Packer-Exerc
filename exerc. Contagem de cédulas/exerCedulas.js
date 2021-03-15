/* Desafio
Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) 
onde o valor pode ser decomposto. 
As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. 
Na sequência mostre o valor lido e a relação de notas necessárias.

Entrada
Você receberá um valor inteiro N (0 < N < 1000000).

Saída
Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias,
 seguindo o exemplo de saída abaixo. 
 Após cada linha deve ser imprimido o fim de linha.
*/ 
let cedulas = [100,50,20,10,5,2,1]
let valor = 576
console.log(cedulas)
for(let nota of cedulas){
              //passando para inteiro pq não existe 5.76 divisão de 576 por
let qtdNotas = parseInt (valor / nota)
console.log(`${qtdNotas} nota(s) de ${nota},00 `)
valor = valor % nota
}