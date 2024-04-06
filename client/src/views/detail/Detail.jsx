import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogamesDetail } from '../../redux/actions';
import { useEffect } from 'react';

const Detail = () =>{
  const {id} = useParams(); //me trae como resultado un {}
  const dispatch = useDispatch();
  const videogameDetail = useSelector ((state)=>state.videogameDetail)
//videogamesDetail es un {}
  useEffect(()=>{
    dispatch(getVideogamesDetail(id))
  }, [dispatch, id])

    return (
      <div>
        <h2>{videogameDetail?.name}</h2>
        <p>ID: {id}</p>
        <img src = {videogameDetail.background_image} alt= "name"/>
        <p>Platforms: {videogameDetail.platforms}</p>
        <p>Description: {videogameDetail.description}</p>
        <p>Released: {videogameDetail.released}</p>
        <p>Rating: {videogameDetail.rating}</p>
        <p>Genres: {videogameDetail.genres}</p>
      </div>
    );
  }
  
  export default Detail;