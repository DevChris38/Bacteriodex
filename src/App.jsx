import {useState} from "react";
import './App.css';
import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];



function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);

  let pokemon = pokemonList[pokemonIndex];

  return (
      <div>
        <PokemonCard name = {pokemon.name} imgSrc = {pokemon.imgSrc}/>
        {pokemonList[pokemonIndex-1] ? <button onClick={()=>{setPokemonIndex(pokemonIndex - 1)}}>Précédent</button> : null}
        {pokemonIndex < pokemonList.length - 1 ? <button onClick={()=>{setPokemonIndex(pokemonIndex + 1)}}>Suivant</button> : null}
      </div>
  );
}

export default App;
