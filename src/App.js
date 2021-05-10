//import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {QuestionListDemo} from "./test/js/QuestionListDemo";
import { ImageTask } from './main/js/ImageTask';
import { StudentView } from './main/js/StudentView';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './main/js/NavBar';
import { Container } from 'react-bootstrap';
import { ProgressDemo } from './test/js/ProgressDemo';

class App extends React.Component {
  
  render(){
    // Keep this class empty except for a single, top-level component
    // Then you can manually test any component by dropping it in here
    return (

   


      <div>


      <div className="question-container"><img alt="pLogo" src="PARlogo.JPG" style={{ 
        width: 400, 
        height: 200,
        float: "center"
        
    }}/></div>

      <div className="bg">
      <NavBar/>
      
      


      <Container className="white">
        <StudentView/>
        <ProgressDemo/>        

        </Container>
      </div>
     )
  }

}

export default App;
