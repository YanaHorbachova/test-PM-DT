import NavBar from '../NavBar/NavBar';
import SearchForm from '../SearchForm';

import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.Header}>
            <NavBar/>
            <SearchForm/>        
        </div>
    )};

export default Header;