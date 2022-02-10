import s from "./ListItems.module.css";

const ListItems = ({items}) => { 
    return (
        <form className={s.listItems}>
            {items.map(({text,total,id}) => (
                <div className = {s.item}>
                    <input type="checkbox" name="text" id={id}/>
                    <label for={id}>{text}</label>
                    <span>{total}</span>
                </div>
            ))}
        </form>
    )};

export default ListItems;