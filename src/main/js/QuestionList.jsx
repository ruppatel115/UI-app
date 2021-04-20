import {Question} from "../../main/js/QuestionDropdown"
import {useState } from 'react';
import { questionListModel, imageTaskList } from "../../test/resources/ExampleQuestions";
import { Button, Container, Row, Col, Image} from "react-bootstrap";
import Images from "../js/Images"
import { ImageTask } from "./ImageTask";


export const QuestionList = (props) => {

    const [curQuestionIndex, setCurQuestionIndex] = useState(0);

    const prevQuestion = () => {
        setCurQuestionIndex(curQuestionIndex-1);
    }

    const nextQuestion = () => {
        setCurQuestionIndex(curQuestionIndex+1);
    }

    return (
        <div>
            {props.questionListModel[curQuestionIndex].questionText}
            <Question questionModel={props.questionListModel[curQuestionIndex]} />
            <Button variant="primary" onClick={prevQuestion} disabled={curQuestionIndex===0}>Previous Question</Button>{' '}
            <Button variant="primary" onClick={nextQuestion} disabled={curQuestionIndex === (questionListModel.length-1)}>Next Question</Button>{' '}
        </div>



            
        

    );
}