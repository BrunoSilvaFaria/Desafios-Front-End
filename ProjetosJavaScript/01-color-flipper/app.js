const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
let colorName = document.querySelector('.color');
let button = document.querySelector('.btn')
let body = document.querySelector("body")

button.addEventListener('click', () => {
    select = Math.floor(Math.random() * (colors.length - 1) + 1);
    body.style.background = colors[select];
    colorName.innerHTML = colors[select];
})