import FormCharacter from "../form/FormCharacter"
import './header.css'

const Header = ({handleSearches}) => {
    return (
        <header className="header">
            <h1 >Rick and Morty App</h1>
            <FormCharacter handleSearches={handleSearches} />
        </header>
    )
}

export default Header
