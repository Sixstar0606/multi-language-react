import React, { Component, Suspense } from "react";
import "./App.css";
import "./components/i18n";
import Introduction from "./components/Introduction";
import Advantages from "./components/Advantage";
import LanguageSelector from "./components/LanguageSelector";
import Greet from "./components/Greet";


const App = () => {

  return (

    <div>

      <Suspense fallback={null}>

        <LanguageSelector />

        <Introduction />

        <Advantages />
        <Greet/>

      </Suspense>

    </div>

  );

};


export default App;