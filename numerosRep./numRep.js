/*
Faça uma função que descubra quantos numeros e quais números se repetem em
um array
*/

// let numeros = [1, 2, 2, 3, 1, 5, 6, 6, 7, 1, 2, 8, 9, 9]

function numRep( numeros ) {
    let repetidos = []
    let qtdRep = []
    let repetiu = 0
    for ( let i = 0; i < numeros.length; i++ ){
        let numero = 0
        
        if ( numero === 0 ) {
            numero = numeros[i]
        }
        for ( let j = i+1; j < numeros.length; j++ ){
            if ( numero === numeros[j] ) {
                repetiu++

                if ( j === numeros.length ) {
                    repetidos.push(numeros[j])
                }
           }
         }  
       
    }
     return   console.log(`repetiu ${repetiu} numeros repetidos ${repetidos}`);
   
}
numRep([1, 2, 2, 3, 1, 5, 6, 6, 7, 1, 2, 8, 9, 9]);