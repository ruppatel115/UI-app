
import {Question} from "../../main/js/QuestionDropdown"
import {useState } from 'react';
import { questionListModel } from "../../test/resources/ExampleQuestions";


export const QuestionList = props => {

    const [curQuestionIndex, setCurQuestionIndex] = useState(0);

    const prevQuestion = () => {
        setCurQuestionIndex(curQuestionIndex-1);
    }

    const nextQuestion = () => {

            setCurQuestionIndex(curQuestionIndex+1);
        
        
    }




    function checkAnswer(e){
        if (e.target.value === props.questionListModel[curQuestionIndex].correctAnswer){
             nextQuestion();
            
        }
        
    }

    //set logic to disbale buttons for out of bounds errors
    return (
        <div>
            <Question questionModel={props.questionListModel[curQuestionIndex]} />
            <button onClick={prevQuestion} disabled={curQuestionIndex===0}>Previous Question</button>
            <button onClick={checkAnswer} disabled={curQuestionIndex === (questionListModel.length-1)}>Next Question</button>
        </div>
        

    );
}