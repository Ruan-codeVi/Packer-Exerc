// Desenvolva uma função que receba dois parametros
// Primeiro parametro é quantidade de horas trabalhadas por mẽs
// Segundo parametro é valor que recebe por hora
// O retorno da função deve ser um String "Salario igual a R$X", onde x é o valor do salario final


function salarioNoMes(horasMes, valorHora) {
    let salarioFimMes = horasMes * valorHora

    return console.log(`Salário igual a R$ ${salarioFimMes} `);
}
salarioNoMes(150, 40.5)