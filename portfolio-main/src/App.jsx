import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hire from './components/Hire';
import Contact from './components/Contact';
import Certification from './components/Certification';
import Education from './components/Education';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Education />
        <Certification />
        <Projects />
        <Hire />
        <Contact />
      </main>
    </>
  );
}

export default App;
