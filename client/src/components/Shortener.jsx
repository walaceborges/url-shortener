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
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className='flex justify-center items-center'>  
        <input
          className='bg-[#EEEEEE] h-12 border-2 my-7 text-center text-xl font-extralight rounded-l-lg w-5/12'
          placeholder='Cole seu link aqui'
          onChange={(e) => { setUrl(e.target.value)}} 
          value={url} 
          type="text" 
          name="url" 
          />
          <div>
            <button className='h-12 border-2 rounded-r-lg font-semibold text-xl bg-[#FF9DF5] hover:brightness-150 z-10 relative'>Encurtar</button>
          </div>
      </form>
      <p className="text-red-800">{newUrl}</p>
    </section>
  )
}

export default Shortener