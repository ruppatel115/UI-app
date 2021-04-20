import React from 'react';

import {planeQuestion, structureQuestion} from "../resources/ExampleQuestions"
import {Question} from "../../main/js/QuestionDropdown"
import Images from "../../main/js/Images";

export const QuestionDemo = props => {
    return (
        <div>
            <Images questionModel={planeQuestion.imageUrl} />
            <Question questionModel={planeQuestion} />
            <Question questionModel={structureQuestion} />
        </div>
    )
}
