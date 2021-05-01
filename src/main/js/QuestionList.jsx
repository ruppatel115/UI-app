import {Question} from "../../main/js/QuestionDropdown"
import {useState } from 'react';
import { questionListModel, imageTaskList } from "../../test/resources/ExampleQuestions";
import { Button, Container, Row, Col, Image} from "react-bootstrap";
import Images from "../js/Images"
import { ImageTask } from "./ImageTask";
import { QuestionDropdown } from "./QuestionDropdown";


export const QuestionList = (props) => {


    









    return (

       <div>


            <div class="d-flex justify-content-front"> {props.curQuestionIndex+1} / {props.questionListModel.length}</div>

            
            <h1>&nbsp;</h1>

            <div class="d-flex justify-content-center">{props.questionListModel[props.curQuestionIndex].questionText}</div>
            <h1>&nbsp;</h1>

            <Question questionModel={props.questionListModel[props.curQuestionIndex]} nextQuestion={props.nextQuestion} prevQuestion={props.prevQuestion}/>
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
            
            <Button variant="flat"  size="lg" onClick={props.prevQuestion} disabled={props.curQuestionIndex===0}>Previous Question</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="flat" size="lg" onClick={props.nextQuestion} disabled={props.curQuestionIndex === (props.questionListModel.length-1)}>Next Question</Button>{' '}
           </Col>
        </div>
            
        

    );
}