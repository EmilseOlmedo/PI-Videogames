import {Link} from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'
// import Filter from '../filterAndOrder/Filter'

import style from './navbar.module.css'

const NavBar = () =>{
 


    return (
      <div className={style.container}>
        <div>       
        <Link to='/home'> <button className={style.navigationButton}>Home</button> </Link>
        <Link to='/create'> <button className={style.navigationButton}>Create</button> </Link>
        </div>         
        <div>
          <SearchBar/>
          {/* <Filter/> */}
        </div>
      </div>
    );
  }
  
export default NavBar;