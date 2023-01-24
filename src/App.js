import './App.css';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Switch from './components/Switch';
import { useState } from 'react';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Copyright from './components/Copyright';
function App() {
      const [mode, setmode] = useState("light")
      const toggleMode = () => {
        if (mode === "light") {
          setmode("dark")
          document.body.style.backgroundColor = '#171717';
        } else {
          setmode('light')
          document.body.style.backgroundColor= '#e9d5a1';
        }
      }

  return (
    <div className="App">
      <Switch toggleMode = {toggleMode}/>
      <Home/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Education/>
      <Copyright/>
    </div>
  );
}

export default App;
