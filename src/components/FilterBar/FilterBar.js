import Switch from "../Switch";
import s from "./FilterBar.module.css";

const FilterBar = ({checked, chengeCheckbox}) => { 

    return (
        <div className={s.FilterBar}>
            <h2 className={s.title}>Фильтры</h2> 
             <Switch label={'Только с фотографией'} checked={checked} chengeCheckbox={chengeCheckbox}/>



      
        </div>
    )};

export default FilterBar;