import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames } from "../../redux/actions";


import NavBar from "../../components/navBar/NavBar";
import Pagination from "../../components/pagination/Pagination";
// import Cards from "../../components/cards/Cards";



const Home = () =>{

  const dispatch = useDispatch();
  // const {allVideogames} = useSelector((state)=>state) //me suscribo a los cambios de mi initialSate= allVideogames del reducer 
//           ^ es el estado allVideogames que tengo en el reducer

  const allVideogames = useSelector ((state)=>state.allVideogames)

  useEffect(()=>{
    dispatch(getAllVideogames())
    //agregar el desmonte aquí con un return
  }, [dispatch])

  
    return (
      <div>
        <p>Estoy en Home</p>

        <NavBar />
        <Pagination allVideogames={allVideogames}/>
        {/* <Cards /> */}
        

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