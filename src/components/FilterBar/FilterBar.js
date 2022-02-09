import Switch from "../Switch";
import CheckboxSlider from "../CheckboxSlider/CheckboxSlider";
import {ReactComponent as Photo} from '../../icon/photo-filter.svg'

import s from "./FilterBar.module.css";

const FilterBar = ({checked, chengeCheckbox}) => { 

    return (
        <div className={s.FilterBar}>
            <h2 className={s.title}>Фильтры</h2> 
            <div className={s.photoFilter}>
                <Photo/>
                <Switch label={'Только с фотографией'} checked={checked} chengeCheckbox={chengeCheckbox}/>
            </div>
            <div>
                <CheckboxSlider title={'Возраст'} label={'лет'} value1={18} value2={40} min={16} max={45}/>
            </div>
            



      
        </div>
    )};

export default FilterBar;