import React from "react";
import {Header} from "./components/header/Header";
import {LeftAside} from "./components/LeftASide/LeftAside";
import {RightAside} from "./components/RightAside/RightAside";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer"

 export const App: React.FunctionComponent = ()=> {
  return (
    <div className='container'>
      <Header/>
      
      <div className="PanelOfTasc">
        <div><LeftAside/></div>
        <div><Main/></div>
        <div><RightAside/></div>
      </div>
      <Footer/>
    
      </div>
      

   
  );
}

