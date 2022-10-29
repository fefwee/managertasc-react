import React from "react";
import style from './ModalWindow.module.css'


export const ModalWindow: React.FunctionComponent = ()=>{
    return(
        <div className={style.ModalWindowOverlay}>
            <div className={style.ModalWindowBlock}>
                <div className = {style.ModalWindowContainer}></div>
            </div>
        </div>
    )
}