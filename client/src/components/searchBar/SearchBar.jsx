import { useState } from "react";
import { useDispatch } from "react-redux" //nviar acciones a la tienda Redux.
import { getVideogamesName } from "../../redux/actions";

const SearchBar = ()=>{
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleChange = (event)=>{
        event.preventDefault();
        setName(event.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(getVideogamesName(name))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                
                    <input
                        type='search'
                        value={name}
                        placeholder= 'Type the name of the game'
                        onChange={handleChange}
                    />
                    <button
                        type='submit'
                        disable={name.length<2}
                        onClick={handleSubmit}>
                            Search
                    </button>                    
                
            </form>
        </div>
    )


}

export default SearchBar;