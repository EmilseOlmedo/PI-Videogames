// import React from 'react';

import Card from '../card/Card';

import style from './cards.module.css';

const Cards = ({ videogamesList }) => {
  return (
    <div className={style.cardsContainer}>
      {videogamesList.map((game) => (
        <Card
          key={game.id}
          game={game}
        />
      ))}
    </div>
  );
};
  
  export default Cards;
