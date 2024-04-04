import style from './navbar.module.css'

const NavBar = () =>{
    return (
      <div className={style.containerNav}>
        <form>
          <input placeholder = 'Name'/>
          <button>Search</button>
        </form>
        <p>Mi NavBar</p>
        
      </div>
    );
  }
  
  export default NavBar;