import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postVideogames, getGenres } from "../../redux/actions";

import style from "../form/form.module.css";

const Form = ()=>{
    const dispatch = useDispatch()
    const genres = useSelector((state)=>state.genres)

    const [input, setInput] = useState({
        name: "",
        background_image: "",
        description: "",
        platforms: [],
        released: "",
        rating: "",
        genres: [],
    });

    useEffect(()=>{
        dispatch(getGenres())
    }, []);

    const handleChange = (event)=>{
        const property = event.target.name;
        const value= event.target.value;

        setInput({...input, [property]:value}) //yo no sé que tenga guardado property pero sea lo que sea esa es la propiedad que quiero modificar
    }                                          //[property] de esta forma accedo al nombre de la propiedad, ejemplo: name, released, etc
    

    const handleSelectChange = (event)=>{
        // const property = event.target.name;
        // const value= event.target.value;
        setInput({
            // ...input.genres, [property]:value})
            ...input,
            genres: [...input.genres, event.target.value]
        })
    }
    console.log(input)

    const submitHandler =(event) =>{
        event.preventDefault(); //con esto indico que no me recargue la página cada vez que hago submit
        console.log(input)
        dispatch(postVideogames(input))
        //aquí seteo mi input vacío!!!!
    }


    return (
        <div className={style.containerForm}>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">NAME </label>
                    <input type="text" name="name" id="name" value={input.name} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="background_image">IMAGE </label>
                    <input type="URL" name="background_image" id="background_image" value={input.background_image} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="description">DESCRIPTION </label>
                    <input type="text" name="description" id="description" value={input.description} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="platforms">PLATFORMS </label>
                    <input type="text" name="platforms" id="platforms" value={input.platforms} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="released">RELEASED </label>
                    <input type="text" name="released" id="released" value={input.released} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="rating">RATING </label>
                    <input type="number" name="rating" id="rating" value={input.rating} onChange={handleChange}></input>
                </div>
               
                    <label htmlFor="genres">GENRES </label>
                    <select id='genres' name='genre'onChange={handleSelectChange}>
                        {genres.map((genre)=>(
                        <option key={genre.id} value={genre.name} id={genre.name}>{genre.name}</option>))}
                    </select>
                    <ul><li>{input.genres.map(elem => elem + '  ')}</li></ul>
                <button type="submit">CREATE</button>
            </form>
                
        </div>
)

}

export default Form;