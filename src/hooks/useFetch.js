import { useEffect, useState } from "react"

const useFetch = (url) => {

    console.log(url)
    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    

    useEffect(() => {
        setIsLoading(true)
        getCharacters()
         .then(character => setCharacters(character))
         setTimeout(() => {
            setIsLoading(false)
         }, 1000);
           
    },[url])

    const getCharacters = async()=>{
        const res = await fetch(url)
        const data = await res.json()
        return data 
       
    }
   
    return { characters, setCharacters, isLoading}

}

export default useFetch
