import { useEffect, useState } from "react"

const useFetch = (url) => {

    console.log(url)
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        getCharacters()
         .then(character => setCharacters(character))
    },[url])

    const getCharacters = async()=>{
        const res = await fetch(url)
        const data = res.json()
        return data     
    }

    return { characters }

}

export default useFetch
