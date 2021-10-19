/*
Algoritmos de busca sequencial e binaria

* Busca Sequencia ou Linear
Quando itens de dados são armazenados em uma coleção, 
como uma lista, dizemos que eles têm uma relação linear ou sequencial.
Cada item de dados é armazenado em uma posição relativa aos outros.
Em listas/arrays(vetores) JavaScript, as posições dos itens armazenados são relacionados com o indice
que inicia em 0 até o comprimento de itens armazenados.
          0  1 2 3 4 5 6 7 8 9
Exemplo: [10,9,8,7,6,5,4,3,2,1]


A busca sequencial consiste em visitar item por item
 do array seguindo a sequencia de indices.


* Busca Binária 

Em caso de buscas por valores ordenados de forma  NÚMERICA (CRESCENTES OU DECRESCENTE)  ou ALFABÉTICA, 
é possível fazer buscas muito mais rápidas. 

Ao invés de pesquisar a lista em sequência item por item, 

uma busca binária começará examinando o item do meio desse Array. 

Se esse item for aquele que estamos procurando, a busca termina. Se não for o item certo ja podemos
pensar se o numero ou letra, que queremos encontrar é maior que item que se encontra no meio do array
podemos desconsiderar toda a parte anterior  e o meio do array.
item = 55 
Exemplo: [17,20,26,31,44,54,55,65,77,93]
                  start|


Agora o array fica menor pra procurar, poderemos repitir o processo novamente.

[54,55,65,77,93]


*/ 

// Busca sequencial

let array = [10, 55, 1, 18, 15, 5, 7]
function buscaSequinc( arr, item ) {
    
    for ( let i = 0; i <= arr.length; i++ ) {
        if ( arr[i] === item ) {
           return true
        } else {
            return false
        }
    }
    
}
// console.log( buscaSequinc( array, 10 ) )


// Busca Binária

function buscaBina( arr, item) {
    let primItem = 0
    let ultimoItem = arr.length-1
    let achou = false
   
   
    while (primItem <= ultimoItem && !achou) {
        meioArray = Math.ceil( ( primItem + ultimoItem ) / 2 )
        if (arr[meioArray] === item) {
            achou = true
            // console.log(`var achou ${achou}  ${arr[meioArray]}`)
        } else {
            if ( item < arr[meioArray] ) {
                ultimoItem = meioArray - 1
            } else {
                primItem = meioArray + 1
            }
        }
    }
        return achou
}
let array02 = [17,20,26,31,44,54,55,65,77,93]
console.log(buscaBina(array02, 17))   