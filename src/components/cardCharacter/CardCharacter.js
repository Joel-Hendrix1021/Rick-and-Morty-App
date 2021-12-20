/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import useFavorite from "../../hooks/useFavorite";

const CardCharacter = ({ character }) => {
    const { likes, handleFavs } = useFavorite();

    return (
        <div className="container__img" key={character.id}>
            <Link to={`/profile/${character.id}`}>
                <img
                    className="img"
                    src={character.image}
                    alt={character.image}
                />
            </Link>
            <div>
                <p>{character.name}</p>
                <button
                    onClick={() => handleFavs(character.id)}
                    className="btn__fav"
                >
                    {likes.includes(character.id)
                        ? (
                            <i className="fas fa-heart"></i>
                        )
                        : (
                            <i className="far fa-heart"></i>
                        )}
                </button>
            </div>
        </div>
    );
};

export default CardCharacter;
