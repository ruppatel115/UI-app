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

class App extends React.Component {
  
  render(){
    // Keep this class empty except for a single, top-level component
    // Then you can manually test any component by dropping it in here
    return (

   

      <div className="bg">
      <NavBar/>
      
      

  



      <Container className="white">
        <StudentView/>
        
        
        </Container>
        
      </div>
     )
  }

}

export default App;
