import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
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
            <ImageTask model={imageTaskModel} />
            <Button variant="danger" onClick={()=>setTaskId(taskId+1)}>Skip Questions</Button>
        </Container>    
    );
}