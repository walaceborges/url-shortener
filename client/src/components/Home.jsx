import React from 'react'
import Header from './Header'
import Main from './Main'
import Shortener from './Shortener'

function Home() {
  return (
    <div className="bg-[#F5F8FF] w-screen h-screen">
      <Header />
      <Main />
      <Shortener />
    </div>
  )
}

export default Home