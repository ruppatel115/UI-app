import {Question} from "../../main/js/QuestionDropdown"
import {useState } from 'react';
import { questionListModel } from "../../test/resources/ExampleQuestions";
import { Button, Container, Row, Col, Image} from "react-bootstrap";


export const QuestionList = props => {

    const [curQuestionIndex, setCurQuestionIndex] = useState(0);

    const prevQuestion = () => {
        setCurQuestionIndex(curQuestionIndex-1);
    }

    const nextQuestion = () => {

        setCurQuestionIndex(curQuestionIndex+1);
        
        
    }




   

    //set logic to disbale buttons for out of bounds errors
    return (
        <Container className="block-example border border-dark">


            <Row>
                <Col>
                    <Image src = {questionListModel[curQuestionIndex].imageUrl} alt="DID NOT WORK" />
                </Col>

                <Col>
                    {props.questionListModel[curQuestionIndex].questionText}

                    <Question questionModel={props.questionListModel[curQuestionIndex]} />

                        
                        <Button variant="primary" onClick={prevQuestion} disabled={curQuestionIndex===0}>Previous Question</Button>{' '}
                        <Button variant="primary" onClick={nextQuestion} disabled={curQuestionIndex === (questionListModel.length-1)}>Next Question</Button>{' '}
                        <div><Button variant="danger" onClick={nextQuestion} disabled={curQuestionIndex=== (questionListModel.length-1)}>Skip</Button>{' '}</div>
                </Col>
        
            </Row>

            

        
            </Container>


            
        

    );
}