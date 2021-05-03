import {Container, Row, Col, DropdownButton, ButtonGroup, Dropdown} from "react-bootstrap";
import {useState, useRef, useEffect } from 'react';
import { questionListModel } from "../../test/resources/ExampleQuestions";



export const Question = props => {
    //creates a variable that will persist across function calls, but is private to this object
    const [feedbackText, setFeedbackText] = useState(null);
    





    
    // a function to handle change events from the dropdown
    function handleAnswerChange(e){
        if (e.target.value === props.questionModel.correctAnswer){
            setFeedbackText("Correct");
            //setAnswer(e.target.value);

            
            

            
        
        }
        else if (e.target.key === null){
            setFeedbackText(null);
            
        }
        else {
            setFeedbackText("Incorrect");
            

        }


    }



    //set useState for whether it was answered 
    //set default for all questions
    //update value from studentView to change the default value





    
    //this could be done with a for loop doing an accumulator, if you prefer
    const optionComponents = props.questionModel.possibleAnswers.map(possAnswerStr => (<option key={possAnswerStr}>{possAnswerStr}</option>));



    //holds state for one question but then changes back to first option for the next or previous question
    
    return (
        
        <Container>
        <Col>
        <select class="dropdown" onChange={handleAnswerChange} defaultValue="---Select Answer---" >
            <option key="---Select Answer---" disabled={true}>---Select Answer---</option>
            {optionComponents}
        </select>
       <div class="d-flex justify-content-center">{feedbackText}</div>
        </Col>


         
          
        </Container>
    );
};