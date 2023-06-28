// Elemento de entrada
const input = document.getElementsByClassName('input');
const button = document.querySelector('.button');

// Elementos de erro
const spanValue = document.querySelectorAll('.span-error--value');
const spanNum = document.querySelectorAll('.span-error--num');
const spanLetra = document.querySelectorAll('.span-error--let');
const spanMonth = document.querySelector('.span-error--month');
const spanYear = document.querySelector('.span-error--year');
const spanDigi = document.querySelector('.span-error--digi');

// Elementos de saida
const outputName = document.querySelector('.name-output');
const outputNum = document.querySelector('.number-output');
const outputMonth = document.querySelector('.month-output');
const outputYear = document.querySelector('.year-output');
const outputCv = document.querySelector('.cv-output');

// Função responsavél por aplicar borda
function border(rangeBorda, bool) {
    if (bool) {
        input[rangeBorda].style.borderColor = 'hsl(0, 100%, 66%)';
    } else {
        input[rangeBorda].style.borderColor = 'rgb(222, 221, 223)';
    }
}
// Função responsável por verificar se contém apenas LETRAS
function verificaLetra(input, range, rangeBorda) {
    const onlyNumbers = new RegExp('^[a-zA-Z\u00C0-\u00FF ]+$');
    input.value = input.value.toUpperCase();
    if (!onlyNumbers.test(input.value)) { 
        border(rangeBorda, true);
        spanLetra[range].style.display = 'block';
    } else {
        border(rangeBorda, false);
        spanLetra[range].style.display = 'none';
    }
}
// Função responsável por verificar se contém apenas NÚMEROS
function verificaNum(input, range, rangeBorda) {
    const onlyNumbers = new RegExp('^[0-9\u00C0-\u00FF ]+$');
    if (!onlyNumbers.test(input.value)) { 
        border(rangeBorda, true);
        spanNum[range].style.display = 'block';
    } else {
        border(rangeBorda, false);
        spanNum[range].style.display = 'none';
    }
}

// Função responsável por verificar o mês
function verificaMes(input, rangeBorda) {
    if (parseInt(input.value) < 1 || parseInt(input.value) > 12) {
        border(rangeBorda, true);
        spanMonth.style.display = 'block';
    } else {
        border(rangeBorda, false);
        spanMonth.style.display = 'none';
    }
    verificaNum(input, 1, 2);
}

// Função responsável por verificar o ano
function verificaAno(input, rangeBorda) {
    const anoAtual = new Date().getFullYear().toString().substring(2, 4);
    if (input.value < parseInt(anoAtual)) {
        border(rangeBorda, true);
        spanYear.style.display = 'block';
    } else {
        border(rangeBorda, false);
        spanYear.style.display = 'none';
    }
    verificaNum(input, 1, 3);
}

// Função responsável por verificar o cv
function verificaCv(input, rangeBorda) {
    if (input.value.length == 3) {
        border(rangeBorda, false);
        spanDigi.style.display = 'none';
    } else {
        border(rangeBorda, true);
        spanDigi.style.display = 'block';
    }
    verificaNum(input, 2, 4);
}


// Função responsável por deixar um valor padrão, caso o usuário não digite nada 
function verificaValor(input, outPut, text, rangeBorda, rangeSpan, indice) {
    if (input.value === '') {
        outPut.innerHTML = text;
        spanValue[rangeSpan].style.display = 'block';
        border(rangeBorda, true);
    } else {
        spanValue[rangeSpan].style.display = 'none';
        border(rangeBorda, false);
    }
}

// função responsável por chamar os erros
function testaErros(input, output, text, rangeBorda, rangeSpan, indice) {
    if (verificaValor(input, output, text, rangeBorda, rangeSpan, indice)) {
        return
    } else {
        switch (indice) {
            case 0:
                verificaLetra(input, 0, 0);
                break;
            case 1:
                verificaNum(input, 0, 1);
                break;
            case 2:
                verificaMes(input, 2);
                break;
            case 3:
                verificaAno(input, 3);
                break;
            case 4:
                verificaCv(input, 4);
                break;
            default:
                return;
        }
        
    }
}

// Função responsável por pegar / mostrar a entrada dos dados, tal como testar possiveis erros
function show(indice, input) {
    switch (indice) {
        case 0:
            outputName.innerHTML = input.value;
            testaErros(input, outputName, 'Jane Appleseed', indice, indice, indice);
            break;
        case 1:
            outputNum.innerHTML = input.value;
            testaErros(input, outputNum, '0000 0000 0000 0000', indice, indice, indice);
            break;
        case 2:  
            outputMonth.innerHTML = input.value;
            testaErros(input,outputMonth, '00', indice, indice, indice);
            break;
        case 3:  
            outputYear.innerHTML = input.value;
            testaErros(input,outputYear, '00', 3, 2, indice);
            break;
        case 4:
            outputCv.innerHTML = input.value;
            testaErros(input, outputCv, '000', 3, 3, indice);
            break;
        default:
            alert('Lamento, não foi selecionado nenhum input')
    }
}
// Ativa quando o input é alterado
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("input", () => {
        show(i, input[i])
    })
}

// Ativa quando o input é alterado
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("change", () => {
        show(i, input[i])
    })
}

// Ativa quando o input perde o foco
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("blur", () => {
        show(i, input[i]);
    })
}

// Ativa quando o button é clicado 
for (let i = 0; i < input.length; i++) {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        show(i, input[i]);
    })
}