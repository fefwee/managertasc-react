import React from "react";
import logo from "./images/logo.png"

const Header:React.FunctionComponent =()=>{
    return(
      <div className = "container">
        <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="menu">
          <li>тема</li>
          <li>окно профиля</li>
        </nav>
        </div>
    
      </div>
  
  
    )
  }
  export default Header;