import imageRickMorty from "./img/rick.png";
import './App.css';
import { useState } from "react";
import Characters from "./components/Characters";

function App() {

  const [characters, setCharacters]= useState(null)

  const reqApi = async() => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results)
    
  };


  return (
    <div className="App text-center bg-gray-700 p-2 ">
      <header className="App-header">
      <div className="flex flex-col justify-center items-center h-screen m-4">
        <h1 className="text-white text-6xl order-1">Rick & Morty</h1> 
        {characters ? (
            <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
          <img src={imageRickMorty} alt="rick" className="rounded-5 w-1/4 h-auto order-2"/>
        
        <button onClick={reqApi} className="p-2 m-4 pl-5 pr-5 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-lg rounded-lg focus:border-4 border-indigo-300 order-3">Buscar Personajes</button>
      
          </>
        )}
        
        </div>
      </header>
    </div>
  );
}

export default App;
