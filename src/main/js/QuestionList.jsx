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
            <h1>&nbsp;</h1>
            <div>{props.questionListModel[curQuestionIndex].questionText}</div>
            <h1>&nbsp;</h1>
            <Question questionModel={props.questionListModel[curQuestionIndex]} />
            <h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1>
            
            <Col>
            <style type="text/css">
            {`
            .btn-flat {
              background-color: #5105d7;
              color: white;
            }
        
            .btn-xxl {
              padding: 1rem 1.5rem;
              font-size: 1.5rem;
            }
            `}
            </style>
            
            <Button variant="flat"  size="lg" onClick={prevQuestion} disabled={curQuestionIndex===0}>Previous Question</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="flat" size="lg" onClick={nextQuestion} disabled={curQuestionIndex === (props.questionListModel.length-1)}>Next Question</Button>{' '}
           </Col>
        </div>
            
        

    );
}