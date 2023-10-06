import './App.css'
import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
      name: "Bulbizard",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
      name: "Mew",
  },
];



function App() {

  let pokemon = pokemonList[0];

  return (
      <div>
        <PokemonCard name = {pokemon.name} imgSrc = {pokemon.imgSrc}/>
      </div>
  );
}

export default App;
