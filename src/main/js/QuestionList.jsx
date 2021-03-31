
import {Question} from "../../main/js/QuestionDropdown"
import {useState } from 'react';


export const QuestionList = props => {

    const [curQuestionIndex, setCurQuestionIndex] = useState(0);

    const prevQuestion = () => {
        setCurQuestionIndex(curQuestionIndex-1);
    }

    const nextQuestion = () => {
        setCurQuestionIndex(curQuestionIndex+1);
    }

    return (
        <div>
            <Question questionModel={props.questionListModel[curQuestionIndex]} />
            <button onClick={prevQuestion}>prev</button>
            <button onClick={nextQuestion}>next</button>
        </div>
        

    );
}