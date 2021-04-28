import { useEffect, useState } from "react";
import { Button, Container, Row,Col } from "react-bootstrap";
import { imageTask } from "../../test/resources/ExampleQuestions";
import { getFromServer } from "./Comm";
import { ImageTask } from "./ImageTask";

export const StudentView=(props) => {
    const [imageTaskModel, setImageTaskModel] = useState(imageTask);
    console.debug(imageTaskModel);
    const [taskId, setTaskId] = useState(1);

    useEffect(() => {
        getFromServer("http://localhost:3001/", "imageTasks/"+taskId).then((newModelFromServer)=> setImageTaskModel(newModelFromServer));
    });





    return (
        <Container>
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
           
            <ImageTask model={imageTaskModel} />
            <Button variant="skip" size="lg" onClick={()=>setTaskId(taskId+1)} disabled={taskId === imageTask.taskQuestions.length-1}>Skip Current Questions</Button>
         
        </Container>    
    );
}