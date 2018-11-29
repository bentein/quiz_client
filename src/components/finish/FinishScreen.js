import React from "react";
import ReactDOM from "react-dom";


class FinishScreen extends React.Component {
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
        <div className="background">
            <div className="background-bow"></div>
            <div className="background-block"></div>
        </div>
        <div>Register</div>
      </div>
    )

  }
}
export default FinishScreen;