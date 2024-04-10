// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {Link, useNavigate} from 'react-router-dom';
// import validation from "./validation";
// import { getGenres, postVideogames } from "../../redux/actions";

// const Form = () =>{
//   const dispatch = useDispatch();
//   // const navigate = useNavigate();
//   const genres = useSelector((state)=>state.genres)
//   // const [genreName, setGenreName] = useState([])
//   const [input, setInput] = useState({
//     name: "",
//     background_image: "",
//     description: "",
//     platforms: [],
//     released: "",
//     rating: "",
//     genres: [],
//   });

//   const [errors,setErrors] = useState ({

//   })

//   const handleChange = (event)=>{
//     setInput({
//       ...input,
//       [event.target.name]: event.target.value
//     })

//     // setErrors(
//     //   validation(input))  
//   }

//   const handleSelectGender =(event)=>{
//     setInput({
//       ...input,
//       genres: [...input.genres, event.target.value]
//     })
// }

//   useEffect(()=>{
//     dispatch(getGenres())
//     // console.log(getGenres());
//   }, []);


//   useEffect(()=>{
//     if(input){
//       setErrors(validation(input))
//     }
//   }, [input])                       

//   const handleSubmit =(event) =>{  //para que no se recargue la pagina y se borren los input
//     event.preventDefault();
//     // console.log(input);
//     dispatch(postVideogames(input))
//   }

//   return (
//     <div className="contenedor-general-create">
//       <h1>CREATE YOUR VIDEOGAME</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>NAME 
//             <input 
//             type="name" 
//             name="name" 
//             value={input.name}
//             onChange={handleChange}/>
//             {errors.name && <p style={{color: 'darkgrey'}}>{errors.name}</p>} 
//           </label>
//         </div>

//         <div>
//           <label>IMAGE 
//             <input 
//             type="url" 
//             name="background_image" 
//             value={input.background_image} 
//             onChange={handleChange}/>
//             {errors.background_image && <p style={{color: 'darkgrey'}}>{errors.background_image}</p>}
//           </label>
//         </div>

//         <div>
//           <label>DESCRIPTION 
//             <input 
//             type="text" 
//             name="description" 
//             value={input.description} 
//             onChange={handleChange}/>
//             {errors.description && <p style={{color: 'darkgrey'}}>{errors.description}</p>}
//           </label>
//         </div>

//         <div>
//           <label>PLATFORMS 
//             <input 
//             type="text" 
//             name="platforms" 
//             value={input.platforms} 
//             onChange={handleChange}/>
//             {errors.platforms && <p style={{color: 'darkgrey'}}>{errors.platforms}</p>}
//           </label>
//         </div>

//         <div>
//           <label>RELEASED 
//             <input type="text" 
//             name="released" 
//             value={input.released} 
//             onChange={handleChange}/>
//             {errors.released && <p style={{color: 'darkgrey'}}>{errors.released}</p>}
//           </label>
//         </div>

//         <div>
//           <label>RATING 
//             <input 
//             type="number" 
//             name="rating" 
//             value={input.rating}
//             onChange={handleChange}/>
//             {errors.rating && <p style={{color: 'darkgrey'}}>{errors.rating}</p>}
//           </label>
//         </div>

       

//           <div>
//           <label htmlFor="genres">GENRES 
//             <select name="genres" id='genres'
//               onChange={handleSelectGender}>
//                 <option value="null">Select genre</option>
//                 {genres.map((elem)=>{
//                   return (
//                   <option value={elem.name} >{elem.name}</option>
//                 )})}
//             </select>
//             </label>
//             <ul><li>{input.genres.map(elem=>elem + ' - ')}</li></ul>  
//         </div>
//       <button type='submit'>Create</button>
//       </form>
//       <br/>
//       <Link to= '/home'><button>BACK</button></Link>
//     </div>
//   );
// }
  
//   export default Form;
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import validation from "./validation";
// import { getGenres, postVideogames } from "../../redux/actions";

// const Form = () =>{
//   const dispatch = useDispatch();
//   const genres = useSelector((state)=>state.genres)
//   const [input, setInput] = useState({
//     name: "",
//     background_image: "",
//     description: "",
//     platforms: [],
//     released: "",
//     rating: "",
//     genres: [],
//   });

//   const [errors,setErrors] = useState ({

//   })

//   const handleChange = (event)=>{
//     setInput({
//       ...input,
//       [event.target.name]: event.target.value
//     })
//     console.log(input);

//     // setErrors(
//     //   validation(input))  
//   }

//   const handleSelectGender =(event)=>{
//       setInput({
//         ...input,
//         genres: [...input.genres, event.target.value]
//       })
//     }



//   useEffect(()=>{
//     dispatch(getGenres())
//     console.log(getGenres());

//   }, []);


//   useEffect(()=>{
//     if(input){
//       setErrors(validation(input))
//     }
//   }, [input])                       

//   const handleSubmit =(event) =>{  //para que no se recargue la pagina y se borren los input
//     event.preventDefault();
//     dispatch(postVideogames(input))
//     alert ('Successfully created videogame')
//     setInput({
//       name: "",
//       background_image: "",
//       description: "",
//       platforms: [],
//       released: "",
//       rating: "",
//       genres: [],
//     });
//   }

//   return (
//     <div>
//       <h1>CREATE YOUR VIDEOGAME</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">NAME </label>
//         <input type="name" 
//         name="name" 
//         value={input.name}
//         onChange={handleChange}/>
//         {errors.name && <p style={{color: 'darkgrey'}}>{errors.name}</p>} 
//         <br/>

//         <label htmlFor="background_image">IMAGE </label>
//         <input type="url" 
//         name="background_image" 
//         value={input.background_image} 
//         onChange={handleChange}/>
//         {errors.background_image && <p style={{color: 'darkgrey'}}>{errors.background_image}</p>}
//         <br/>

//         <label htmlFor="description">DESCRIPTION </label>
//         <input type="text" 
//         name="description" 
//         value={input.description} 
//         onChange={handleChange}/>
//         {errors.description && <p style={{color: 'darkgrey'}}>{errors.description}</p>}
//         <br/>

//         <label htmlFor="platforms">PLATFORMS </label>
//         <input type="text" 
//         name="platforms" 
//         value={input.platforms} 
//         onChange={handleChange}/>
//         {errors.platforms && <p style={{color: 'darkgrey'}}>{errors.platforms}</p>}
//         <br/>

//         <label htmlFor="released">RELEASED </label>
//         <input type="text" 
//         name="released" 
//         value={input.released} 
//         onChange={handleChange}/>
//         {errors.released && <p style={{color: 'darkgrey'}}>{errors.released}</p>}
//         <br/>

//         <label htmlFor="rating">RATING </label>
//         <input type="number" 
//         name="rating" 
//         value={input.rating}
//         onChange={handleChange}/>
//         {errors.rating && <p style={{color: 'darkgrey'}}>{errors.rating}</p>}
//         <br/>

//         <label htmlFor="genre">GENRE   
//           <select
//               onChange={handleSelectGender}>
//                 <option value="null">Select genre</option>
//                 {genres.map((elem)=>{
//                   return (
//                     <option value={elem.name} key={elem.name}>
//                       {elem.name}
//                     </option>
//                   )
//                 })}
//           </select>
//           <ul><li>{input.genres.map(elem=>elem + ' - ')}</li></ul>
//         </label>
//         <br/>
//         <button type='submit'>Create</button>
//       </form>
//     </div>
//   );
// }
  
//   export default Form;