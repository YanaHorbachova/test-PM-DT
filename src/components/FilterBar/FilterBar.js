import Switch from "../Switch";
import CheckboxSlider from "../CheckboxSlider";
import BtnGroupList from "../BtnGroupList";
import ListItems from "../ListItems";
import {experience, employmentType, Education} from "../ListItems/Items";

import {ReactComponent as Photo} from '../../icon/photo-filter.svg'
import {ReactComponent as Student} from '../../icon/students.svg'

import s from "./FilterBar.module.css";

const FilterBar = ({checked, chengeCheckbox}) => { 

    return (
        <div className={s.FilterBar}>
            <h2 className={s.FilterBarTitle}>Фильтры</h2> 
            <div className={s.photoFilter}>
                <Photo className={s.svg}/>
                <Switch label={'Только с фотографией'} checked={checked} chengeCheckbox={chengeCheckbox}/>
            </div>
            <div className={s.box}>                
                <h3 className={s.title}>Возраст</h3> 
                <CheckboxSlider label={'лет'} value1={18} value2={40} min={16} max={45}/>
            </div>
            <div className={s.box}>                
                <h3 className={s.title}>Пол</h3> 
                <BtnGroupList/>
            </div>
            <div className={s.box}>                
                <h3 className={s.title}>Желаемая зарплата</h3>
                <CheckboxSlider label={'грн'} value1={1000} value2={8000} min={0} max={10000}/>
                <Switch label={'Не показывать без зарплаты'} checked={false} chengeCheckbox={null}/> 
            </div>
            <div className={s.box}>                
                <h3 className={s.title}>Опыт работы</h3> 
                <ListItems items={experience}/>
                <div className={s.studentFilter}>
                    <Student className={s.svg}/>
                    <Switch label={'Только студенты'} checked={false} chengeCheckbox={null}/>
                </div>
            </div>
            <div className={s.box}>                
                <h3 className={s.title}>Владение языками</h3> 
            </div>
            <div className={s.box}>                
                <h3 className={s.title}>Тип занятости</h3> 
                <ListItems items={employmentType}/>
            </div>
            <div className={s.box}>                
                <h3 className={s.title}>Образование</h3> 
                <ListItems items={Education}/>
            </div>      
        </div>
    )};

export default FilterBar;