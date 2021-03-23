import React from 'react';

import {questionList} from "../resources/ExampleQuestions"
import {Question} from "../../main/js/QuestionModel"
import Images from "../../main/js/Images";

export const QuestionDemo = props => {
    return (
        <div>
        <div className="question-container"><img alt="pLogo" src="PARlogo.JPG" style={{ 
            width: 800, 
            height: 300,
            float: "center"
            
        }}/></div>

        <Images/>
        
        <Question questionModel={questionList} />

            
        </div>
    )
}
