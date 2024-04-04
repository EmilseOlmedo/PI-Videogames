// import React from 'react';

import Card from '../card/Card';

import style from './cards.module.css';

const Cards = ({allVideogames}) =>{ //las props de allVideogmes
  const videogamesList = allVideogames

    return (
      <div className={style.cardsContainer}>
        {
        videogamesList?.map((game)=>{
          return (
          <Card game = {game} />
          // key={game.id}
          // id={game.id}
          // name={game.name}
          // image={game.background_image}
          // genres={game.genres}
          // rating={game.rating}
          // />
          )          
        })}
      </div>
    );
  }
  
  export default Cards;