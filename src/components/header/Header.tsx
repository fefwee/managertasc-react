import React from "react";
import style from './Header.module.css';
import logo from "../../images/logo.png";
import lamp from "../../images/lamp.png";

 export const Header:React.FunctionComponent =()=>{
    return(
      <div className = "container">
        <div className={style.header}>
        <div className={style.logo}>
          <img src={logo} alt="logo" />
        </div>
        <nav className={style.menu}>
          <li className={style.lamp}><img src={lamp} alt="lamp" /></li>
          <li className={style.profile}></li>
        </nav>
        </div>
    
      </div>
  
  
    )
  }