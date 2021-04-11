// var a=require("./a.js");
// var [c,d,e]=[10,20,30];

// console.log(a.m);

/**
 * react and App is "default" export
 * {render} is just export,can be enumerated.
*/
import React from "react"
import {render} from "react-dom"
import App from "./App.js"

render(
    <App></App>,// ****param1 : the jsx component****
    document.getElementById("app-container")// ****param2 : the place or the box you want to hook the components ****
)