import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import RegisterScreen from './components/register/RegisterScreen'
import QuestionScreen from './components/questions/QuestionScreen'
import FinishScreen from './components/finish/FinishScreen'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background">
          <div className="background-bow"></div>
          <div className="background-block"></div>
        </div>
        <Route path="/" exact component={RegisterScreen} />
        <Route path="/questions" component={QuestionScreen} />
        <Route path="/finish" component={FinishScreen} />
      </div>
    );
  }
}

export default App;
