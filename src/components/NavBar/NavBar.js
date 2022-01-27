import { Mobile, Desktop } from '../../utils/mediaQuery';
import LanguageBar from '../LanguageBar';

import {ReactComponent as Arrow} from '../../icon/arrow-to-down.svg'
import {ReactComponent as User} from '../../icon/user.svg'

import s from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={s.Header}>
        <Mobile>
            <div>
                <LanguageBar/>
                <p> Соискателю 
                    <span><Arrow/></span>
                </p>                    
            </div>
            <div>
                <p className={s.user}>
                    <span><User/></span> 
                    Юра Марченко
                </p> 
            </div>
        </Mobile>

        <Desktop>
            <div className={s.NavList}>
                <ul>
                    <li className={s.item}> 
                        <a href=" " className={s.link}>Соискатель</a>
                    </li>
                    <li className={s.item}> 
                        <a href=" " className={s.link}>Работодатель</a>
                    </li>
                    <li className={s.item}> 
                        <a href=" " className={s.link}>HR</a>
                    </li>
                </ul>
            </div>
            <LanguageBar/>
            <a href=" " className={s.LinkAuthorization}>Войти</a>
        </Desktop>      
    </div>

    )};

export default NavBar;