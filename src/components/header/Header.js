import { Link } from "react-router-dom";
import FormCharacter from "../form/FormCharacter";
import "./header.css";

const Header = ({ handleSearches }) => {
  return (
    <header className="header">
      <Link to={"/"} className="header__title">Rick and Morty App </Link>
    
      <FormCharacter handleSearches={handleSearches} />
      <Link className="header__fav" to={"/favs"}>
        Favorite <img src="/assets/favorito (1).svg" alt="favorito" />
      </Link>
    </header>
  );
};

export default Header;
