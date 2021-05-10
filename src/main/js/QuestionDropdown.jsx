import {Container, Row, Col, DropdownButton, ButtonGroup, Dropdown} from "react-bootstrap";
import {useState, useRef, useEffect } from 'react';
import { questionListModel } from "../../test/resources/ExampleQuestions";



export const Question = props => {
    //creates a variable that will persist across function calls, but is private to this object
    





    



    





    //set useState for whether it was answered 
    //set default for all questions
    //update value from studentView to change the default value



    const onAnswerChange = (e) =>{
        props.handleAnswerChange(props.curQuestionIndex, e.target.value);
        

     

    }





    
    //this could be done with a for loop doing an accumulator, if you prefer
    const optionComponents = props.questionModel.possibleAnswers.map(possAnswerStr => (<option key={possAnswerStr}>{possAnswerStr}</option>));



    //holds state for one question but then changes back to first option for the next or previous question
    
    return (
        
        <div class="row">
        <h1>&nbsp;</h1><h1>&nbsp;</h1>
        <img class="imgDes" src={props.feedbackImage}></img>
   




        <select class="dropdown" onChange={onAnswerChange} disabled={props.answer === props.questionModel.correctAnswer} value={props.answer}>
            <option>---Select Answers---</option>
            {optionComponents}
        </select>
        </div>
    );
};