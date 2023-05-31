import React from 'react';
import './styles.css';
import Nav from './Components/Nav';
import Cards from './Components/Cards'
// import Projects from './Components/Projects'

function App() {
  return (
    <div className="conteiner__app">
      <Nav />
      <Cards />
      {/* <Hero />
      <Projects /> */}
    </div>
  );
}

export default App;
