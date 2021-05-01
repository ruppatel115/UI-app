import {useState } from 'react';
import { questionListModel, imageTaskList } from "../../test/resources/ExampleQuestions";
import { Button, Container, Row, Col, Image} from "react-bootstrap";
import {Question} from "../../main/js/QuestionDropdown"
import { QuestionList } from './QuestionList';
import { render } from 'react-dom';

export const ImageTask = (props) => {



    
    return ( 
        
        
        <Row>
       
           <Col>
           
            <Image src = {props.model.imageUrl} alt="NOT WORKING"></Image>
            </Col>

            <Col>
           
            <QuestionList questionListModel ={props.model.taskQuestions}  curQuestionIndex={props.curQuestionIndex} nextQuestion={props.nextQuestion} prevQuestion={props.prevQuestion}/>
            </Col>
        </Row>

    );

}