import {useState } from 'react';
import { questionListModel, imageTaskList } from "../../test/resources/ExampleQuestions";
import { Button, Container, Row, Col, Image} from "react-bootstrap";
import {Question} from "../../main/js/QuestionDropdown"
import { QuestionList } from './QuestionList';
import { render } from 'react-dom';

export const ImageTask = (props) => {


    const [isOpen, setIsOpen] = useState(false);

    function handleImageClick(){
        setIsOpen(!isOpen);
        console.log('Clicked')


    }


    
    return ( 
        

        <div class="container">
            <div class="row mt-2">
            
                <div class="col-lg-6">

                <img class="background3" src = {props.model.imageUrl} onClick={handleImageClick} style={{ width: "525px" }}  alt="NOT WORKING"></img>
                {isOpen && (
                <dialog
                  className="dialog"
                  style={{ position: 'absolute' }}
                  open
                  onClick={handleImageClick}
                >
                  <img
                    className="zoom"
                    src={props.model.imageUrl}
                    onClick={handleImageClick}
                    alt="DIDNT WORK"
                  />
                </dialog>
              )}
      
         
                </div>
                <div class="col-lg-6 text-center background2">
                    <QuestionList questionListModel ={props.model.taskQuestions} handleAnswerChange={props.handleAnswerChange} feedbackImageList={props.feedbackImageList} answerList={props.answerList} skipQuestions={props.skipQuestions}  taskId={props.taskId} imageTaskList={props.model.imageTaskList} curQuestionIndex={props.curQuestionIndex} nextQuestion={props.nextQuestion} prevQuestion={props.prevQuestion}/>

                </div>
            </div>
        </div>
            
      

    );

}