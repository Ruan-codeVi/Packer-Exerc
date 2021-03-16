function decimToBin(decimNumber){//23
    let pilhaResto = [], resto, binarString = ''
    //23, 11, 5, 2, 1, 0
    while (decimNumber > 0) {
        resto = Math.floor(decimNumber % 2) //restos:1, 1, 1, 0, 1
        pilhaResto.push(resto)//[1,1,1,0,1]
        decimNumber = Math.floor(decimNumber / 2)//11/2, 5/2, 2/2,1/2
    }    //5, 4, 3, 2, 1, 0
    while (pilhaResto.length > 0){
    //[11101]->[1110]->[111]->[11]->[1]->[]
        binarString += pilhaResto.pop().toString()//1,0,1,1,1
        // console.log(binarString)
    }
        
    return binarString
}
console.log(decimToBin(23))

/* 1º Dentro do primer. laço de repetição while resto recebe, o resto da divisão entre 23 / 2
da 0,5, mais usando o método math.floor, ele arredonda pra 1

1.1 pilhaResto puxa o resultando que foi armazenado em resto que é 1, 
pilhaResto[1]

1.2 decimNumber recebe a divisão de decimNumber por 2, 
23/2 da 11,5 com math.floor fica 11

repete o bloco até que while de condição false
-----------------------------------------------
2º segundo laço while compara o tamanho do array pilhaResto que é 5

2.1 binarString soma e recebe a cada repetição do bloco, 
pilhaResto.pop() acessa os valores do Array [11101], retira e retorna o ultimo valor desse array e ja transforma em string
através do método toString()
                        
                Raio X
while (pilhaResto.length(5) > 0)
pilhaResto.pop() acessa -> [11101] retira o ultimo valor do array [1110] transforma em texto

binarString = 1
                repete
while (pilhaResto.length(4) > 0)
pilhaResto.pop() acessa -> [1110] retira o ultimo valor do array [111] transforma em texto

binarString = 10
                    repete
while (pilhaResto.length(3) > 0)
pilhaResto.pop() acessa -> [111] retira o ultimo valor do array [11] transforma em texto

binarString = 101
                    repete
while (pilhaResto.length(2) > 0)
pilhaResto.pop() acessa -> [11] retira o ultimo valor do array [1] transforma em texto

binarString = 1011
                    repete
while (pilhaResto.length(1) > 0)
pilhaResto.pop() acessa -> [1] retira o ultimo valor do array [] transforma em texto

binarString = 10111

Como o tamanho do array ficou zero a condição passa a ser false
*/ 
