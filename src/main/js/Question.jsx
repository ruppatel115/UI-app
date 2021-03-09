import {Container} from "react-bootstrap";
import { useEffect, useState } from 'react';

export const Question = props => {
    //creates a variable that will persist across function calls, but is private to this object
    const [feedbackText, setFeedbackText] = useState(null);
    
    // a function to handle change events from the dropdown
    function handleAnswerChange(e){
        if (e.target.value === props.questionModel.correctAnswer){
            setFeedbackText("Correct");
        }
        else if (e.target.key === null){
            setFeedbackText(null);
        }
        else {
            setFeedbackText("Incorrect");
        }
    }

    //this could be done with a for loop doing an accumulator, if you prefer
    const optionComponents = props.questionModel.possibleAnswers.map(possAnswerStr => (<option key={possAnswerStr}>{possAnswerStr}</option>));

    
    return (
        <Container>
            <div>{props.questionModel.questionText}</div>
            <img src = {props.questionModel.imgUrl} alt="Images Not Loading"></img>
            <select onChange={handleAnswerChange} defaultValue="---Select Answer---">
                <option key="---Select Answer---" disabled={true}>---Select Answer---</option>
                {optionComponents}
            </select>
            <div> {feedbackText}</div>
        </Container>
    );
};