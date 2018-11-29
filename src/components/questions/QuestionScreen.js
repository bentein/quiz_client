import React from "react";
import ReactDOM from "react-dom";
import Timer from "./timer/Timer";


class QuestionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: ["ingame"],
      region: "en"
    }
  }

  render() {
    return (
      <div>
        QUESTIONS
        <Timer maxTime={300}></Timer>
      </div>
    )

  }
}
export default QuestionScreen;