import React, { useState } from 'react'

function Shortener() {
  const [url, setUrl] = useState('');
  const [newUrl, setNewUrl] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ originalUrl: url })
    });

    const parsedResponse = await response.json();
    setNewUrl(parsedResponse.newUrl);
    clearInput();
  };

  function clearInput() {
    setUrl('');
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className='flex justify-center items-center'>  
        <input
          className='bg-[#EEEEEE] h-12 border-0 my-7 text-start pl-4 text-xl font-extralight rounded-l-lg w-8/12 md:w-3/12 lg:w-4/12'
          placeholder='Cole seu link aqui'
          onChange={(e) => { setUrl(e.target.value)}} 
          value={url} 
          type="text" 
          name="url"
        />
        <div className=''>
          <button className='h-12 xl:w-40 md:w-28 w-24 border-0 rounded-r-lg font-medium text-xl bg-[#FF9DF5] hover:brightness-100 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800'>Encurtar</button>
        </div>
      </form>
      <p className="text-red-800">{newUrl}</p>
    </section>
  )
}

export default Shortener