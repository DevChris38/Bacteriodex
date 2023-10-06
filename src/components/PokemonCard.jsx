function PokemonCard({name, imgSrc}) {


    return (
    <figure>
        {imgSrc ? <img src={imgSrc} alt={name}></img> : <p>???</p>}
        <figcaption>{name}</figcaption>
    </figure>
    );
}

export default PokemonCard;