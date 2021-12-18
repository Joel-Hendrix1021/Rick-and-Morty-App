import { useParams } from "react-router";
import ListCharacters from "../../components/listCharacteres/ListCharacters";
import useFetch from "../../hooks/useFetch";

const URL = "https://rickandmortyapi.com/api/character/?name=";
const SearchPerson = ({ likes }) => {
  const { keyword } = useParams();
  const { characters } = useFetch(`${URL}${keyword}`);

  return (
    <div className="container">
      {characters.results && <ListCharacters characters={characters.results} likes={likes}/>}
    </div>
  );
};

export default SearchPerson;
