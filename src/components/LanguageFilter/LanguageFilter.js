import {ReactComponent as English} from '../../icon/united-kingdom.svg'
import {ReactComponent as Arrow} from '../../icon/arrow-to-down.svg'
import {ReactComponent as ArrowUp} from '../../icon/up-arrow.svg'

import s from "./LanguageFilter.module.css";

const LanguageFilter = ({items, level}) => { 
    return (
        <form className={s.listItems}>
            <div className = {s.item}>
                <input type="checkbox" name="text" id='1-1' checked/>                        
                        <label for='1-1'> <span className={s.flag}><English/></span>Английский</label>                    
                        <p className={s.total}>603</p>
                        <ArrowUp className={s.arrow}/>
            </div>
            <div>
                {level.map(({text,total,id}) => (
                    <div className = {s.level}>                   
                        <input type="checkbox" name="text" id={id}/>
                        <label for={id}>{text}</label>                    
                        <p className={s.total}>{total}</p>                        
                    </div>
                ))}
             </div>

            {items.map(({text,flag,total,id}) => (
                <div className = {s.item}>                   
                    <input type="checkbox" name="text" id={id}/>
                    <label for={id}><span className={s.flag}>{flag}</span>{text}</label>                    
                    <p className={s.total}>{total}</p>
                    <Arrow className={s.arrow}/>
                </div>
            ))}            
        </form>
    )};

export default LanguageFilter;