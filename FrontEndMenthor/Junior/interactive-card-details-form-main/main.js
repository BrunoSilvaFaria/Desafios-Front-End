// Elemento de entrada
const input = document.getElementsByClassName('input');
const spanValue = document.querySelectorAll('.span-error--value');
const spanNum = document.querySelectorAll('.span-error--num');
const spanMonth = document.querySelector('.span-error--month');
const spanYear = document.querySelector('.span-error--year');
const spanDigi = document.querySelector('.span-error--digi');

// Elementos de saida
const outputName = document.querySelector('.name-output');
const outputNum = document.querySelector('.number-output');
const outputMonth = document.querySelector('.month-output');
const outputYear = document.querySelector('.year-output');
const outputCv = document.querySelector('.cv-output');

// Mostra o erro

// Função responsável por verificar se contém apenas digitos
function verificaNum(input, range, error) {
    const onlyNumbers = new RegExp('^[0-9]+$')
    if (!onlyNumbers.test(input.value)) { 
        error = true;
        border(input, range, error);
        // spanNum[range].style.display = 'block';
        return true;
    } else {
        error = false;
        border(input, range, error);
        // spanNum[range].style.display = 'none';
        return false;
    }
}

// Função responsável por verificar o mês
function verificaMes(input) {
    valor = parseInt(input.value);
    if (valor < 1 || valor > 12) {
        border(input, true);
        spanMonth.style.display = 'block';
    } else {
        border(input, false);
        spanMonth.style.display = 'none';
    }
}

// Função responsável por verificar o ano
function verificaAno(input) {
    const anoAtual = new Date().getFullYear().toString().substring(2, 4);
        if (input.value < parseInt(anoAtual)) {
            border(input, true);
            spanYear.style.display = 'block';
        } else {
            border(input, false);
            spanYear.style.display = 'none';
        }
}

// Função responsável por verificar o cv
function verificaCv(input) {
    if (input.value.length == 3) {
        border(input, false);
        // verificaNum(input, false, 2);
        spanDigi.style.display = 'none';
    } else {
        border(input, true);
        // verificaNum(input, true, 2);
        spanDigi.style.display = 'block';
    }
}

// Função responsavél por aplicar borda
function border(bool, range) {
    valor = range;
    if (bool) {
        console.log(valor);
        input[range].style.borderColor = 'hsl(0, 100%, 66%)';
    } else {
        input.style.borderColor = 'rgb(222, 221, 223)';
    }
}

// Função responsável por deixar um valor padrão, caso o usuário não digite nada 
function placeholder(input,outPut, text, range) {
    if (input.value === '') {
        console.log(range)
        outPut.innerHTML = text;
        border(true, range);
        spanValue[range].style.display = 'block';
    } else {
        border(false, range);
        spanValue[range].style.display = 'none';
    }
}

function testaErros(input, output, text, range) {
    if (placeholder(input, output, text, range)) {
    } else {
        if (verificaMes(input)) return
        // verificaAno(input);
        // verificaCv(input);
        // verificaMes(input);
    }
}

// função responsável por chamar os erros

// Função responsável por pegar / mostrar a entrada dos dados
function show(indice, input) {
    switch (indice) {
        case 0:
            outputName.innerHTML = input.value;
            testaErros(input, outputName, 'Jane Appleseed', indice);
            // testaErros();
            break;
        case 1:
            outputNum.innerHTML = input.value;
            testaErros(input, outputNum, '0000 0000 0000 0000', input);
            // verificaNum(input,false, 1);
            // testaErros();
            break;
        case 2:  
            outputMonth.innerHTML = input.value;
            testaErros(input,outputMonth, '00', 0);
            // verificaMes(input);
            // testaErros();
            break;
        case 3:  
            outputYear.innerHTML = input.value;
            testaErros(input,outputYear, '00', indice);
            // verificaAno(input);
            // testaErros();
            break;
        case 4:
            outputCv.innerHTML = input.value;
            testaErros(input, outputCv, '000', indice);
            // verificaCv(input);
            // testaErros();
            break;
        default:
            alert('Lamento, não foi selecionado nenhum input')
    }
}

// Ativa quando o input é alterado
// for (let i = 0; i < input.length; i++) {
//     input[i].addEventListener("change", () => {
//         show(i, input[i])
//     })
// }

// Ativa quando o input perde o foco
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("blur", () => {
        show(i, input[i]);
    })
}
