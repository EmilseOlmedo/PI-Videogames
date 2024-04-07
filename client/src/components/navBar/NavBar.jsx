import {Link} from 'react-router-dom'

import SearchBar from '../searchBar/SearchBar'

import style from './navbar.module.css'

const NavBar = () =>{
    return (
      <div className={style.containerNav}>
        <Link to='/home'> <button>Home</button> </Link>
        <Link to='/create'> <button>Create</button> </Link>
        <div>
          <SearchBar/>
        </div>
        <form>
          <input placeholder = 'Name'/>
          <button>Search</button>
        </form>  
      </div>
    );
  }
  
export default NavBar;