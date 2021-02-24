//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Questions from './questions.jsx';
import Data from './testData.json';




class App extends React.Component {
  
  render(){

    
    return (
      <div className="App">
        <div className="posts">
        <Questions/>
        </div>
      </div>
      





    )

  }

}



export default App;
