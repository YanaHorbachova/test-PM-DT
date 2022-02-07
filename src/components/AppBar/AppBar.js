import { Mobile, Desktop } from '../../utils/mediaQuery';
import UserMenu from '../UserMenu';

import {ReactComponent as Arrow} from '../../icon/arrow-to-down.svg'
import {ReactComponent as User} from '../../icon/user.svg'

import s from './AppBar.module.css'

const AppBar = () => {
    return (
        <div  className={s.AppBar}>
        <Mobile>
            <div className={s.TopPanel}>
                <UserMenu/>
                <p className={s.text}> Соискателю 
                    <span className={s.arrow}><Arrow/></span>
                </p>                    
            </div>
            <div>
                <p className={s.user}>
                    <span className={s.icon}><User/></span> 
                    Юра Марченко
                </p> 
            </div>
        </Mobile>

        <Desktop>
            <div className={s.TopPanel}>
                <ul className={s.ListLink}>
                    <li className={s.item}> 
                        <a href=" " className={s.link}>Соискатель</a>
                    </li>
                    <li className={s.item}> 
                        <a href=" " className={s.current}>Работодатель</a>
                    </li>
                    <li className={s.item}> 
                        <a href=" " className={s.link}>HR</a>
                    </li>
                </ul>

                <div className={s.UserPanel}>
                    <UserMenu/>
                    <a href=" " className={s.LinkAuthorization}>Войти</a>
                </div>
            </div>
        </Desktop>      
    </div>

    )};

export default AppBar;