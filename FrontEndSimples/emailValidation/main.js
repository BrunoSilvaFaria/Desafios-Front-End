const button = document.querySelector(".input__submit");
const input = document.querySelector(".input__camp");
const login = document.querySelector(".login");
const error = document.querySelector(".error");
const sucess = document.querySelector(".sucess");

button.addEventListener('click', (event) => {
    event.preventDefault();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
        error.style.display = 'none'
        login.style.display = 'none';
        sucess.style.display = 'block'
    } else {
        error.style.display = 'block'
    }

})