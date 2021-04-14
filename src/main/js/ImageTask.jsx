import {useState } from 'react';
import { questionListModel } from "../../test/resources/ExampleQuestions";
import { Button, Container, Row, Col, Image} from "react-bootstrap";
import {Question} from "../../main/js/QuestionDropdown"

export const ImageTask = props => {

    const [curQuestionIndex, setCurQuestionIndex] = useState(0);


    const skipQuestions = () => {

        setCurQuestionIndex(curQuestionIndex+1);
    
    }

//Do I use UseState?
const [curImageList, setCurImageList] = useState(0);



//Should be able to retrieve all questions for Specific image in a list
function createImageTask(imageQuestionsList){
    //Go through the list
    for(let i =0 ; i < questionListModel.length-1; i++){
        //get the current image url
        let currImage = questionListModel[i].imageUrl;
        //list to be added for lists of list
        let curImageList = []
        
        
        for(let j =0 ; j < questionListModel.length-1; j++){
            //compare images and if they are the same add that to the current List
            if(currImage === questionListModel[j].imageUrl){
                curImageList.push(currImage)
            }
            

        
        }
        //add the images lists for a specific question to another list that holds all questions image in an order.


        imageQuestionsList.push(curImageList);

    
    }

    return imageQuestionsList;
    
    

}

let imageQuestionsList = []

imageQuestionsList = createImageTask(imageQuestionsList)







    //set logic to disbale buttons for out of bounds errors
    return (
        
        <div>

           
            <Image src = {questionListModel[curQuestionIndex].imageUrl} alt="DID NOT WORK" />

                        <div><Button variant="danger" onClick={skipQuestions} disabled={curQuestionIndex=== (questionListModel.length-1)}>Skip Questions</Button>{' '}</div>
              
        </div>



            
        

    );
}