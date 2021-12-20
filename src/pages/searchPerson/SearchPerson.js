import { useParams } from "react-router";
import ListCharacters from "../../components/listCharacteres/ListCharacters";
import Loading from "../../components/loadingSpiner/Loading";
import useFetch from "../../hooks/useFetch";

const URL = "https://rickandmortyapi.com/api/character/?name=";
const SearchPerson = () => {
    const { keyword } = useParams();
    const { characters, isLoading } = useFetch(`${URL}${keyword}`);

    return (
        <>
            {
                isLoading
                    ? <Loading/>
                    : <div className="container">
                        {characters.results && <ListCharacters characters={characters.results}/>}
                    </div>
            }

        </>
    );
};

export default SearchPerson;
