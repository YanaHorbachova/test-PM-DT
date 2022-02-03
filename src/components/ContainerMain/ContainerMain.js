import React, { useEffect } from "react";
import { useSelector,useDispatch  } from 'react-redux'
import  getСandidates  from '../../redux/candidates/candidates-operations'
import { getTotalСandidates, getAllСandidates  } from "../../redux/candidates/candidates-selectors";
import CardList from '../CardList'
import s from "./ContainerMain.module.css";


const Main = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getСandidates());
      },[dispatch])


    const totalСandidates = useSelector(getTotalСandidates);  
    const Сandidates = useSelector(getAllСandidates); 
    
    console.log(totalСandidates)
    console.log(Сandidates)

    return (
        <div className={s.Main}>

            <CardList/>



      
        </div>
    )};

export default Main;