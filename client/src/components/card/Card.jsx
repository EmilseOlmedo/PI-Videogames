// import styles from './card.module.css'
import {Link} from 'react-router-dom';

const Card = ({game}) =>{
  const {id, name, background_image, genres} = game;

    return (
      <div>
      
        <h2>{name}</h2>
        <Link to={`/detail/${id}`} >
        <img src = {background_image} alt= "name"/>
        </Link>
        <p>{genres}</p>
        
      
      </div>
    );
  }
  
export default Card;