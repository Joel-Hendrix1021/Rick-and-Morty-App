import { Link } from "react-router-dom";
import useFavorite from "../../hooks/useFavorite";
// import CharacterSingle from "../singelCharacter/CharacterSingle";

import "./listCharacters.css";

const ListCharacters = ({ characters }) => {
  const { likes, handleFavs } = useFavorite();
  return (
    <>
      { characters.length > 1 &&
        characters.map((character) => {
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
                  <img src="/assets/favWhite.svg" alt="likes.svg" />
                    )
                  : (
                  <img src="/assets/fav.svg" alt="likes.svg" />
                    )}
              </button>
            </div>
          </div>
          );
        })
      }
    </>
  );
};

export default ListCharacters;
