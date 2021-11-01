import React from "react";
import ReactDOM from "react-dom";

const fName = "Albert";
const lName = "Esver";
const getCurrentYear = () => {
  return new Date().getFullYear();
};

ReactDOM.render(
  <div>
    <p>Created by {`${fName} ${lName}`}</p>
    <p>Copyright {getCurrentYear()}</p>
  </div>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
