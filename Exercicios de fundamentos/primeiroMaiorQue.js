// Faça uma função que receba dois numeros e retorne se o primeiro num é maior que segundo

let primeiroMaiorQue = ( num1, num2 ) => {
  
 return num1 >= num2 && typeof num1 == typeof num2

      // if ( typeof num1 != typeof num2 ) {
    //     return false
    // }
    // return num1 >= num2
}
console.log(primeiroMaiorQue(5, 0));
console.log(primeiroMaiorQue(0, "0"));
console.log(primeiroMaiorQue('zero', 'zero'));


