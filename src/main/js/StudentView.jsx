import { useEffect, useState } from "react";
import { Button, Container, Row,Col } from "react-bootstrap";
import { imageTask, questionListModel } from "../../test/resources/ExampleQuestions";
import { getFromServer } from "./Comm";
import { ImageTask } from "./ImageTask";
import checkMark from "./images/checkMark.jpg";
import xMark from "./images/xMark.jpg";
import white from "./images/white.png"

export const StudentView=(props) => {
    const [imageTaskModel, setImageTaskModel] = useState(imageTask);
    console.debug(imageTaskModel);
    const [taskId, setTaskId] = useState(1);

    useEffect(() => {
        getFromServer("http://localhost:3001/", "imageTasks/"+taskId).then((newModelFromServer)=> setImageTaskModel(newModelFromServer));
    });



    //list of not selecteds w the answers and updates the states based on questions answered

    //call back from dropdown to update the list to setter for the value currently


    

    let answers=  []
    

    for(let i=0; i < imageTaskModel.taskQuestions.length; i++){
            answers.push("--Select Answer--")
    }




    const [answerList, setAnswerList] = useState(answers);




    //do the same thing for images?
    


    let imageList = []


    for(let i=0; i < imageTaskModel.taskQuestions.length; i++){
        imageList.push(white)
    }   


    const [feedbackImageList, setFeedbackImage] = useState(imageList);



    // a function to handle change events from the dropdown
    const handleAnswerSelected = (curQuestionIndex, selectedAnswer) => {
        answerList[curQuestionIndex]=selectedAnswer;
        setAnswerList(answerList);

        if (selectedAnswer === imageTaskModel.taskQuestions[curQuestionIndex].correctAnswer){
            feedbackImageList[curQuestionIndex] = checkMark;
            setFeedbackImage(feedbackImageList);


        }
        else if (selectedAnswer === null){
            feedbackImageList[curQuestionIndex] = white;
            setFeedbackImage(feedbackImageList);

        }
        else {
            feedbackImageList[curQuestionIndex] = xMark;
            setFeedbackImage(feedbackImageList);
        
        }


    }


    


    const skipQuestions = () => {
      setTaskId(taskId+1);
      setCurQuestionIndex(0);
      setAnswerList(answers)
      setFeedbackImage(imageList);


    }
    const [curQuestionIndex, setCurQuestionIndex] = useState(0);


    const prevQuestion = () => {
        setCurQuestionIndex(curQuestionIndex-1);


        
    
        
    }

    const nextQuestion = () => {
        setCurQuestionIndex(curQuestionIndex+1); 

 
        


     
    }


    // <img alt="pLogo" src={checkMark}/>


    // <img alt="pLogo" src={xMark}/>

    
    


    
    return (
        <Container>

        <Row>

       



            <ImageTask model={imageTaskModel} handleAnswerChange={handleAnswerSelected} feedbackImageList={feedbackImageList} answerList={answerList} skipQuestions={skipQuestions} imageTaskModel={imageTaskModel} taskId={taskId} curQuestionIndex={curQuestionIndex} nextQuestion={nextQuestion} prevQuestion={prevQuestion} />

            </Row>
        </Container>    
    );
}