import { useState } from "react";
import { Link } from "react-router-dom";

import "./listCharacters.css";

const ListCharacters = ({ characters, handleFavs, likes }) => {
  const handleFavorite = (id) => {
    handleFavs(id);
  };

  const CharacterSingle = ({character}) => {
    
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
          onClick={() => handleFavorite(character.id)}
          className="btn__fav"
        >
          {likes.includes(character.id) ? (
            <img src="/assets/favorito (1).svg" alt="favorto.svg" />
          ) : (
            <img src="/assets/favorito.svg" alt="favorto.svg" />
          )}
        </button>
      </div>
    </div>
    );
  };

  return (
    <>
      { characters.length > 1?
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
                onClick={() => handleFavorite(character.id)}
                className="btn__fav"
              >
                {likes.includes(character.id) ? (
                  <img src="/assets/favorito (1).svg" alt="favorto.svg" />
                ) : (
                  <img src="/assets/favorito.svg" alt="favorto.svg" />
                )}
              </button>
            </div>
          </div>
        );
      }) : <CharacterSingle character={characters}/> }
    </>
  );
};

export default ListCharacters;
