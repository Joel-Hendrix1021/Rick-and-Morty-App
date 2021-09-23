import { useState } from 'react'
import { useHistory } from "react-router-dom";
import './form.css'



const FormCharacter = ({handleSearches}) => {
    const [formData, setFormData] = useState()
    
    const history = useHistory()
    const handleSubmit=(e)=>{
        e.preventDefault()
        handleSearches(formData)
        history.push(`/search/${formData}`);
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input name="name" type="text"onChange={(e)=>setFormData(e.target.value)}  type="text" />
            <button  ><img src="/assets/loupe.svg" alt="" /></button>
        </form>
    )
}

export default FormCharacter
