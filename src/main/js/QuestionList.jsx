import {Question} from "../../main/js/QuestionDropdown"
import {useState } from 'react';
import { questionListModel, imageTaskList } from "../../test/resources/ExampleQuestions";
import { Button, Container, Row, Col, Image} from "react-bootstrap";
import Images from "../js/Images"
import { ImageTask } from "./ImageTask";
import { QuestionDropdown } from "./QuestionDropdown";


export const QuestionList = (props) => {


  

  //getTaskQuestions

  //See if there is a followupQuestion in each taskQuestion

  //Display if there is for a questions



  //if props indicate question is correct
  //followup question object should be created


  //create new place to create new question
  
    


    return (

       <div>


       <div class="row">

      


       <h1>&nbsp;</h1><h1>&nbsp;</h1>
       <button class="btn-list" disabled={true}>  {props.curQuestionIndex+1} / {props.questionListModel.length}</button>


       <h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1>

            <button class="btn-skip" size="md" onClick={props.skipQuestions}>Skip Question Set</button>

      
      </div>
        

            <div class="d-flex justify-content-center">{props.questionListModel[props.curQuestionIndex].questionText}</div>
            <h1>&nbsp;</h1>

            <Question questionModel={props.questionListModel[props.curQuestionIndex]} curQuestionIndex={props.curQuestionIndex} handleAnswerChange={props.handleAnswerChange} feedbackText={props.feedbackText} answer={props.answerList[props.curQuestionIndex]} nextQuestion={props.nextQuestion} prevQuestion={props.prevQuestion}/>
            <h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1><h1>&nbsp;</h1>
           


            <style type="text/css">
            {`
            .btn-flatprev {
              background-color: #5105d7;
              color: white;
              padding: .6rem;
              position: absolute;
              bottom: 1;
              margin-left: -267px;
            }

            .btn-flatnext {
              background-color: #5105d7;
              color: white;
              padding: .6rem;
              bottom: 1;
              position: absolute;
              margin-left: 150px;
            
            `}
            </style>
            
            <button class="btn-flatprev"  size="md" onClick={props.prevQuestion} disabled={props.curQuestionIndex===0}>Previous Question</button>
            <button class="btn-flatnext" size="md" onClick={props.nextQuestion} disabled={props.curQuestionIndex === (props.questionListModel.length-1)}>Next Question</button>{' '}
           
        </div>
            
        

    );
}