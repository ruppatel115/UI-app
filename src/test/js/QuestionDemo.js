import React from 'react';

import {planeQuestion, structureQuestion} from "../resources/ExampleQuestions"
import {Question} from "../../main/js/Question"

export const QuestionDemo = props => {
    return (
        <div>
            <Question questionModel={planeQuestion} />
            <Question questionModel={structureQuestion} />
        </div>
    )
}
