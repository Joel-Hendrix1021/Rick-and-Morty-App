import { useEffect, useState } from "react"
import ListCharacters from "../listCharacteres/ListCharacters"
import './character.css'

const Character = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        getCharacters()
         .then(character => setCharacters(character.results))
    },[])

    const getCharacters = async()=>{
        const res = await fetch('https://rickandmortyapi.com/api/character')
        const data = res.json()
        return data
        
    }


    return (
        <div className="container">
            {
                characters.length ?
                    characters.map((character)=>{
                        console.log(character)
                        return (
                            <ListCharacters key={character.id} name={character.name} img={character.image} />
                        )
                    })
                : <h2>loading....</h2>
            }
        </div>
    )
}

export default Character
