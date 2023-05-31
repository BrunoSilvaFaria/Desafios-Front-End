// const inputTarefa = document.querySelector('.input-tarefa');
// const btnTarefa = document.querySelector('.btn-tarefa');
// const tarefas = document.querySelector('.tarefas');

// function criaLi() {
//   const li = document.createElement('li');
//   return li;
// }

// inputTarefa.addEventListener('keypress', function(e) {
//   if (e.keyCode === 13) {
//     if (!inputTarefa.value) return;
//     criaTarefa(inputTarefa.value);
//   }
// });

// function limpaInput() {
//   inputTarefa.value = '';
//   inputTarefa.focus();
// }

// function criaBotaoApagar(li) {
//   li.innerText += ' ';
//   const botaoApagar = document.createElement('button');
//   botaoApagar.innerText = 'Apagar';
//   botaoApagar.setAttribute('class', 'apagar');
//   botaoApagar.setAttribute('title', 'Apagar esta tarefa');
//   li.appendChild(botaoApagar);
// }

// function criaTarefa(textoInput) {
//   const li = criaLi();
//   li.innerText = textoInput;
//   tarefas.appendChild(li);
//   limpaInput();
//   criaBotaoApagar(li);
//   salvarTarefas();
// }

// btnTarefa.addEventListener('click', function() {
//   if (!inputTarefa.value) return;
//   criaTarefa(inputTarefa.value);
// });

// document.addEventListener('click', function(e) {
//   const el = e.target;

//   if (el.classList.contains('apagar')) {
//     el.parentElement.remove();
//     salvarTarefas();
//   }
// });

// function salvarTarefas() {
//   const liTarefas = tarefas.querySelectorAll('li');
//   const listaDeTarefas = [];

//   for (let tarefa of liTarefas) {
//     let tarefaTexto = tarefa.innerText;
//     tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
//     listaDeTarefas.push(tarefaTexto);
//   }

//   const tarefasJSON = JSON.stringify(listaDeTarefas);
//   localStorage.setItem('tarefas', tarefasJSON);
// }

// function adicionaTarefasSalvas() {
//   const tarefas = localStorage.getItem('tarefas');
//   const listaDeTarefas = JSON.parse(tarefas);

//   for(let tarefa of listaDeTarefas) {
//     criaTarefa(tarefa);
//   }
// }
// adicionaTarefasSalvas();

// Select elements:
const inputTarefa = document.querySelector(".input-tarefa");
const buttonTarefa = document.querySelector(".btn-tarefa");
const listaTarefas = document.querySelector(".tarefas");

// Limpa input
function limpaInput(input) {
    input.value = "";
    input.focus();
}

// Cria botão para deletar tarefa
function deletarTarefa(li) {
    li.innerText += " ";
    const buttonApagar = document.createElement("button");
    buttonApagar.innerText = "Apagar";
    buttonApagar.setAttribute('class', 'apagar');
    buttonApagar.setAttribute('title', 'Apagar essa tarefa?');
    li.appendChild(buttonApagar);
}

// Cria li
function criaLi() {
    li = document.createElement("li");
    return li
}

// Cria Tarefa
function criaTarefa(input) {
    criaLi();
    li.innerText = input;
    listaTarefas.appendChild(li);
    limpaInput(inputTarefa);
    deletarTarefa(li);
    salvarTarefas()
}

// Pega tarefa e cria
buttonTarefa.addEventListener('click', () => {
    if (inputTarefa.value === "") { return }
    else {
        criaTarefa(inputTarefa.value);
        salvarTarefas();
    };
})

// Verifica se enter foi ativado
inputTarefa.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})
// inputTarefa.addEventListener('keypress', function(e) {
//   if (e.keyCode === 13) {
//     if (!inputTarefa.value) return;
//     criaTarefa(inputTarefa.value);
//   }
// });


// Deleta Tarefa
document.addEventListener('click', (e) => {
    const elem = e.target;

    if (elem.classList.contains("apagar")) {
        elem.parentElement.remove();
        salvarTarefas();
    }
})

// Salva Tarefa
function salvarTarefas() {
    const liTarefas = listaTarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();


