import s from "./BtnGroupList.module.css";

const BtnGroupList = () => { 
    return (
        <div className={s.checkboxBtnGroup}>
            <label>
                <input type="checkbox" checked/>
                <span>Любой</span>
            </label>
            <label>
                <input type="checkbox"/>
                <span>Женщины</span>
            </label>
            <label>
                <input type="checkbox"/>
                <span>Мужчины</span>
            </label>
        </div>
    )};

export default BtnGroupList;