import React from "react";
import style from './Header.module.css';
import logo from '../../images/logo.png';

 export const Header:React.FunctionComponent =()=>{
    return(
      <div className = "container">
      <div className={style.header}>
        <div className={style.wrapperBtn}>
       <div className={style.logo}>
        <img src={logo} alt="" />
        </div>
        <div className={style.headerBtn}>
        <li className={style.headerBtnOne}>Pабота</li>
        <li className={style.headerBtnTwo}>Учеба</li>
        <li className={style.headerBtnThree}>Хобби</li>
        </div>
        
        </div>
       
       <div className={style.headerProfile}>
        Проф
       </div>
      </div>
    
      </div>
  
  
    )
  }