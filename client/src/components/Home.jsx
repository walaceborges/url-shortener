import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Shortener from './Shortener'

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () =>{
    setDarkMode(!darkMode);
  };

  return (
    <div className={`bg-[#F5F8FF] ${darkMode ? 'dark': ''} w-screen h-screen`}>
      <Footer />
      <Header toggleDarkMode={toggleDarkMode}/>
      <Main />
      <Shortener />
    </div>
  )
}

export default Home