import React from 'react';

import {planeQuestion, structureQuestion} from "../resources/ExampleQuestions"
import {Question} from "../../main/js/QuestionModel"
import Images from "../../main/js/Images";

export const QuestionDemo = props => {
    return (
        <div>

            <Images className="left" questionModel={planeQuestion.imageUrl}/>
            
            <Question questionModel={planeQuestion} />

            
        </div>
    )
}
