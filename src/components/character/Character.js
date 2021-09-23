import ListCharacters from "../listCharacteres/ListCharacters";
import useFetch from "../../hooks/useFetch";
import "./character.css";
import Loading from "../loadingSpiner/Loading";
import useObserver from "../../hooks/useObserver";
import { useEffect, useRef, useState } from "react";

const URL = `https://rickandmortyapi.com/api/character?page=`;

const Character = () => {
  const [page, setPage] = useState(1);
  const refElement = useRef();
  const { characters, isLoading, setCharacters} = useFetch(`${URL}${page}`);
  const { show } = useObserver(refElement);
  const [charactersResult, setCharactersResult] = useState([])
  let arrayCaracters = []

  useEffect(() => {
    if (show) {
      setPage(page + 1);
    }
  }, [show]);

  useEffect(() => {
    if(characters.results){
     characters.results.map(item => {
        arrayCaracters.push(item)
     })
      setCharactersResult([...charactersResult, ...arrayCaracters])
    }
    
  }, [characters])
  
 

  return (
    <>
      <div className="container">
        {charactersResult.length > 0 && <ListCharacters  characters={charactersResult} />}
        
      </div>
      {
        show? <Loading />: null
      }
      <div id="visor" ref={refElement}></div>
    </>
  );
};

export default Character;
