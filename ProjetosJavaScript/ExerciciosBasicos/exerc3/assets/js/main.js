// Select Items
const nome = document.querySelector("#nome");
const sobrenome = document.querySelector("#sobrenome");
const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const button = document.querySelector("button");
const resultado = document.querySelector("#resultado");
let res;
let pessoas = [];

button.addEventListener('click', (event) => {
    event.preventDefault();
    pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    });

    console.log(pessoas);
    res = `${nome.value} ${sobrenome.value}, tem ${peso.value}kg e mede ${altura.value}`;
    resultado.innerHTML += `<p> ${res} </p>`;
});
