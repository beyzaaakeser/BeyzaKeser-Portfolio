import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Skills from './components/skills/Skills';
import About from './components/about/About';
import Projects from './components/projects/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="Header_wrapper">
        <Nav />
        <Header />
      </div>
      <About/>
      <Skills />
      <Projects/>
    </BrowserRouter>
  );
}

export default App;
