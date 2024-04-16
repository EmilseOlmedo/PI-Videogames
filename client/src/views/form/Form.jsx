import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postVideogames, getGenres, getPlatforms } from "../../redux/actions";
import validation from "./validation";

import style from "../form/form.module.css";

const Form = ()=>{
    const dispatch = useDispatch()
    const genres = useSelector((state)=>state.genres)
    const platforms = useSelector((state)=>state.platforms)

    const [input, setInput] = useState({
        name: "",
        background_image: "",
        description: "",
        platforms: [],
        released: "",
        rating: "",
        genres: [],
    });
    const [errors,setErrors] = useState ({})

    useEffect(()=>{
        dispatch(getGenres())
        dispatch(getPlatforms())
    }, [dispatch]);

    useEffect(()=>{
        if(input){
            setErrors(validation(input))
        }
    }, [input])                       


    const handleChange = (event)=>{
        const property = event.target.name;
        const value= event.target.value;

        setInput({...input, [property]:value}) //yo no sé que tenga guardado property pero sea lo que sea esa es la propiedad que quiero modificar
    }                                          //[property] de esta forma accedo al nombre de la propiedad, ejemplo: name, released, etc
    
    const handleSelectPlatforms = (event)=>{
        const {value} = event.target;
        if (value !== 'none' && !input.platforms.includes(value)) {
            setInput({
              ...input,
              platforms: [...input.platforms, value],
            });
        }
    }

    const handleSelectgenres = (e) => {
        const { value } = e.target;
       
        if (value !== 'none' && !input.genres.includes(value)) {
            setInput({
              ...input,
              genres: [...input.genres, value],
            });
          }
        };
    console.log(input)

    const handleRemovePlatform = (index) => {
        const newPlatforms = [...input.platforms];
        newPlatforms.splice(index, 1);
        setInput({
            ...input,
            platforms: newPlatforms,
        });
    };

    const handleRemoveGenre = (index) => {
        const newGenres = [...input.genres];
        newGenres.splice(index, 1);
       
        setInput({
            ...input,
            genres: newGenres,
        });
    };

    const submitHandler =(event) =>{
        event.preventDefault(); //con esto indico que no me recargue la página cada vez que hago submit
        console.log(input)
        dispatch(postVideogames(input))
        //aquí seteo mi input vacío!!!!
    }
    const orderPlatforms = platforms.sort((a,b) => a.name.localeCompare(b.name))
    const orderGenres = genres.sort((a,b) => a.name.localeCompare(b.name))

    return (
        <div className={style.containerForm}>
            <div className={style.container}>
                <form onSubmit={submitHandler}>
                <div className={style.inputContainer}>
                    <label htmlFor="name">NAME </label>
                    <input className={style.input} type="text" name="name" id="name" value={input.name} onChange={handleChange}></input>
                    {errors.name && <p style={{color: 'darkgrey'}}>{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="background_image">IMAGE </label>
                    <input className={style.input} type="url" name="background_image" id="background_image" value={input.background_image} onChange={handleChange}></input>
                    {errors.background_image && <p style={{color: 'darkgrey'}}>{errors.background_image}</p>}
                </div>
                <div>
                    <label htmlFor="description">DESCRIPTION </label>
                    <input className={style.input} type="text" name="description" id="description" value={input.description} onChange={handleChange}></input>
                    {/* {errors.description && <p style={{color: 'darkgrey'}}>{errors.description}</p>} */}
                </div>
                
                <div>
                    <label htmlFor="released">RELEASED </label>
                    <input className={style.input} type="text" name="released" id="released" value={input.released} onChange={handleChange}></input>
                    {errors.released && <p style={{color: 'darkgrey'}}>{errors.released}</p>}
                </div>
                <div>
                    <label htmlFor="rating">RATING </label>
                    <input className={style.input} type="number" name="rating" id="rating" value={input.rating} onChange={handleChange}></input>
                    {errors.rating && <p style={{color: 'darkgrey'}}>{errors.rating}</p>}
                </div>

                <label htmlFor="platforms">PLATFORMS </label>
                <select className={style.input} id='platforms' name='platforms'onChange={(e)=> handleSelectPlatforms(e)}>
                    <option value='none'>Select</option>
                    {orderPlatforms.map((pf)=>(
                        <option key={pf.id} value={pf.name}>
                            {pf.name}
                        </option>
                    ))}
                </select>
                {errors.platforms && <p style={{color: 'darkgrey'}}>{errors.platforms}</p>}
                <ul >
                    {input.platforms.map((i,index)=> (
                        <li key={index}>{i}
                        <button type="button" onClick={() => handleRemovePlatform(index)}>
                         x 
                        </button></li>))}
                </ul>
               
                <label htmlFor="genres">GENRES </label>
                <select className={style.input} id='genres' name='genre'onChange={(e) => handleSelectgenres(e)}>
                  <option value='none'>Select</option>
                    {orderGenres?.map((genre) => (
                        <option key={genre.id} value={genre.name}>
                            {genre.name}
                        </option>
                    ))}
                </select>
                {errors.genres && <p style={{color: 'darkgrey'}}>{errors.genres}</p>}
                <ul >
                    {input.genres.map((i, index) => (
                        <li key={index}>
                            {i}
                            <button type="button" onClick={() => handleRemoveGenre(index)}>
                                    x
                                </button>
                        </li>
                    ))}
                    </ul>
                <button className= {style.submit} type="submit">CREATE</button>
            </form>
            </div>      
        </div>
)

}

export default Form;

//en la 87 podría usar span
/*
<div>
                    <label htmlFor="platforms">PLATFORMS </label>
                    <input type="text" name="platforms" id="platforms" value={input.platforms} onChange={handleChange}></input>
                    {errors.platforms && <p style={{color: 'darkgrey'}}>{errors.platforms}</p>}
                </div>*/

                /*    <label htmlFor="genres">GENRES </label>
                    <select id='genres' name='genre'onChange={handleSelectChange}>
                        <option value='none'>Select</option>
                        {genres.map((genre)=>(
                        <option key={genre.id} value={genre.name} id={genre.name}>{genre.name}</option>))}
                    </select>
                    {errors.genres && <p style={{color: 'darkgrey'}}>{errors.genres}</p>}
                    <ul><li>{input.genres.map(elem => elem + ' ')}</li></ul> */