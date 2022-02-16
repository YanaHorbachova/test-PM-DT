import { Mobile, Desktop } from '../../utils/mediaQuery';

import {ReactComponent as Glass} from '../../icon/glass.svg'
import {ReactComponent as Marker} from '../../icon/marker.svg'

import s from'./SearchForm.module.css'

const SearchForm = () => {
    return (
        <div className={s.SearchForm}>
             <form className={s.form}>
                <label className={s.FormLabel}>
                <Mobile>
                    <input
                        className={s.input}
                        type="text"
                        name="position"
                        placeholder="Поиск">
                    </input>

                </Mobile>  
                <Desktop>         
                    <input
                        className={s.InputPosition}
                        type="text"
                        name="position"
                        placeholder="На какую должность вы ищете кандидата?">
                    </input>
                </Desktop> 
                <Glass className={s.icon}/>
                </label>

                <label className={s.FormLabel}>               
                <input
                    className={s.input}
                    type="text"
                    name="town"
                    placeholder="Город"
                />
                <Marker className={s.iconMarker}/>
                <button className={s.button} type="submit">
                  Найти кандидатов
                </button>
                </label>
            </form>
             
        
        </div>
    )};

export default SearchForm;