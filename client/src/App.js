import React, { useState } from 'react'
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Shortener from './components/Shortener'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () =>{
    setDarkMode(!darkMode);
  };

  return (
    <div className={`text-center bg-[#fffef5] ${darkMode ? 'dark': ''} `}>
      <div className='w-screen h-screen dark:bg-[#0E0F22]'>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
        <Main />
        <Shortener />
        <Footer />
      </div>
    </div>
  );
}

export default App;
