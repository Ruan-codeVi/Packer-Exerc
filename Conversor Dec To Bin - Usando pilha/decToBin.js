// Faça uma função que receba numero decimais para binarios
// Utilizando a estrutura de pilha


function decToBin( deciNum ) {
    let pilhaRestos = [],
        resto,
        binarioString = '';
    
    while ( deciNum > 0 ) {
        resto = Math.floor( deciNum % 2 )  
/* math.floor aqui ele vai pegar só resto das divisões e arrendodar 
   Exemplo o resto da divisão de 25 é 12,50 ele pega os restos e retorna */  
    
        pilhaRestos.push( resto )
        // console.log('\n',pilhaRestos);
        deciNum = Math.floor( deciNum / 2 )
        // console.log('\nResto da divisão por 2: ',deciNum)
    }
    while ( pilhaRestos.length > 0 ) {
        binarioString += pilhaRestos.pop().toString()
        // console.log('\nSegundo while',binarioString);
    }
    return binarioString
}

console.log( decToBin( 23 ) );

/* Explicando
  No primeiro loop while 
1 resto recebe a sobra da divisão por 2 de deciNum

2 pilhaResto puxa o valor de resto.

3 A var deciNUm, recebe agora sua divisão por 2
trazendo só divisão inteira.

4 Ai repete até que deciNum até que ele seja maior que 0

Segundo loop while
1 A var binaString, recebe o ultimo elemento removido
do array pilhaRestos convertido em string

2 Isso vai repitindo até que pilhaString não tenha
mais elementos por causa do pop, encerrando a condição
verdadeira do while
*/