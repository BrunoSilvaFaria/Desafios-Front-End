// Select items
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const button = document.querySelector("button");
const resultado = document.querySelector("#resultado");

// Exercicio 1-) Pegue dois números e mostre o maior:

// Function to test and show result
// button.addEventListener('click', (event) => {
//     event.preventDefault();
//     if (num1.value > num2.value) {
//         resultado.innerHTML = `${num1.value} é maior`;
//     } else if (num1.value === num2.value) {
//         resultado.innerHTML = "Ambos os números são iguais";
//     } else {
//         resultado.innerHTML = `${num2.value} é maior`;
//     }
// });

// Escreva uma função ePaissagem, a qual recebe dois numeros e define se uma imagem está
// em modo paissagem ou não, sendo largura e altura
// button.addEventListener('click', (event) => {
//     event.preventDefault();
//     if (num1.value > num2.value) {
//         resultado.innerHTML = "Modo paisagem";
//     } else {
//         resultado.innerHTML = "Modo retrato";
//     }
// });

// Escreva um programa que recebe 1 numero
// se for divisivel por 3 = Fizz;
// se for divisivel por 5 = Buzz;
// se for divisivel por 3 e 5 = FizzBuzz;
// se não for divisivel por 3 e 5 = próprio número;

button.addEventListener('click', (event) => {
    event.preventDefault();
    // if (typeof num1 === "number")
    if (num1.value % 3 === 0 && num1.value % 5 === 0) { return resultado.innerHTML = "FizzBuzz"; }
    else if (num1.value % 3 === 0) { return resultado.innerHTML = "Fizz"; }
    else if (num1.value % 5 === 0) { return resultado.innerHTML = "Buzz"; }
    else { return resultado.innerHTML = num1.value; }
});



