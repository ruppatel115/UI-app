import React from "react";
import Data from './testData.json';


export const Questions = props => {
  return (
    <>
      <div className="question-container"><img alt="pLogo" src="PARlogo.JPG" /></div>
      
      <div>{Data.QuestionInfo.map((question)=> {return question.questionText})}</div>

      <div>

        <select>
          <option selected disabled="true">---Select Answer---</option>
          {
            Data.QuestionInfo.map((result)=>(<option text={result.id}>{result.possibleAnswers}</option>))
              
          }
        </select>
      </div>
      
    </>
  );
};

export default Questions;