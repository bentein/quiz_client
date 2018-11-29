import React from "react";
import ReactDOM from "react-dom";
import { ButtonGroup, Button } from "react-bootstrap"
import "./RegisterScreen.css";


class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.registerContender = this.registerContender.bind(this);
  }

  handleChange(event) {
    this.setState({displayName: event.target.value});
  }

  registerContender(event) {
    alert('A name was submitted: ' + this.state.displayName);
    event.preventDefault();
  }

  render() {
    return (
      <div className="registerScreen">
      <a className="headerText">Code Quiz</a>
      <form onSubmit={this.registerContender} className="registerForm">
        <label className="displayNameLabel">
          <input type="text" className="displayNameField" placeholder="Enter Nickname" value={this.state.displayName} onChange={this.handleChange} />
        </label>
        <a className="chooseDifficulty">Choose how difficult you want the quiz to be!</a>
        <div className="difficultySection">
          <Button type="submit" className="buttonEasy">EASY</Button>
          <Button type="submit" className="buttonMedium">MEDIUM</Button>
          <Button type="submit" className="buttonHard">HARD</Button>
        </div>
      </form>
      </div>
    )
  }
}
export default RegisterScreen;