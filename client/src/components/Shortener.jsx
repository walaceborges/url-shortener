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
    <div>
      <form onSubmit={handleSubmit}>  
        <input
          className='rounded-full border-2 px-3 my-4 text-center'
          placeholder='Paste URL to short'
          onChange={(e) => { setUrl(e.target.value)}} 
          value={url} 
          type="text" 
          name="url" 
        />
        <button>Encurtar</button>
      </form>
      <p className="text-red-800">{newUrl}</p>
    </div>
  )
}

export default Shortener