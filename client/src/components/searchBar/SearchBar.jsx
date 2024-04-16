import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux" //nviar acciones a la tienda Redux.
import { getVideogamesName } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

import style from '../searchBar/searchBar.module.css';

const SearchBar = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleChange = (event)=>{
        event.preventDefault();
        setName(event.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(getVideogamesName(name))
        setName('')
        navigate('/home')
    }

    return (
        <div className={style.search}>
            <form onSubmit={handleSubmit}>
                
                    <input className={style.input}
                        type='search'
                        value={name}
                        placeholder= 'Search videogame'
                        onChange={handleChange}
                    />
                    <button className= {style.submit}
                        type='submit'
                        // disabled={name.length<2}
                        onClick={handleSubmit}>
                            Search
                    </button>                    
            </form>
        </div>
    )


}

export default SearchBar;