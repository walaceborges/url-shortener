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

    const parsetResponse = await response.json();
    setNewUrl(parsetResponse.newUrl);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => { setUrl(e.target.value)}} value={url} type="text" name="url" />
        <button>Enter</button>
      </form>
      <p>{newUrl}</p>
    </div>
  )
}

export default Shortener