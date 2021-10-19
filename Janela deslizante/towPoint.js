let arr = ["a", "b", "a", "a", "c", "b"] 

function doisPonteiros( array ) {
    let sorted = array.sort();
    let diferent

    for ( let i = 0; i < sorted.length; i++ ){
        proximo = i + 1
        if ( sorted[i] != sorted[proximo] ) {
            diferent = sorted[i]
        }
    }
    return diferent
}
console.log('Com laço For:\n',doisPonteiros( arr )) 

/* Encontre o elemento que não se repete no array */

function encontraIsolado(vetor){
    let sorted = vetor.sort();
    console.log(sorted)
    let odd;
    sorted.forEach((element, index) => {
        let thisElement = sorted[index];
        let nextEle = sorted[index +1];

        if (thisElement == nextEle){
            index++;
        } else {
            odd = thisElement;
        }
    })
    return odd;
    
}
console.log( encontraIsolado( ["a", "b", "a", "a", "c", "b"] ) );

