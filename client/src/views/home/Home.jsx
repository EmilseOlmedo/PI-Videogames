import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  filterGameByGenre, 
  getAllVideogames, 
  getGenres,
  orderAlp,
  orderRating,
  filterCreated,

} from "../../redux/actions";

import Pagination from "../../components/pagination/Pagination";
import SearchBar from "../../components/searchBar/SearchBar";
import style from './home.module.css';

const Home = () =>{

  const dispatch = useDispatch();
  // const {allVideogames} = useSelector((state)=>state) //me suscribo a los cambios de mi initialSate= allVideogames del reducer 
//           ^ es el estado allVideogames que tengo en el reducer

  const allVideogames = useSelector ((state)=>state.allVideogames)

  const genres = useSelector((state)=> state.genres);

  useEffect(()=>{
    dispatch(getAllVideogames());
    dispatch(getGenres());
    //agregar el desmonte aquí con un return
  }, [dispatch])

  //ORDER
  //order alfabeticamente
  const handleClickOrderAlp = (e) =>{
    e.preventDefault();
    dispatch(orderAlp(e.target.value))
  };

  //order rating
  const handleClickOrderRating = (e)=>{
    e.preventDefault();
    dispatch(orderRating(e.target.value))
  }

  //FILTER
  //por su origen api o db
  const handleFilterCreated = (e)=>{
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
  }
  //por genre
  const handleFilterGenre = (e) =>{
    e.preventDefault();
    dispatch(filterGameByGenre(e.target.value))
  }

  
    return (
      <div className={style.containerHome}>
        <div className={style.title}>
          <SearchBar />
        </div>
        <div className={style.containerDrop}>
          <section>
            <select className={style.dropInput}
              onChange = {(e)=>{
                handleClickOrderAlp(e);
              }}>
                <option value="null">Name</option>
                <option value="asc">a-z</option>
                <option value="des">z-a</option>
            </select>

            <select className={style.dropInput}
              onChange={(e)=>{
                handleClickOrderRating(e);
              }}>
                <option value="null">Rating</option>
                <option value="asc">Min</option>
                <option value="des">Max</option>
            </select>

            <select className={style.dropInput}
              onChange={(e)=>{
                handleFilterCreated(e);
              }}>
                <option value="null">Source</option>
                <option value="created">DB</option>
                <option value="api">API</option>
            </select>

            <select className={style.dropInput}
              onChange={(e)=>{
                handleFilterGenre(e)
              }}>
                <option value="all">Genre</option>
                {genres.map((elem)=>{
                  return (
                    <option value={elem.name} key={elem.name}>
                      {elem.name}
                    </option>
                  )
                })}
            </select>
          </section>
        </div>
        <div>
          <Pagination allVideogames={allVideogames}/>      
        </div>
      </div>
    );
  }
  
  export default Home;
  
//const [games, setGames] = useState([])
  //montaje: sin redux
//   useEffect(() => {
//     axios.get(`http://localhost:3001/videogames`)
//     .then (({data}) => {
//       setGames([...games, ...data])
//     })
//     return () => {
//       setGames([])
//     }
//   }, [])

/*
<Cards allVideogames = {allVideogames}/>*/