// import {Container, Button} from "react-bootstrap";
// import {useState } from 'react';
// import { questionListModel } from "../../test/resources/ExampleQuestions";




// export const Question = props => {
//     //creates a variable that will persist across function calls, but is private to this object
//     const [feedbackText, setFeedbackText] = useState(null);
    
//     // a function to handle change events from the dropdown
//     function handleAnswerChange(e){
//         if (e.target.value === questionListModel.correctAnswer){
//             setFeedbackText("Correct");

//         }
//         else if (e.target.key === null){
//             setFeedbackText(null);
//         }
//         else {
//             setFeedbackText("Incorrect");
//         }
//     }


 


//     var i =0;



 

    


//     //this could be done with a for loop doing an accumulator, if you prefer

//     //using currQuestion while component running, it works but doesn't without

//     var optionComponents = questionListModel.possibleAnswers.map(possAnswerStr => (<option key={possAnswerStr}>{possAnswerStr}</option>));





    



    
    
    
    

    
  
    

//     //tried to use button disabling logic for prev ques : didnt work disabled= {currQuestion.questionText=questionList[0].questionText}>

//     return (
        
//         <Container>

        
//         <div>{questionListModel.questionText}</div>





//             <select onChange={handleAnswerChange} defaultValue="---Select Answer---">
//                 <option key="---Select Answer---" disabled={true}>---Select Answer---</option>
//                 {optionComponents}
//             </select>

//             <div> {feedbackText}</div>


            
            

       
//         </Container>
//     );
// };