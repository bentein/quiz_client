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
        <form onSubmit={this.registerContender} className="registerForm">
          <label className="displayNameLabel">
            <input type="text" className="displayNameField" placeholder="Your Nickname" value={this.state.displayName} onChange={this.handleChange} />
          </label>
          <div className="difficultySection">
            <ButtonGroup>
              <Button bsStyle="success">Eazy</Button>
              <Button bsStyle="warning" checked>Medium</Button>
              <Button bsStyle="danger">Hard</Button>
            </ButtonGroup>
          </div>
          <Button type="submit" className="submitButton">Start</Button>
        </form>
        
      </div>
    )

  }
}
export default RegisterScreen;