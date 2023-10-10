import PropTypes from "prop-types";

function PokemonCard({name, imgSrc}) {


    return (
    <figure>
        {imgSrc ? <img src={imgSrc} alt={name}></img> : <p>???</p>}
        <figcaption>{name}</figcaption>
    </figure>
    );
}

PokemonCard.propTypes = {
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
}

export default PokemonCard;
