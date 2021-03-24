import React from 'react';

import {questionListModel} from "../resources/ExampleQuestions"
import {QuestionList} from "../../main/js/QuestionList"

export const QuestionListDemo = props => {
    return (
        <div>
            <QuestionList questionListModel ={questionListModel} />
        </div>
    );
}