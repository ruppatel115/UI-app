import { useEffect, useState } from "react";
import { Button, Container, Row,Col } from "react-bootstrap";
import { imageTask, questionListModel } from "../../test/resources/ExampleQuestions";
import { getFromServer } from "./Comm";
import { ImageTask } from "./ImageTask";

export const StudentView=(props) => {
    const [imageTaskModel, setImageTaskModel] = useState(imageTask);
    console.debug(imageTaskModel);
    const [taskId, setTaskId] = useState(1);

    useEffect(() => {
        getFromServer("http://localhost:3001/", "imageTasks/"+taskId).then((newModelFromServer)=> setImageTaskModel(newModelFromServer));
    });



    //list of not selecteds w the answers and updates the states based on questions answered

    //call back from dropdown to update the list to setter for the value currently








    const skipQuestions = () => {
      setTaskId(taskId+1)
      setCurQuestionIndex(0)
    }
    const [curQuestionIndex, setCurQuestionIndex] = useState(0);


    const prevQuestion = () => {
        setCurQuestionIndex(curQuestionIndex-1);
        
    }

    const nextQuestion = () => {
        setCurQuestionIndex(curQuestionIndex+1);  
     
    }


    return (
        <Container class="block-example">

        <Row>
        <Button style={{ marginLeft: "auto" }} variant="skip" size="md" onClick={skipQuestions} disabled={taskId === imageTask.taskQuestions.length}>Skip Current Questions</Button>



        <style type="text/css">
        {`
        .btn-skip {
          background-color: red;
          color: black;
        }
    
        .btn-xxl {
          padding: 1rem 1.5rem;
          font-size: 1.0rem;
        }
        `}
        </style>
           
            <ImageTask model={imageTaskModel} curQuestionIndex={curQuestionIndex} nextQuestion={nextQuestion} prevQuestion={prevQuestion} />

            </Row>
        </Container>    
    );
}