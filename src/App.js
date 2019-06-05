import React from 'react';
import Pokemoncard from './Pokemoncard'
import './App.css';

function App() {
  return (
    <div className="App">
     <Pokemoncard
     id={4}
     name = "Charizard "
     type = "fire"
     exp = {66}/>
    </div>
  );
}

export default App;
