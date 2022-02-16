import React, { useState, useEffect } from "react";
import { useSelector, useDispatch  } from 'react-redux';
import  getСandidates  from '../../redux/candidates/candidates-operations';
import { getTotalСandidates } from "../../redux/candidates/candidates-selectors";

import { Mobile, Desktop } from '../../utils/mediaQuery';
import CardList from '../CardList';
import useModal from '../Modal/useModal';
import Modal from '../Modal';
import FilterBar from '../FilterBar';
import {ReactComponent as Line} from '../../icon/line.svg'
import {ReactComponent as Arrow} from '../../icon/arrow-to-down.svg'
import {ReactComponent as Menu} from '../../icon/menu.svg'

import s from "./ContainerMain.module.css";

const Main = () => {
  const [checked, setChecked] = useState(false);
  const {showModal, toggle} = useModal();
  const dispatch = useDispatch();
   
  const photo = (checked? `true` : null)
  
  useEffect(()=>{
    dispatch(getСandidates(photo));    
  },[dispatch,photo])   

  const totalСandidates = useSelector(getTotalСandidates);  

  function chengeCheckbox() {
    setChecked(!checked);
  }

  console.log(checked)

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
              {showModal && (<Modal toggle={toggle}><FilterBar checked={checked} chengeCheckbox={chengeCheckbox}/></Modal> )} 
          </div>     
          <CardList/>
        </Mobile>

        <Desktop>
          <p className={s.text}>Резюме продавец консультант во Всей Украине</p>
          <p className={s.period}>за все время</p> 
          <Arrow className={s.arrow}/>      
          <div className={s.mainContainer}>
            <CardList/>
            <FilterBar checked={checked} chengeCheckbox={chengeCheckbox}/>
          </div>
        </Desktop>
    
      </div>
  )};

export default Main;