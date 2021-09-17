import './listCharacters.css'
const listCharacters = ({name, img}) => {
    return (
        <div className="container__img">
             <img className="img" src={img} alt={name} />
             <p>{name}</p>
        </div>
    )
}

export default listCharacters
