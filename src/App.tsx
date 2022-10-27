import React from "react";
import Header from "./components/header/Header";
import AsideLeft from "./components/AsideLeft/AsideLeft";
import Main from "./components/Main/Main";
import RightAside from "./components/RightAside/RightAside";

const App: React.FunctionComponent = ()=> {
  return (
    <div className="container">
      <Header/>
      <AsideLeft/>
      <Main/>
      <RightAside/>
      </div>
      

   
  );
}

export default App;
