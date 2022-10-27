import React, { FunctionComponent } from "react"
import style from './LeftAside.module.css';
import plus from '../../images/plus.png'

  export const LeftAside:FunctionComponent = ()=> {
return(
   <div className="container">
    <div className="GlobalPropAside">
      <div className={style.LeftAsideBlock}>
      <a href="/" className="GlobalBtn">Создать <img src={plus} alt="add" className={style.PlusBtn}/></a>
      </div>
  
    </div>
   </div> 
)
 }