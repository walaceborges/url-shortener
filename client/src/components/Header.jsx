import React from 'react';
import Moon from '../assets/moon-svgrepo-com.svg';
// import Sun from '../assets/sun-svgrepo-com.svg'

function Header(props) {
  return (
    <nav className="flex justify-around pt-20">
      <div>
        <span class="logo font-medium text-2xl md:text-4xl">Cuttly</span>
      </div>
      <div className="flex items-center">
        <img className="pr-5 md:pr-14 md:w-20" src={Moon} onClick={ () => {props.toggleDarkMode(true)} } alt="Moon" />
        <a 
          href="https://github.com/walaceborges" 
          target="_blank" 
          rel="noreferrer" 
          className="pr-5 md:pr-14 xl:text-xl lg:text-lg md:text-lg sm:text-xs font-normal"
        >
          Github
        </a>
        <a 
          href="https://www.linkedin.com/in/walace-borges/" 
          target="_blank" 
          rel="noreferrer" 
          className="xl:text-xl lg:text-lg md:text-lg sm:text-xs font-normal"
        >
          Linkedin
        </a>
      </div>
    </nav>
  )
}

export default Header