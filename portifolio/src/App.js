import './styles.css';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Tecnologies from './components/Tecnologies/Tecnologies';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Tecnologies />
    </div>
  );
}

export default App;
