export default function NavBar({pokemonList, setPokemonIndex}) {

    return(
        <>
            <ul>
                {pokemonList.map((pokemon, index)=> (
                    <li key={pokemon.name}>
                        <button onClick={()=>setPokemonIndex(index)}>{pokemon.name}</button>
                    </li>
                ))}
            </ul>
        </>
    )

}