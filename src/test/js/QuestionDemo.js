import React from 'react';

import {structureQuestion} from "../resources/ExampleQuestions"
import {Question} from "../../main/js/Question"

export const QuestionDemo = props => {
    return (
        <div className="App">
            <Question questionModel={structureQuestion} />
        </div>
    )
}
