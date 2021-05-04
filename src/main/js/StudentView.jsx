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


    const [feedbackText, setFeedbackText] = useState(null);
    

    const [value, setValue] = useState("--Select Answer--");

    // a function to handle change events from the dropdown
    function handleAnswerChange(e){
        if (e.target.value === imageTaskModel.taskQuestions.correctAnswer){
            setFeedbackText("Correct");
            //setAnswer(e.target.value);
            setValue(e.target.value)

            
            
            


        
        }
        else if (e.target.value === null){
            setFeedbackText(null);
            


            

            

            
            
            
        }
        else {
            setFeedbackText("Incorrect");
            setValue(e.target.value)


            

            

        }


    }



 


    

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
        <Container>

        <Row>




            <ImageTask model={imageTaskModel} handleAnswerChange={handleAnswerChange} feedbackText={feedbackText} value={value} skipQuestions={skipQuestions} imageTaskModel={imageTaskModel} taskId={taskId} curQuestionIndex={curQuestionIndex} nextQuestion={nextQuestion} prevQuestion={prevQuestion} />

            </Row>
        </Container>    
    );
}