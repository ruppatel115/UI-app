import {useState } from 'react';
import { questionListModel, imageTaskList } from "../../test/resources/ExampleQuestions";
import { Button, Container, Row, Col, Image} from "react-bootstrap";
import {Question} from "../../main/js/QuestionDropdown"
import { QuestionList } from './QuestionList';

export const ImageTask = (props) => {



    const [curQuestionIndex, setCurQuestionIndex] = useState(0);


    const resetIndx = () => {
        setCurQuestionIndex(0);
    }

    
    return ( 
        
       <Container className="block-example border border-dark">
 
       <Row>
           <Col>
            <Image src = {props.model.imageUrl} alt="NOT WORKING"/>
            </Col>

            <Col>
            <QuestionList questionListModel ={props.model.taskQuestions} />
            </Col>
        </Row>

        </Container>
    );
}