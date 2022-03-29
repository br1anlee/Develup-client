import { Navigate } from "react-router-dom";
import { useState } from "react";

function EditDeck(props) {


    const [edit, setEdit] = useState(true)

    const handleOnClick=()=>{

        // console.log(edit)
        setEdit(!edit)
        
    }


    return ( 
        <>
        <button type="submit" onClick={handleOnClick}>Edit</button>
        {edit === true ? 
        <form>
            <label htmlFor=""></label>
            <input type="text"></input>
        </form> : <p></p>}

        </>
     );
}

export default EditDeck;