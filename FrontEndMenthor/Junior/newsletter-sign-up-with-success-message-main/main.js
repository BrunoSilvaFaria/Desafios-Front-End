const input = document.querySelector('.input');
const button = document.querySelector('.button');

function verificaEmail(email) {
    const emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
}
button.addEventListener('click', (e) => {
    e.preventDefault();
    let res = verificaEmail(input.value);

    if (res) {
        document.querySelector('.main').style.display = 'none';
        document.querySelector('.sucess').style.display = 'block';
        document.querySelector('.label--error').style.display = 'none'
        input.classList.remove('input--error');
    } else {
        document.querySelector('.main').style.display = 'block';
        document.querySelector('.sucess').style.display = 'none';
        document.querySelector('.label--error').style.display = 'block';
        input.classList.add('input--error');
    }
});