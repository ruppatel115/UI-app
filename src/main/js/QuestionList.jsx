
import {Question} from "../../main/js/QuestionDropdown"
import {useState } from 'react';


export const QuestionList = props => {

    const [curQuestionIndex, setCurQuestionIndex] = useState(0);

    return (
        <Question querstionModel={props.questionListModel[curQuestionIndex]} />
    );
}