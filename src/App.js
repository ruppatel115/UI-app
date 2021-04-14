//import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {QuestionListDemo} from "./test/js/QuestionListDemo";

class App extends React.Component {
  
  render(){
    // Keep this class empty except for a single, top-level component
    // Then you can manually test any component by dropping it in here
    return (

      <div className="App">
      <div className="question-container"><img alt="pLogo" src="PARlogo.JPG" style={{ 
        width: 800, 
        height: 300,
        float: "center"
        
    }}/></div>
       
        <QuestionListDemo/>
        
      </div>
     )
  }

}

export default App;
