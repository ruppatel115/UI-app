//import logo from './logo.svg';
import React from 'react';
import './App.css';

import {QuestionDemo} from "./test/js/QuestionDemo";

class App extends React.Component {
  
  render(){
    // Keep this class empty except for a single, top-level component
    // Then you can manually test any component by dropping it in here
    return (
      <div className="App">
        <QuestionDemo/>
      </div>
     )
  }

}

export default App;
