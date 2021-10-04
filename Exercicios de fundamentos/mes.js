// Crie uma função que receba numeros de 1 a 12 e retorne o mês do ano correspondente

// Tem algumas formas de implementar esse exercicio: Com Array, Obj litaral, if/else-if, switch/case e 



// 1ª Forma A melhor - Com array
let mesesCalendario = (mesDigito)=>{
    let mesesArray = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto','Setembro','Outubro','Novembro','Dezembro']
        
        if ( mesDigito > 0 && mesDigito <= 12 ) {
            return console.log(`\n${mesesArray[mesDigito -1]} - Array`); 
        }
        return console.log('\nDigite números de 1 a 12 - Array');
    }
    
    mesesCalendario(10);


// 2ª Forma Muito boa- Obj Literal- Solução mais  clear e mais facil de compreender

function calendario( mesDigito ) {
    const meses = {
        1: '\nJaneiro- Obj literal',
        2: '\nFevereiro- Obj literal',
        3: '\nMarço- Obj literal',
        4: '\nAbril- Obj literal',
        5: '\nMaio- Obj literal',
        6: '\nJunho- Obj literal',
        7: '\nJulho- Obj literal',
        8: '\nAgosto- Obj literal',
        9: '\nSetembro- Obj literal',
        10: '\nOutubro- Obj literal',
        11: '\nNovembro- Obj literal',
        12: '\nDezembro- Obj literal',
        default: '\nDigite número de 1 a 12 somente- Obj literal'
    }
    // Retornando o obj[parametro da função]
    return meses[mesDigito] || meses.default     
}

 console.log( calendario( 12 ) );



// 3ª Forma - Com Switch Case

function calendario2( mesDigito ) {
    switch (mesDigito) {
        case  1:
            return '\nJaneiro - Switch/case'
        
        case  2:
            return '\nFevereiro - Switch/case'
        
        case  3:
            return '\nMarço - Switch/case '
        
        case  4:
            return '\nAbril - Switch/case'
        
        case  5:
            return '\nMaio - Switch/case'
        
        case 6:
            return '\nJunho - Switch/case'
            
        case  7:
            return '\nJulho - Switch/case'
        
        case  8:
            return '\nAgosto - Switch/case'
        
        case  9:
            return '\nSetembro - Switch/case'
        
        case  10:
            return '\nOutubro - Switch/case'
        
        case  11:
            return '\nNovembro - Switch/case'
        
        case 12:
            return '\nDezembro - Switch/case'
        
        default:
            return '\nDigite numero somente de 1 a 12 - Switch/case'      
    }
}
console.log( calendario2( 1 ) );


// 4ª Forma -  Com if/else-if
let calendario03 = (mesDigito) => {
    if ( mesDigito == 1 ) {
        return '\nJaneiro- if/else-if'
    } else if (mesDigito == 2) {
        return '\nFevereiro- if/else-if'
    }else if (mesDigito == 3) {
        return '\nMarço- if/else-if'
    }else if (mesDigito == 4) {
        return '\nAbril- if/else-if'
    }else if (mesDigito == 5) {
        return '\nMaio- if/else-if'
    }else if (mesDigito == 6) {
        return '\nJunho- if/else-if'
    }else if (mesDigito == 7) {
        return '\nJulho- if/else-if'
    }else if (mesDigito == 8) {
        return '\nAgosto- if/else-if'
    }else if (mesDigito == 9) {
        return '\nSetembro- if/else-if'
    }else if (mesDigito == 10) {
        return '\nOutubro- if/else-if'
    }else if (mesDigito == 11) {
        return '\nNovembro- if/else-if'
    }else if (mesDigito == 12) {
        return '\nDezembro- if/else-if'
    } else {
        return '\nDigite numero somente de 1 a 12- if/else-if'   
    }
}

 console.log(calendario03(2)); 