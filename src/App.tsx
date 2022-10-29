import React from "react";
import {Header} from "./components/header/Header";
import {Main} from "./components/Main/Main";
import { LeftBlock } from "./components/LeftBlock/LeftBlock";


 export const App: React.FunctionComponent = ()=> {
  return (
   <div className="container">
    <div className="wrapper">
        <div className="header">
              <Header/>
        </div>
        <div className="contentBlock">
     <div className="leftBlock">
            <LeftBlock/></div>
     <div className="main">
              <Main/>
     </div>
     </div>

    </div>
    </div>
     
      

   
  );
}

