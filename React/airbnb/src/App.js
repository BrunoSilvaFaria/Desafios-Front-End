import './styles.css';
import Nav from './Components/NavBar';
import Hero from './Components/Hero'
import Projects from './Components/Projects'

function App() {
  return (
    <div className="conteiner__app">
      <Nav />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
