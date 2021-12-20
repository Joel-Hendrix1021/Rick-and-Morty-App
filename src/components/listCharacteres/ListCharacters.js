import CharacterSingle from "../cardCharacter/CardCharacter";
// import CharacterSingle from "../singelCharacter/CharacterSingle";

import "./listCharacters.css";

const ListCharacters = ({ characters }) => {
    console.log(characters);
    return (
        <>
            { characters.length > 1 &&
        characters.map((character) => <CharacterSingle key={character.id} character={character}/>)
            }
        </>
    );
};

export default ListCharacters;
