/* 1. Desafio
 Crie uma lista de produtos
 A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html.
 Mostre no console quantos produtos tem nessa lista.
 Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.
 Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisão que o produto não foi encontrado.
 Remova o segundo item da sua lista.

 2. Desafio
 Crie uma lista de apenas numeros 1,3,5,7,0,9​
 Ordene essa lista do menor para o maior e mostro no console.
 Retire o primeiro numero desta lista.
 Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]
 
 3. Desafio
 Crie uma string que contenha o dia de hoje, exemplo: 

let hoje = '20/07/2019';

 Separe essa data em variaveis dia onde contenha apenas o dia,
  mes onde contenha apenas o mes, 
  e ano onde contenha apenas o ano.
 */ 

// 1 Desafio  
/* Criando uma lista de produtos*/ 
let produtos = ['Computador','Telefone','Mouse','Teclado']
console.log(`Lista de produtos ${produtos}`)
// Mostre no console quantos produtos tem nessa lista.
console.log(`Produtos: ${produtos.length}`)
// Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.
console.log( produtos.filter(produto => produto !=="Mouse"))
// Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisão que o produto não foi encontrado.
let procurarProd = produtos.find(comput => comput==='Computador')
if(procurarProd){
    console.log(`Existe ${procurarProd} na lista produtos`)
}else{
    console(`Nao existe ${procurarProd} na lista produtos`)
}
//  Remova o segundo item da sua lista produtos
produtos.splice(1,1) // no splice tem usar dois param um é a posição e outro é quantidade de elemento a ser removido
console.log(produtos)

// 2 Desafio Numeros

let numeros = [1,3,5,7,0,9]
console.log(`Array numeros ${numeros}`)
// Ordene essa lista do menor para o maior
console.log(`Menor para Maior ${numeros.sort()}`)
// Retirando o primeiro item da lista
console.log(`Item removido ${numeros.shift()}`)
// Invertendo ordem da lista
console.log(`Nova ordem ${numeros.reverse()}`)

// Desafio 3
let hoje = '20/07/2019';
const [dia, mes, ano] = hoje.split('/');
//  array de variaveis
console.log(`Dia: ${dia}`)
console.log(`Mês: ${mes}`)
console.log(`Ano: ${ano}`)