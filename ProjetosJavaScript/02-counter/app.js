// Inicie o contador como 0
let contador = 0;

// Valor exibido no navegador
let valor = document.querySelector("#value");

// Selecionar os botoes
let button = document.querySelectorAll('.btn');
let decre = document.querySelector('.decrease');
let reset = document.querySelector('.reset');
let incre = document.querySelector('.increase');

// Função principal
// Tem como objetivo, detectar o botão pressionado, 
// sendo que testa qual botão foi, para que assim, executa 
// uma função. É responsável por atribuir valor e estilo.
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', () => {
    if (button[i].classList.contains("decrease")) {
      contador += - 1;
    } else if (button[i].classList.contains('reset')) {
      contador = 0;
    } else {
      contador += 1
    }
    if (contador > 0) {
      value.style.color = "green";
    }
    if (contador < 0) {
      value.style.color = "red";
    }
    if (contador === 0) {
      value.style.color = "#222";
    }

    valor.innerHTML = contador;
  })
}