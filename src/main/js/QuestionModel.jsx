import {Container, Button} from "react-bootstrap";
import {useState } from 'react';
import { questionListModel } from "../../test/resources/ExampleQuestions";




export const Question = props => {
    //creates a variable that will persist across function calls, but is private to this object
    const [feedbackText, setFeedbackText] = useState(null);
    
    // a function to handle change events from the dropdown
    function handleAnswerChange(e){
        if (e.target.value === questionListModel.correctAnswer){
            setFeedbackText("Correct");

        }
        else if (e.target.key === null){
            setFeedbackText(null);
        }
        else {
            setFeedbackText("Incorrect");
        }
    }


 


    var i =0;
    // const [currQuestion, setQuestion] = useState(questionList[0]);

    // function handleNextQuestionOnClick(e){
    //     //if at index 0; previous button can't be pressed
    //     //if at last value in list; next button can't be pressed 
    //     //if answer == incorrect next button disabled
    //     //if answer correct next button enabled
    //     //can go to previous if not at index 0 
        
        
    //         if (feedbackText === "Correct"){
                
    //             setQuestion(questionList[i+=1]);

    //         }

    //         else if (feedbackText === null){
    //             setQuestion(questionList[i])
    //         }

    //         else {
    //             setQuestion(questionList[i])

    //         }

    // }

    // function handlePrevQuestionOnClick(e){
        
    //         if (feedbackText === "Correct"){
                
    //             setQuestion(questionList[i-=1]);

    //         }

    //         else if (feedbackText === null){
    //             setQuestion(questionList[i])
    //         }

    //         else {
    //             setQuestion(questionList[i])

    //         }

    // }
    


 

    


    //this could be done with a for loop doing an accumulator, if you prefer

    //using currQuestion while component running, it works but doesn't without

    var optionComponents = questionListModel.possibleAnswers.map(possAnswerStr => (<option key={possAnswerStr}>{possAnswerStr}</option>));





    



    
    
    
    

    
  
    

    //tried to use button disabling logic for prev ques : didnt work disabled= {currQuestion.questionText=questionList[0].questionText}>

    return (
        
        <Container>

        
        <div>{questionListModel.questionText}</div>





            <select onChange={handleAnswerChange} defaultValue="---Select Answer---">
                <option key="---Select Answer---" disabled={true}>---Select Answer---</option>
                {optionComponents}
            </select>

            <div> {feedbackText}</div>


            
            

       
        </Container>
    );
};