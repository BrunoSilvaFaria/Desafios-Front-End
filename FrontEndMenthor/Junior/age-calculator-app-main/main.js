// select elements
const label = document.querySelectorAll("label");
const input = document.querySelectorAll("input");
const button = document.querySelector("button");

const spanField = document.querySelectorAll(".span-field");
const spanDay = document.querySelector(".span-day");
const spanMonth = document.querySelector(".span-month");
const spanYear = document.querySelector(".span-year");

const diaTexto = document.querySelector("#dayText");
const mesTexto = document.querySelector("#monthText");
const anoTexto = document.querySelector("#yearText");

const diaInput = document.querySelector("#day");
const mesInput = document.querySelector("#month");
const anoInput = document.querySelector("#year");

// create Date object
const data = new Date();

// Verifica quantos dias tem um mes
function diasNoMes(mes, ano) {
    var quantDias = new Date(ano, mes + 1, 0);
    return quantDias.getDate();
}

// Show error / sucess
function formatStyles(inputs, error) {
    if (error) {
        for (i in inputs) {
            input[i].style.borderColor = "hsl(0, 100%, 67%)";
            label[i].style.color = "hsl(0, 100%, 67%)";
        }
        diaTexto.innerText = "--";
        mesTexto.innerText = "--";
        anoTexto.innerText = "--";
    } else {
        for (i in inputs) {
            input[i].style.borderColor = "hsl(0, 1%, 44%)";
            label[i].style.color = "hsl(0, 1%, 44%)";
        }

        diaTexto.innerText = diaRes;
        mesTexto.innerText = mesRes;
        anoTexto.innerText = anoRes;
    }
}
// Get date, check date and show to user
button.addEventListener('click', function (event) {
    event.preventDefault();

    // list of values of inputs fields
    const inputs = [diaInput.value, mesInput.value, anoInput.value];

    error = false;
    // check inputs required
    for (indice in inputs) {
        if (inputs[indice] === "") {
            error = true
            spanField[indice].style.display = "block";
            formatStyles(inputs, error);
        } else {
            spanField[indice].style.display = "none";

            // Check day
            if (diaInput.value > diasNoMes(data.getMonth(), data.getFullYear())) {
                spanDay.style.display = "block";
                error = true;
            } else {
                spanDay.style.display = "none";
            }

            // Check month
            if (mesInput.value > 12) {
                spanMonth.style.display = "block";
                error = true;
            } else {
                spanMonth.style.display = "none";
            }

            // Check day
            if (anoInput.value > data.getFullYear()) {
                spanYear.style.display = "block";
                error = true;
            } else {
                spanYear.style.display = "none";
            }

            // Calc date
            diaRes = (data.getDate() - diaInput.value);
            mesRes = (data.getMonth() - mesInput.value) + 1;
            anoRes = (data.getFullYear() - anoInput.value);

            if (diaRes < 0) {
                diaRes += diasNoMes(data.getMonth(), data.getFullYear());
            }

            if (mesRes <= 0) {
                mesRes += 12;
                anoRes -= 1;
            }
            formatStyles(inputs, error);
        }
    }
});
