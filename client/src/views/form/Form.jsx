import React, { useEffect, useState } from "react";
import validation from "./validation";

const Form = () =>{
  const [input, setInput] = useState({
    name: "",
    background_image: "",
    description: "",
    platforms: [],
    released: "",
    rating: "",
    genres: [],
  });

  const [errors,setErrors] = useState ({

  })

  const handleChange = (event)=>{
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })

    // setErrors(
    //   validation(input))  
  }
  useEffect(()=>{
    if(input){
      setErrors(validation(input))
    }
  }, [input])                       

  const handleSubmit =(event) =>{  //para que no se recargue la pagina y se borren los input
    event.preventDefault();
  }

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">NAME </label>
        <input onChange={handleChange}type="name" name="name" value={input.name}/>
        {errors.name && <p style={{color: 'red'}}>{errors.name}</p>} 
        <br/>

        <label htmlFor="background_image">IMAGE </label>
        <input type="url" 
        name="background_image" 
        value={input.background_image} 
        onChange={handleChange}/>
        <br/>

        <label htmlFor="description">DESCRIPTION </label>
        <input type="text" name="description" value={input.description} onChange={handleChange}/>
        <br/>

        <label htmlFor="platforms">PLATFORMS </label>
        <input type="text" name="platforms" value={input.platforms} onChange={handleChange}/>
        <br/>

        <label htmlFor="released">RELEASED </label>
        <input type="text" name="released" value={input.released} onChange={handleChange}/>
        <br/>

        <label htmlFor="rating">RATING </label>
        <input type="number" name="rating" value={input.rating} onChange={handleChange}/>
        <br/>

        <label htmlFor="genres">GENRES </label>
        <input type="text" name="genres" value={input.genres} onChange={handleChange}/>
        <br/>

        <button type='submit'>Create</button>
      </form>
    );
  }
  
  export default Form;

