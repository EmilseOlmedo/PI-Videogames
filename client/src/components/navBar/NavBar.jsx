import {Link} from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'
// import Filter from '../filterAndOrder/Filter'

import style from './navbar.module.css'

const NavBar = () =>{
 


    return (
      <div className={style.containerNav}>
        <Link to='/home'> <button>Home</button> </Link>
        <Link to='/create'> <button>Create</button> </Link>
        <div>
          <SearchBar/>
          {/* <Filter/> */}
        </div>        
      </div>
    );
  }
  
export default NavBar;