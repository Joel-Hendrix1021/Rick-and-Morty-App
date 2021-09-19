import { useEffect, useState } from "react"
import ListCharacters from "../listCharacteres/ListCharacters"
import useFetch from "../../hooks/useFetch"
import './character.css'


const URL = `https://rickandmortyapi.com/api/character`

const Character = () => {

    const {characters } = useFetch(URL)
    console.log(characters.results)

    return (
        <div className="container">
            {
                characters.results ?
                    characters.results.map((character)=>{
                        return (
                            <ListCharacters key={character.id} name={character.name} img={character.image} id={character.id}/>
                        )
                    })
                : <h2>loading....</h2>
            }
        </div>
    )
}

export default Character
