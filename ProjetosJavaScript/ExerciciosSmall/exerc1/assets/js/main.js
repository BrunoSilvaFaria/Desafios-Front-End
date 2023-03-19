const peso = document.querySelector("#peso").value;
const altura = document.querySelector("#altura").value;
const button = document.querySelector("button");
const resultado = document.querySelector("#resultado");
let res
list = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3', 'Valor Inválido. Tente novamente']
let imc = peso / ((altura * altura))

button.addEventListener('click', function (e) {
    e.preventDefault();
    imc = imc.toFixed(2);
    if (imc < 18.5) {
        res = 0;
    } else if (imc > 18.5 || imc < 24.9) {
        res = 1;
    } else if (imc > 25 || imc < 29.9) {
        res = 2;
    } else if (imc > 30 || imc < 34.9) {
        res = 3;
    } else if (imc > 35 || imc < 39.9) {
        res = 4;
    } else if (imc > 40) {
        res = 5;
    } else {
        res = 6;
    }

    resultado.innerHTML = (`IMC está em ${imc}! Você está ${list[res]}`)
});