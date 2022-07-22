let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = 9999;


for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index]
    }
}
console.log(menorNumero);


// Exercício 6
// let impares = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 > 0) {
//         impares += 1;    
//     }
// }

// console.log(impares);

// Exercício 5
// let maiorNumero = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] > maiorNumero) {
//         maiorNumero = numbers[index]
//     }
// }

// console.log(maiorNumero);

// Exercício 2
// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index])
// }

// Exercício 3
// for (let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }

// console.log(soma / numbers.length);

// Exercício 4
// if (soma / numbers.length > 20) {
//     console.log("Valor maior que 20");
// }

// else {
//     console.log("Valor menor que 20");
// }

