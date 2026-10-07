import './App.css';

import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Home />

      <About />

      <Skills />

      <Projects />

      <Contact />

    </div>
  );
}

export default App;