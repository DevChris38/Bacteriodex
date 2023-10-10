export default function NavBar({precedent, suivant, setPokemonIndex, pokemonIndex}) {

    return(
        <>
            {precedent ? <button onClick={()=>{setPokemonIndex(pokemonIndex - 1)}}>Précédent</button> : null}
            {suivant ? <button onClick={()=>{setPokemonIndex(pokemonIndex + 1)}}>Suivant</button> : null}
        </>
    )

}