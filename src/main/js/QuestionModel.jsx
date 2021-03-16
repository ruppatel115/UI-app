import {Container, Row, Col} from "react-bootstrap";
import {useState } from 'react';
import { planeQuestion, structureQuestion } from "../../test/resources/ExampleQuestions";

export const Question = props => {
    //creates a variable that will persist across function calls, but is private to this object
    const [feedbackText, setFeedbackText] = useState(null);
    
    // a function to handle change events from the dropdown
    function handleAnswerChange(e){
        if (e.target.value === props.questionModel.correctAnswer){
            setFeedbackText("Correct");
        }
        else if (e.target.key === null){
            setFeedbackText(null);
        }
        else {
            setFeedbackText("Incorrect");
        }
    }


    function handleClick(e){



    }


 

    




    //this could be done with a for loop doing an accumulator, if you prefer
    const optionComponents = props.questionModel.possibleAnswers.map(possAnswerStr => (<option key={possAnswerStr}>{possAnswerStr}</option>));

    //list of question models to iterate through each object based on the index
    const questionModelList= []

    questionModelList.push({planeQuestion,structureQuestion})


    
    
    
    

    

    


    
    
    return (
        
        <Container>
            

            <div>{questionModelList[0].planeQuestion.questionText}</div>
            <select onChange={handleAnswerChange} defaultValue="---Select Answer---">
                <option key="---Select Answer---" disabled={true}>---Select Answer---</option>
                {optionComponents}
            </select>

            <div> {feedbackText}</div>


            <button>Previous Question</button>

            <button>Next Question</button>

            
            

       
        </Container>
    );
};