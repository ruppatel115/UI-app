import React from 'react';

import {questionListModel} from "../resources/ExampleQuestions"
import {QuestionList} from "../../main/js/QuestionList"
import {ImageTask} from "../../main/js/ImageTask"
import { Button, Container, Row, Col, Image} from "react-bootstrap";




export const QuestionListDemo = props => {
    return (
        <Container className="block-example border border-dark">
            <Row>
            
                <Col>
                <ImageTask/>
                </Col>
                
                <Col>
                <QuestionList questionListModel ={questionListModel} />
                </Col>
            </Row>
        </Container>
    );
}