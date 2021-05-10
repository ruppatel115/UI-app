import {useState } from 'react';
import { questionListModel, imageTaskList } from "../../test/resources/ExampleQuestions";
import { Button, Container, Row, Col, Image} from "react-bootstrap";
import {Question} from "../../main/js/QuestionDropdown"
import { QuestionList } from './QuestionList';
import { render } from 'react-dom';
import { ProgressDemo } from '../../test/js/ProgressDemo';



export const ImageTask = (props) => {


    const [isOpen, setIsOpen] = useState(false);

    function handleImageClick(e){
        setIsOpen(true);


    }


    
    return ( 
        

        <div class="container">
            <div class="row mt-2">
            
                <div class="col-lg-6">
                <Image src = {props.model.imageUrl} onClick={handleImageClick} style={{ width: "525px" }}  alt="NOT WORKING"></Image>
                <ProgressDemo/>        

                </div>
                <div class="col-lg-6 text-center background2">
                    <QuestionList questionListModel ={props.model.taskQuestions} handleAnswerChange={props.handleAnswerChange} feedbackText={props.feedbackText} answerList={props.answerList} skipQuestions={props.skipQuestions}  taskId={props.taskId} imageTaskList={props.model.imageTaskList} curQuestionIndex={props.curQuestionIndex} nextQuestion={props.nextQuestion} prevQuestion={props.prevQuestion}/>

                </div>
            </div>
        </div>
            
      

    );

}