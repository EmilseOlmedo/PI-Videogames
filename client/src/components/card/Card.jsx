import {Link} from 'react-router-dom';

import style from './card.module.css'

const Card = ({game}) =>{
  const {id, name, background_image, genres} = game;

    return (
      <Link to={`/detail/${id}`} >
        <div className={style.hero}>
          <div >
            <img src = {background_image} alt= "name" />
          </div>
          <div className={style.containerText}/>
            <div className={style.title}>
              <p>{name}</p>
            </div>
            <div className={style.description}>
              <p>{genres}</p>
            </div>
        </div>
      </Link>
    );
  }
  
export default Card;