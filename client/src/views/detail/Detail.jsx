import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogamesDetail } from '../../redux/actions';
import { useEffect } from 'react';
import style from './detail.module.css'

const Detail = () =>{
  const {id} = useParams(); //me trae como resultado un {}
  const dispatch = useDispatch();
  const videogameDetail = useSelector ((state)=>state.videogameDetail)
//videogamesDetail es un {}
  useEffect(()=>{
  dispatch(getVideogamesDetail(id))
  }, [dispatch, id])

    return (
      <div className={style.containerAll}>
        <h2 className={style.title}>{videogameDetail?.name}</h2>
        <div className={style.detail} >
          <p>ID: {id}</p>       
          <p>RELEASED: {videogameDetail.released}</p>
          <p>RATING: {videogameDetail.rating}</p>
          <p>GENRES: {videogameDetail.genres}</p>
          <p>PLATFORMS: {videogameDetail.platforms}</p>
          <p>DESCRIPTION</p>
        </div>
        <div className={style.description}>
          <p>{videogameDetail.description}</p>
          </div>
        <div className={style.imagenContainer}>
          <img src = {videogameDetail.background_image} alt= "name"/>
        </div> 
      </div>
    );
  }
  
  export default Detail;