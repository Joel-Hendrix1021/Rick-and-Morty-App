import { Link } from "react-router-dom";

import "./listCharacters.css";

const listCharacters = ({ name, img, id }) => {
  return (

    <Link to={`/profile/${id}`} >
      <div className="container__img">
        <img className="img" src={img} alt={name} />
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default listCharacters;
