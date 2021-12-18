/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import useFavorite from "../../hooks/useFavorite";

const CharacterSingle = ({ character }) => {
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
          {/* {likes.includes(character.id)
            ? (
            <img src="/assets/favoritoWhite.svg" alt="favorto.svg" />
              )
            : (
            <img src="/assets/favorito.svg" alt="favorto.svg" />
              )} */}
        </button>
      </div>
    </div>
  );
};

export default CharacterSingle;
