import {Link} from 'react-router-dom';

import styles from './card.module.css'

const Card = ({game}) =>{
  const {id, name, background_image, genres} = game;

    return (
      <div className={styles.containerCard}>
      
      <h2 className={styles.text}>{name}</h2>
      <Link to={`/detail/${id}`} >
      <img src = {background_image} alt= "name"/>
      </Link>
      <p>{genres}</p>
        
      
      </div>
    );
  }
  
export default Card;