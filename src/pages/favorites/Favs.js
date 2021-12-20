import ListCharacters from "../../components/listCharacteres/ListCharacters";
import Loading from "../../components/loadingSpiner/Loading";
import useFavorite from "../../hooks/useFavorite";
import useFetch from "../../hooks/useFetch";
import "./favs.css";
const URL = "https://rickandmortyapi.com/api/character/";

const Favs = () => {
    const { likes, handleFavs } = useFavorite();
    const { characters, isLoading } = useFetch(`${URL}${likes}`);

    console.log(isLoading);
    return (
        <>
            {
                isLoading
                    ? <Loading/>
                    : (
                        <div className="container favs">
                            <ListCharacters characters={characters} likes={likes} handleFavs={handleFavs}/>
                        </div>
                    )
            }
        </>
    );
};

export default Favs;
