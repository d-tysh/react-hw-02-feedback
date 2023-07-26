import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  addFeedback = (value) => {
    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1
      }
    })
  }

  render() {
    return (
      <div>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          addFeedback={this.addFeedback}/>
      </div>
    );
  }
};
