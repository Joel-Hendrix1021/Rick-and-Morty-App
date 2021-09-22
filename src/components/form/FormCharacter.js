import { useState } from 'react'
import './form.css'



const FormCharacter = () => {
    const [formData, setFormData] = useState()

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target.name.value)
    }


    return (
        <form className="form" onSubmit={handleSubmit}>
            <input name="name" type="text"onChange={(e)=>setFormData(e.target.value)}  type="text" />
            <button >search</button>
        </form>
    )
}

export default FormCharacter
