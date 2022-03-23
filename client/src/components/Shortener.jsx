import React, { useState } from 'react';
// import imgCopy from '../assets/copy-svgrepo-com.svg';

function Shortener() {
  const [url, setUrl] = useState('');
  const [newUrl, setNewUrl] = useState('');
  // const [copy, setCopy] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
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
    responseError(parsedResponse.error);
    clearInput();
  };

  function clearInput() {
    setUrl('');
  };

  function copyText() {
    const search = document.getElementById('inputResult');
    const resultSearch = search.innerText;
    navigator.clipboard.writeText(resultSearch);
    alert("URL copiada com sucesso");
  };

  function responseError(error) {
    if (error === 'Invalid URL. Try again.') {
      setError('URL inválida. Tente novamente.');
    } else if (error === 'Bad Request: body must contain the following format: { url: "example.com" }'){
      setError('Por favor, insira uma URL');
    }
  };

  return (
    <section className='dark:bg-[#0E0F22]'>
      <form onSubmit={handleSubmit} className='flex justify-center items-center pb-4 z-10'>  
        <input
          className='bg-[#EEEEEE] h-12 border-0 my-7 text-start pl-4 text-xl font-light rounded-l-lg w-8/12 md:w-3/12 lg:w-4/12'
          placeholder='Cole seu link aqui ...'
          onChange={ (e) => { setUrl(e.target.value)} } 
          value={url} 
          type="text" 
          name="url"
        />
        <div>
          <button className='h-12 xl:w-40 md:w-28 w-24 border-0 rounded-r-lg font-medium text-xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800'>Encurtar</button>
        </div>
      </form>
      {error ? 
      <div className="z-10 justify-center flex py-8 h-16 w-1/3 m-auto bg-red-500 rounded items-center">
        <div className="">
          <p className="flex items-center font-medium text-3xl text-white">{error}</p>
        </div>
      </div> : (
      <div className="z-10 absolute justify-center left-1/3 flex py-8 h-16 w-1/3 m-auto bg-[#E84192] rounded items-center">
        <div className="">
          <p 
            onClick={ () => {copyText()} } 
            id="inputResult" 
            className="flex items-center font-medium text-3xl text-black cursor-pointer"
          >
            {newUrl}
          </p>
        </div>
      </div>
      )}
    </section>
  )
}

export default Shortener