let button = document.querySelectorAll('.btn__rate');
let submit = document.querySelector('.button__submit');
var valor
// === Função Responsável por escolher o rate ===
button.forEach(function(button){
  // === Atribui o rate ao span ===
  button.addEventListener('click', function(){
    document.getElementById("rate").innerHTML =  button.value;
    button.style.background = "#778899";
    button.style.color = "#fff";
    valor = button.value
  })
  // === Mostra a Tela ===
  submit.addEventListener('click', function(){
    if (valor >= 1 || valor <= 5 ){
      document.querySelector('.tela__rate').style.display = 'none';
      document.querySelector('.tela__agra').style.display = 'block';
    }
  })
});
