import { useState } from "react";
import { Link } from "react-router-dom";

import "./listCharacters.css";

const ListCharacters = ({ characters }) => {

  const [likes, setLikes]  = useState([])

  const handleFavorite=(id)=>{
   setLikes(like=> [...like, id])
  }

  return (
    <>
      {characters.map((character) => {
        return (
          <div className="container__img" key={character.id}>
            <Link to={`/profile/${character.id}`}>
              <img
                className="img"
                src={character.image}
                alt={character.image}
              />
            </Link>
            <div  >
              <p>{character.name}</p>
              <button onClick={()=> handleFavorite(character.id)} className="btn__fav">
                  {
                    likes.includes(character.id)?  <img src="/assets/favorito (1).svg" alt="favorto.svg" />:  <img src="/assets/favorito.svg" alt="favorto.svg" />
                  }
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListCharacters;
