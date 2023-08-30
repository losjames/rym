import React from 'react'

function Characters(props) {
    
    const {characters, setCharacters} =props;

    const resetCharacters = () => {
      setCharacters(null)
      
    }

  return (
    <>
    
      <span className='back-home' onClick={resetCharacters}>volver a la home</span>
    <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
    <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Personajes</h1>
    <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
    
  {characters.map((character, index) => (
        <div className="lg:flex bg-gray-100 overflow-hidden" key={index}> 
          
        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={character.image} alt={character.name}/>
        <div className="flex flex-col justify-between py-6 px-4 lg:mx-6">
          <h2 className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">{character.name}</h2>
          <span className="text-sm text-gray-500 dark:text-gray-300">Status: {character.status}</span>
          <p className="text-gray-600">Episodio: {character.episode}</p>
          <p className="text-gray-600">Especie: {character.species}</p>
        </div>
      </div>
      
         
    ))}</div></div>
      <span className='back-home' onClick={resetCharacters}>volver a la home</span>
    </section>
  
    </>
  )
}

export default Characters