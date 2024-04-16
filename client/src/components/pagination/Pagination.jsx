import React from "react";
import { useState } from "react";
import Cards from '../cards/Cards';

import style from '../pagination/pagination.module.css';

const Pagination = ({allVideogames}) => {
    // const games = allVideogames
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 15;
  
    // Calcular el índice inicial y final de las tarjetas en la página actual
    const indexOfLastCard = currentPage * cardsPerPage; //1*15=15 última carta de la página  2*15=30
    const indexOfFirstCard = indexOfLastCard - cardsPerPage; //15-15=0                      30-15=15
    const currentCards = allVideogames.slice(indexOfFirstCard, indexOfLastCard); //corto las cards desde 0 a 15
  
    // Cambiar a la página siguiente
    const nextPage = () => {
      setCurrentPage(currentPage + 1); //seteo mi estado de la pagina actual
    };
  
    // Cambiar a la página anterior
    const prevPage = () => {
      setCurrentPage(currentPage - 1);
    };
  
    return (
      <div>
        <Cards videogamesList={currentCards} />
        <div className={style.containerPag}>
          <div>
            <button className={style.buttom} onClick={prevPage} disabled={currentPage === 1}>
              Previous
            </button>
          </div>
            <button className={style.buttom} onClick={nextPage} disabled={indexOfLastCard >= allVideogames.length}>
              Next
            </button>
        </div>
      </div>
    );
  };
  
  export default Pagination;
