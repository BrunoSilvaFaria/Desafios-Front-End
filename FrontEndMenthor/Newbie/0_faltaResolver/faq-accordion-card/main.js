let question = document.querySelectorAll(".question__conteiner");
let anwsern = document.querySelectorAll(".question__anwsern");

for (let i = 0; i < question.length; i++) {
    question[i].addEventListener('click', function () {
        if (anwsern[i].style.display === "none") {
            anwsern[i].style.display = "block";
        }
    });
}

