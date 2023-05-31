const icon = document.querySelector(".toggle-button");
const menu = document.querySelector(".link__conteiner");

icon.addEventListener('click', function () {
    menu.classList.toggle('active')
});