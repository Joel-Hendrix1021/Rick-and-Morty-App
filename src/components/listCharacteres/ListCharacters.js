import { Link } from "react-router-dom";

import "./listCharacters.css";

const listCharacters = ({ name, img, id }) => {
  return (
    <div className="container__img">
      <Link to={`/profile/${id}`}>
        <img className="img" src={img} alt={name} />
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default listCharacters;
