import React, { useEffect } from "react";
import { useSelector,useDispatch  } from 'react-redux';
import  getСandidates  from '../../redux/candidates/candidates-operations';
import { getTotalСandidates, getAllСandidates  } from "../../redux/candidates/candidates-selectors";

import { Mobile, Desktop } from '../../utils/mediaQuery';
import CardList from '../CardList';
import useModal from '../Modal/useModal';
import Modal from '../Modal'
import {ReactComponent as Line} from '../../icon/line.svg'
import {ReactComponent as Arrow} from '../../icon/arrow-to-down.svg'
import {ReactComponent as Menu} from '../../icon/menu.svg'

import s from "./ContainerMain.module.css";

const Main = () => {
    const dispatch = useDispatch();
    const {showModal, toggle} = useModal();

    useEffect(()=>{
        dispatch(getСandidates());
      },[dispatch])
      
    const totalСandidates = useSelector(getTotalСandidates);  
    const Сandidates = useSelector(getAllСandidates); 

    console.log(Сandidates)

    return (
        <div className={s.container}>
          <h2 className={s.title}>Мы подобрали <span className={s.total}>{totalСandidates}</span> резюме</h2>
          <Line className={s.line}/>

          <Mobile>
            <p className={s.text}>Резюме продавец консультант во Всей Украине</p>
            <div className={s.filters}>
              <div>
                <p className={s.period}>за все время</p> 
                <Arrow className={s.arrow}/>
              </div>
                <button className={s.button} type="button" onClick={toggle}><Menu/></button> 
                {showModal && (<Modal toggle={toggle}></Modal> )} 
            </div>     
            <CardList/>
          </Mobile>

          <Desktop>
            <p className={s.text}>Резюме продавец консультант во Всей Украине</p>
            <p className={s.period}>за все время</p> 
            <Arrow className={s.arrow}/>      

            <CardList/>
            {/* <FilterBar/> */}

          </Desktop>
      
        </div>
    )};

export default Main;