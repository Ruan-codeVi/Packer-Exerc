//Numeros pares
const numeros = [2,9,10,3,5,8]
const numerosPares = []

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 == 0){
        numerosPares.push(numeros[i])
        
    }
}
console.log(numerosPares)