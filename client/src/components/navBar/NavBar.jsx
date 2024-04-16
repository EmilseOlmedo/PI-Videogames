import {Link} from 'react-router-dom'

import style from './navbar.module.css'

const NavBar = () =>{

    return (
      <div className={style.container}>
        <div>       
        <Link to='/home'> <button className={style.navigationButton}>HOME</button> </Link>
        <Link to='/create'> <button className={style.navigationButton}>CREATE VIDEOGAME</button> </Link>
        </div>         
      </div>
    );
  }
  
export default NavBar;