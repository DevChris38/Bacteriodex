import {useState} from "react";
import './App.css';
import PokemonCard from './components/PokemonCard';
import NavBar from "./components/NavBar";

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
  let precedent = false;
  let suivant = false;

  if (pokemonList[pokemonIndex-1]) {
    precedent = true;
  }

  if (pokemonIndex < pokemonList.length - 1) {
    suivant = true;
  }

  return (
      <div>
        <NavBar precedent = {precedent} suivant = {suivant} setPokemonIndex = {setPokemonIndex} pokemonIndex = {pokemonIndex}/>
        <PokemonCard name = {pokemon.name} imgSrc = {pokemon.imgSrc}/>
      </div>
  );
}

export default App;
