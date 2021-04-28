import {useState } from 'react';
import { questionListModel, imageTaskList } from "../../test/resources/ExampleQuestions";
import { Button, Container, Row, Col, Image} from "react-bootstrap";
import {Question} from "../../main/js/QuestionDropdown"
import { QuestionList } from './QuestionList';
import { render } from 'react-dom';

export const ImageTask = (props) => {



    const [curQuestionIndex, setCurQuestionIndex] = useState(0);


    const resetIndx = () => {
        setCurQuestionIndex(0);
    }



    //Most examples online show something like this?

    // class ImageTask extends React.Component {
    //     constructor(){
    //         this.state= {
    //             index : 0

    //         }
    //     }
    // }


 //   then return (this.state.index)




    
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