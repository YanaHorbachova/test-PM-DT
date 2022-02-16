import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { getAllСandidates } from "../../redux/candidates/candidates-selectors";

import {ReactComponent as Heart} from '../../icon/heart.svg'
import {ReactComponent as DotsMenu} from '../../icon/dots.svg'

import s from "./CardList.module.css";

const CardList = () => { 
    const [isOpen, setIsOpen] = useState(false);
    const candidates = useSelector(getAllСandidates); 

    function toggleMenu (e) {
        console.log(e.target.id)
            setIsOpen(!isOpen)        
      }

    console.log(candidates)

    return (        
        <div className={s.CardList}>
            {candidates !== undefined ?
                <ul>         
                    {candidates.map(({id,desiredposition, first_name, work_city, workexperience, created_at, status}) => (
                        <li className = {s.card} key={id} onClick={(e) => console.log(e)}> 
                            <div className = {s.photo}>
                            </div>
                            <div className = {s.info}>
                                <div className = {s.infoHeder}>
                                    <h3 className={s.desiredposition}>{desiredposition[0].position}</h3>
                                   {first_name.length > 0 ? 
                                         <p className={s.name}>{first_name}, 23 года</p>
                                        : <p className={s.name}>Дмитрий, 23 года</p>}            
                                    {work_city.length > 0 ? 
                                        <p className={s.city}>{work_city[0].display_name}</p>
                                        : <p className={s.city}>Kyiv, Ukraine</p>}
                                </div>
                                {workexperience.length > 0 ? 
                                    <p className={s.workexperience}>{workexperience[0].position} {workexperience[0].company_name} - 4 мес.</p>
                                    : <p className={s.workexperience}>Координатор BALOX Agency - 4 мес.</p>}
                                {workexperience.length > 1 ? 
                                    <p className={s.workexperience}>{workexperience[1].position} {workexperience[1].company_name} - 11 мес.</p>
                                    : <p className={s.workexperience}>Оператор кол центра в DELTA - 11 мес.</p>}
                                
                                <div className = {s.infoFooter}>
                                    <p className={s.update}>Обновлено {created_at}</p>
                                    {status? 
                                    <p className={s.On}>Онлайн</p>
                                    : <p className={s.Off}>Оффлайн</p>}   
                                </div>                            
                            </div>
                            <div className={s.cardButton}>
                                <button type='button'className={s.buttonFavorites}><Heart/></button>
                                <button type='button'className={s.buttonMenu} id={id} onClick={toggleMenu}><DotsMenu/></button>
                                {isOpen?
                                    <ul className={s.menu}>
                                        <li className={s.menuItem}>Пожаловаться</li>
                                        <li className={s.menuItem}>Скрыть кандидата</li>
                                    </ul>
                                    : null}
                            </div>

                        </li>
                    ))}
            </ul>      

        : <p> Загружаем </p>}
      
        </div>
    )};

export default CardList;