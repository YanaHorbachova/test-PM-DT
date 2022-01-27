import {ReactComponent as Arrow} from '../../icon/arrow-to-down.svg'
import {ReactComponent as Language} from '../../icon/language.svg'

import s from './LanguageBar.module.css'

const LanguageBar = () => {
    return (
        <div className={s.LanguageBar}>
            <Language className={s.icon}/>
            <p className={s.text}>RU</p>
            <Arrow className={s.arrow}/>            
        </div>
    )};

export default LanguageBar;