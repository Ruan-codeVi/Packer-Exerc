/* 2 Dicas de código- Como evitar 'amaranhado' de if/else-if, 
utilizando o padrão de retorno inicial.
*/

// Exemplo só utilizando if/else-if
function saudacaoDoDia( hora ) {
    let messagem = null

    if ( hora < 12 ) {
        messagem = 'Bom dia'
    } else if ( hora < 18 ) {
        messagem = 'Boa tarde'
    } else {
        messagem = 'Boa noite'
    }

    return messagem
}
console.log( saudacaoDoDia( 19 ) );

// Utilizando padrão de retorno inicial
function saudacaoDoDia2( hora ) {
    if ( hora < 12 ) {
        return 'Bom dia- Padrão de retorno inicial'
    }
    if ( hora < 18 ) {
        return 'Boa tarde- Padrão de retorno inicial'
    }
    return 'Boa noite- Padrão de retorno inicial'
}
console.log(saudacaoDoDia2(22));