import  { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import s from "./CheckboxSlider.module.css";
import './Range.css';

const CheckboxSlider = ({title, label, min, max, value1, value2}) => { 

    return (
        <div className={s.CheckboxSlider}>
            <h2 className={s.title}>{title}</h2> 
            <div className={s.range}>     
                <Range min={min} max={max} defaultValue={[value1, value2]}/>
                <div className={s.form}>
                    <label className={s.label}>от</label>               
                    <input className={s.input} type="text" min="0" max="150" value={value1}/>
                    <label className={s.label}>до</label>               
                    <input className={s.input} type="text" min="0" max="150" value={value2}/>
                    <label className={s.label}>{label}</label>  
                </div>
            </div>    

        </div>
    )};

export default CheckboxSlider;