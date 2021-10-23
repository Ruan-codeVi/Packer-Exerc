/**
 * A nossa pessoa deseja atravessar a rua. Inicialmente, a pessoa 
  está localizada em uma posição X, e deseja chegar a uma posição maior ou igual a Y.
A cada passo que a nossa pessoa dá, ela percorre uma distância fixa Z. Na nossa função, precisaremos:

Contar a quantidade mínima de passos que a nossa pessoa precisa dar para atravessar a rua, ou seja, 
sair da posição X e chegar ou ultrapassar a posição Y.
Em nossa função, precisamos passar os parâmetros.

Por exemplo, daremos 3 números inteiros, X, Y e Z,
  e a função deverá retornar um número mínimo de passos que inicie da posição X
  e vá para uma posição maior ou igual a Y.
 
*/

// Gambiarra
function atravessarRua(inicio, fim, passo) {
    let inicioOrin = inicio
    let fimOrin = fim

    while ( inicio < fim ) {
        inicio += passo
    }
    if ( inicio >= fim ) {
        qtpassos = fimOrin - inicioOrin
    }
    return qtpassos
}
// console.log( atravessarRua( 6, 70, 1 ) )

function atravessarRuaRefat(inic, fim, passo) {
    let qtdPassos = ( ( fim - inic ) / passo )
    
    if ( Number.isInteger( qtdPassos ) ) {
        return qtdPassos;
    } else {
        let qtdPassosInt = Math.floor( qtdPassos + 1 )
        // daria 16,5 mas por causa do math.floor ele arredonda pra 17
        return qtdPassosInt
    } 
}
console.log(atravessarRuaRefat(6,39,2))

