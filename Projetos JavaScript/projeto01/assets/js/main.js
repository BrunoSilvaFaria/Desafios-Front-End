let cores = ["red", "blue", "green"];
button = document.getElementById("btn");
cor = document.getElementById("cor");
background = document.getElementById("background");
let index = 0
button.addEventListener('click', function(){
	index = Math.round(Math.random() * (cores.length - 1));
	background.style.background = cores[index];
	cor.innerHTML = cores[index];
});
