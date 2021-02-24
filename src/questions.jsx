import React from "react";
import Data from './testData.json';


export const Questions = props => {
  return (
    <>
      <div className="question-container"><img alt="pLogo" src="PARlogo.JPG" /></div>
      
      <input
      type="text"
      className="posts"
      placeholder="Make this drop down menu"
      autoComplete="off"
    />
    </>
  );
};

export default Questions;