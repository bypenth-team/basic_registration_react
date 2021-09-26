import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
//import App from "./components/App";
import FullWidthGrid from "./App"
//import * as serviceWorker from "./serviceWorker";






ReactDOM.render(
    <BrowserRouter>
        <FullWidthGrid />,
      
       
    </BrowserRouter>,
    
 
   
 
 
    document.getElementById("root")
);

//serviceWorker.unregister();