import {useState } from 'react';
import { questionListModel, imageTaskList } from "../../test/resources/ExampleQuestions";
import { Button, Container, Row, Col, Image} from "react-bootstrap";
import {Question} from "../../main/js/QuestionDropdown"

export const ImageTask = props => {

    const [curQuestionIndex, setCurQuestionIndex] = useState(0);


    const skipQuestions = () => {

        setCurQuestionIndex(curQuestionIndex+1);
    
    }

//Do I use UseState?
const [curImageList, setCurImageList] = useState(0);



// //Should be able to retrieve all questions for Specific image in a list
// function createImageTask(imageQuestionsList){
//     //Go through the list
//     let i =0;
//     while(i < questionListModel.length-1){
//         //get the current image url
//         let currImage = questionListModel[i].imageUrl;
//         //list to be added for lists of list
//         let curImageList = []
        
        
//         for(let j =1 ; j < questionListModel.length-1; j++){
//             //compare images and if they are the same add that to the current List
//             if(currImage === questionListModel[j].imageUrl){
//                 curImageList.push(currImage)
//             }
            
           
//         }
//         //add the images lists for a specific question to another list that holds all questions image in an order.
//         i+=1;


//         imageQuestionsList.push(curImageList);


    
//     }

//     return imageQuestionsList;
    
    

// }

// let imageQuestionsList = []

// createImageTask(imageQuestionsList)

//make several imagetask to work in list to test
//getting list outside to get something done and button in imagetask list and do same thing questionList

//IMTASKMODEL -> IMAGETASK and QUESTIONLIST


//imagetask model should include images and list of questions and would be done by the server



    //set logic to disbale buttons for out of bounds errors



    //Image and questionList should be rendered
    return (
        
        <div>

            <Image src = {imageTaskList[curQuestionIndex].imageUrl} alt="NOT WORKING"/>

                        <div><Button variant="danger" onClick={skipQuestions} disabled={curQuestionIndex=== (imageTaskList.length-1)}>Skip Questions</Button>{' '}</div>
              
        </div>



            
        

    );
}