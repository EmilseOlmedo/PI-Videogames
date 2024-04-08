import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import validation from "./validation";
import { getGenres } from "../../redux/actions";

const Form = () =>{
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

//   const handleSelectGender =(event)=>{
//     event.target.value

// }

  useEffect(()=>{
    dispatch(getGenres())
    console.log(getGenres());
  }, []);


  useEffect(()=>{
    if(input){
      setErrors(validation(input))
    }
  }, [input])                       

  const handleSubmit =(event) =>{  //para que no se recargue la pagina y se borren los input
    event.preventDefault();
  }

  return (
    <div>
      <h1>CREATE YOUR VIDEOGAME</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">NAME </label>
        <input type="name" 
        name="name" 
        value={input.name}
        onChange={handleChange}/>
        {errors.name && <p style={{color: 'darkgrey'}}>{errors.name}</p>} 
        <br/>

        <label htmlFor="background_image">IMAGE </label>
        <input type="url" 
        name="background_image" 
        value={input.background_image} 
        onChange={handleChange}/>
        {errors.background_image && <p style={{color: 'darkgrey'}}>{errors.background_image}</p>}
        <br/>

        <label htmlFor="description">DESCRIPTION </label>
        <input type="text" 
        name="description" 
        value={input.description} 
        onChange={handleChange}/>
        {errors.description && <p style={{color: 'darkgrey'}}>{errors.description}</p>}
        <br/>

        <label htmlFor="platforms">PLATFORMS </label>
        <input type="text" 
        name="platforms" 
        value={input.platforms} 
        onChange={handleChange}/>
        {errors.platforms && <p style={{color: 'darkgrey'}}>{errors.platforms}</p>}
        <br/>

        <label htmlFor="released">RELEASED </label>
        <input type="text" 
        name="released" 
        value={input.released} 
        onChange={handleChange}/>
        {errors.released && <p style={{color: 'darkgrey'}}>{errors.released}</p>}
        <br/>

        <label htmlFor="rating">RATING </label>
        <input type="number" 
        name="rating" 
        value={input.rating}
        onChange={handleChange}/>
        {errors.rating && <p style={{color: 'darkgrey'}}>{errors.rating}</p>}
        <br/>

        <label htmlFor="genre">GENRE   
        <select
              onChange={(e)=>{handleChange(e)}}>
                <option value="null">Select genre</option>
                {genres.map((elem)=>{
                  return (
                    <option value={elem.name} key={elem.name}>
                      {elem.name}
                    </option>
                  )
                })}
            </select>
            </label>
      </form>
      <button type='submit'>Create</button>
      <br/>
      <Link to= '/home'><button>BACK</button></Link>
    </div>
  );
}
  
  export default Form;
 /* <label htmlFor="genres">GENRES </label>
  <input type="text" 
  name="genres" 
  value={input.genres} 
  onChange={handleChange}/>
  {errors.genres && <p style={{color: 'darkgrey'}}>{errors.genres}</p>}
  <br/>*/

  // <div>
  //         <label htmlFor="genres">GENRES 
  //           <select onChange={handleChange}>
  //             {genres.map((genre)=>{
  //             <option name= {genre.id} value={genre.name}>{genre.name}</option>
  //             })}
  //           </select>
  //         </label>
  //       </div>
