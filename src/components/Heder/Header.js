import AppBar from '../AppBar/AppBar';
import SearchForm from '../SearchForm';

import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.Header}>
            <AppBar/>
            <SearchForm/>        
        </div>
    )};

export default Header;