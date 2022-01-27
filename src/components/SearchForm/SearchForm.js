import './SearchForm.module.css'

import {ReactComponent as Glass} from '../../icon/glass.svg'
import {ReactComponent as Marker} from '../../icon/marker.svg'


const SearchForm = () => {
    return (
        <div className="SearchForm">
             <form className="form">
                <label className="form-label">            
                <input
                    className="input"
                    type="text"
                    name="position"
                    placeholder="На какую должность вы ищете кандидата?">
                </input>
                <Glass className="form-icon"/>
                </label>

                <label className="form-label">               
                <input
                    className="input"
                    type="text"
                    name="town"
                    placeholder="Город"
                />
                <Marker className="form-icon"/>
                <button className="form-button" type="submit">
                  Найти кандидатов
                </button>
                </label>
            </form>
             
        
        </div>
    )};

export default SearchForm;