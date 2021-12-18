import { Link } from "react-router-dom";
import FormCharacter from "../form/FormCharacter";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to={"/"} className="header__title">Rick and Morty App </Link>
      <FormCharacter />
      <Link className="header__fav" to={"/favs"}>
        Favorite <img src="/assets/favWhite.svg" alt="favorito" />
      </Link>
    </header>
  );
};

export default Header;
