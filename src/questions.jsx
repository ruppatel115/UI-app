import React from "react";
import Data from './testData.json';


export const Questions = props => {
  return (
    <>
      
      <div>{Data.QuestionInfo.map((question)=> {return question.questionText})}</div>

      <div>

        <select>
          <option selected disabled="true">---Select Answer---</option>
          {
            Data.QuestionInfo.map((result)=>(<option text={result.id}>{result.possibleAnswerA}</option>))
              
          }
          {
            Data.QuestionInfo.map((result)=>(<option text={result.id}>{result.possibleAnswerB}</option>))
          }
        </select>
      </div>
      
    </>
  );
};

export default Questions;