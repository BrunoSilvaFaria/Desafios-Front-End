function relogio() {
  // Selecionando elementos
  const iniciar = document.querySelector(".iniciar");
  const pausar = document.querySelector(".pausar");
  const zerar = document.querySelector(".zerar");
  const relogioOutput = document.querySelector(".relogio");
  let segundos = 0;
  let timer;

  // Converte para os segundos
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  // Iniciar
  function funcIniciar() {
    relogioOutput.classList.remove("pausado");
    timer = setInterval(function () {
      segundos++;
      relogioOutput.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000)
  };

  iniciar.addEventListener('click', funcIniciar);

  // Zerar

  function funcZerar() {
    clearTimeout(timer);
    segundos = 0;
    relogioOutput.innerHTML = '00:00:00';
    relogioOutput.classList.remove("pausado");
  };

  zerar.addEventListener('click', funcZerar);

  // Pausar

  function funcPausar() {
    clearTimeout(timer);
    relogioOutput.classList.add("pausado")
  };

  pausar.addEventListener('click', funcPausar);
}

relogio();
