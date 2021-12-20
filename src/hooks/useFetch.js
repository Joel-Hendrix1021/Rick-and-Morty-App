import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        getCharacters()
            .then(character => setCharacters(character))
            .finally(isLoading => setIsLoading(false));
    }, [url]);

    const getCharacters = async () => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    };

    return { characters, setCharacters, isLoading };
};

export default useFetch;
