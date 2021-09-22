import { Link } from "react-router-dom";

import "./listCharacters.css";

const listCharacters = ({ characters }) => {
  
  return (
    <>
      {characters.map((character) => {     
        return (
          <div className="container__img" key={character.id}>
            <Link to={`/profile/${character.id}`}>
              <img className="img" src={character.image} alt={character.image} />
              <p>{character.name}</p>
            </Link>
          </div>
        )
      })}
    </>
  );
};

export default listCharacters;
