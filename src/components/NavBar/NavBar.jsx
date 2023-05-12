import SearchBar from "../Search/SearchBar";
import style from "./NavBar.module.css";
import {Link} from 'react-router-dom';

const NavBar = ({onSearch}) =>{
    return(
        <div className={style.nav}>
            <SearchBar onSearch={onSearch}/>
            <Link to = '/Home'>
                <button>Home</button>
            </Link>
            <Link to = '/About'>
                <button>About</button>
            </Link>


        </div>
    );

};

export default NavBar;
