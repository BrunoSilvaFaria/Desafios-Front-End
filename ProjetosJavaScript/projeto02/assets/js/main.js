let valor = document.querySelector("#valor");
let subtrair = document.querySelector("#subtrair")
let resetar = document.querySelector("#resetar")
let somar = document.querySelector("#somar")
let contador = 0

function alteraValor(){
	valor.innerHTML = contador;
}
subtrair.addEventListener('click', function(){
	contador -= 1;
	alteraValor();
});

resetar.addEventListener('click', function(){
	contador = 0;
	alteraValor();
});

somar.addEventListener('click', function(){
	contador += 1;
	alteraValor();
});

