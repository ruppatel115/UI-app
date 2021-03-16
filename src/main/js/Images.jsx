import React from 'react';
import {Container, Col, Row, Image} from "react-bootstrap";

import { planeQuestion } from '../../test/resources/ExampleQuestions';
import img from '../../main/js/images/3CTransverse.jpg';




export const Images = props => {
    //const images = props.questionModel.imageUrl.map(displayImg => (<option key={displayImg}/>));


    //display image seperately
    

    return (
        
       
        
        <Image img src = {planeQuestion.imageUrl} alt = "DIDNT WORK" style={{ 
            width: 500, 
            height: 400,
        }}
        />
        
      
    
    );
};

export default Images;