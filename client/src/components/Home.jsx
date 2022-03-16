import React from 'react'
import Header from './Header'
import Shortener from './Shortener'

function Home() {
  return (
    <div className="bg-[#F5F8FF] w-screen h-screen">
      <Header />
      <Shortener />
    </div>
  )
}

export default Home