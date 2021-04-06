import React from 'react';
import {Container} from "react-bootstrap";
import { questionListModel } from '../../test/resources/ExampleQuestions';
import img from '../../main/js/images/3CTransverse.jpg';




export const Images = props => {
    //const images = props.questionModel.imageUrl.map(displayImg => (<option key={displayImg}/>));


    

    return (
        
        <Container>
        
        <img src = {questionListModel.imageUrl} alt="DID NOT WORK"/>
        
         
        
        </Container>
    );
};

export default Images;