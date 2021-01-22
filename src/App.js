import { Component } from "react";
import Timer from "./Timer";

class App extends Component {
  state = {
    hours: "00",
    min: "00",
    sec: "00",
  };

  startTimer = () => {
    Timer.subscribe({
      next: (value) => {
        this.setState({
          hours: value.getUTCHours(),
          min: value.getMinutes(),
          sec: value.getSeconds(),
        });
      },
    });
  };

  resetTimer = () => {};

  render() {
    const { hours, min, sec } = this.state;
    return (
      <>
        <p>{hours > 0 ? hours : "00"}</p>
        <p>:</p>
        <p>{min > 0 ? min : "00"}</p>
        <p>:</p>
        <p>{sec > 0 ? sec : "00"}</p>
        <button onClick={this.startTimer}>start</button>
        <button>wait</button>
        <button onClick={this.resetTimer}>reset</button>
      </>
    );
  }
}

export default App;
