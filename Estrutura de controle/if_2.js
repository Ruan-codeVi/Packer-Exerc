const nota = 9.5
const bomComportamento = true

if (nota >= 7 && bomComportamento)
    console.log('Parabéns')

if (nota < 7 || !bomComportamento)
    console.log('Precisa melhorar seu comportamento')

console.log('Fim\n')


// Caso curioso em javascript funcionamento estranho

if (nota >= 9); {
    console.log('Quadro de Honra!')
    console.log('Parabéns')
}
console.log('FIM')