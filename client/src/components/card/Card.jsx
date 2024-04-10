import {Link} from 'react-router-dom';

import style from './card.module.css'

const Card = ({game}) =>{
  const {id, name, background_image, genres} = game;

    return (
      <div className={style.hero}>
        <div >
          <Link to={`/detail/${id}`} >
            <img src = {background_image} alt= "name" />
          </Link>
        </div>
        <div className={style.containerText}/>
          <div className={style.title}>
            <p>{name}</p>
          </div>
          <div className={style.description}>
          <p>{genres.join(' | ')}</p>
          </div>
    
      
   
      </div>
    );
  }
  
export default Card;