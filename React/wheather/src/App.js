import './App.css';
import { Citys } from './components/Capitais/Capitais';
import { Card } from './components/Card/Card';
function App() {
  let input = document.querySelector('.input__camp');
  const API_KEY = '001c826b7e6f46e1a692b44b1a16ce57';

  function handleValue() {
    let url = `https://api.weatherbit.io/v2.0/current?&city=${input.value}&key=${API_KEY}&include=minutely`
    console.log(url);
  }
  return (
    <main>
      <section className='city'>
        <h1 className='title'>Previsao do tempo</h1>

        <Card />

        <div className='input'>
          <input className='input__camp' placeholder='Insira aqui o nome da cidade' />
          <button className='input__button' onClick={handleValue}>P</button>
        </div>
      </section>


      <Citys />
      <script src="https://kit.fontawesome.com/5d9534e9eb.js" crossorigin="anonymous"></script>
    </main >
  );
}

export default App;
