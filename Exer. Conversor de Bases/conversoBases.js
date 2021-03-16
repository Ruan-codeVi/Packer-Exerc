function baseConveter(decimNumber, base){//123, 16
let pilhaResto = []
let resto
let baseString = ''
let digitos = '0123456789ABCDEF'

while(decimNumber > 0){//123, 7, 0
 resto = Math.floor(decimNumber % base)//restos: 11, 7
 pilhaResto.push(resto)//[11,7]
 decimNumber = Math.floor(decimNumber / base)//123/16, 7/16
  }
        //2
  while (pilhaResto.length > 0) {
      baseString += digitos[pilhaResto.pop()]//7,B
      //pilhaResto [11,7] retira ultimo = 7 -> pilhaResto[11]
      //pilhaResto[11] retira 11 -> pilhaResto[]
      
      /* digitos[pilhaResto(7)] -> digitos[7]
      digitos[7] = digitos na posição 7, retorna 7
      digitos[pilhaResto(11)] -> digitos[11]
      digitos[11] = digitos na posição 11, retorna B
                Posições 
    0-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15 
                 Valores 
    0 1 2 3 4 5 6 7 8 9 A  B  C  D  E   F
      
    */
  }
  return baseString
}
console.log(baseConveter(123,2))

/* Bases: Binario 2
          Octal 8
          Hexadecimal 16
*/ 