import ListCharacters from "../../components/listCharacteres/ListCharacters";
import useFavorite from "../../hooks/useFavorite";
import useFetch from "../../hooks/useFetch";
import "./favs.css";
const URL = "https://rickandmortyapi.com/api/character/";

const Favs = () => {
  const { likes, handleFavs } = useFavorite();
  const { characters } = useFetch(`${URL}${likes}`);

  return (
    <div className="container favs">
        {
          <ListCharacters characters={characters} likes={likes} handleFavs={handleFavs}/>
        }
    </div>
  );
};

export default Favs;
