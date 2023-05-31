const data = new Date();
const diaSemana = data.getDay();
const diaMes = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const minut = data.getMinutes();
let horaA = data.getTime();
horaA = data.getMilliseconds()
const seg = data.getSeconds();

const mensagem = document.querySelector('h1');

listaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabado'];
listaMes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

res = `${listaSemana[diaSemana]}, ${diaMes} de ${listaMes[mes]} de ${ano}, às ${hora}:${minut}`


mensagem.innerHTML = res;