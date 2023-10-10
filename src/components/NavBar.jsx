export default function NavBar({pokemonList, setPokemonIndex}) {

    return(
        <>
            <ul>
                {pokemonList.map((pokemon, index)=> (
                    <li key={pokemon.name}>
                        <button onClick={()=>{
                            setPokemonIndex(index);
                            index === 3 ? alert("pika pikachuuuuuuuuuuu !!!") : null}}>{pokemon.name}</button>
                    </li>
                ))}
            </ul>
        </>
    )

}