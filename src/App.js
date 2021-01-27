import { Component } from "react";
import Timer from "./Timer";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

class App extends Component {
  state = {
    hours: "00",
    min: "00",
    sec: "00",
  };

  startTimer = () => {
    this.setState({
      hours: "00",
      min: "00",
      sec: "00",
    });

    Timer().subscribe((value) => {
      this.setState({
        hours: value.getUTCHours(),
        min: value.getMinutes(),
        sec: value.getSeconds(),
      });
    });
  };

  resetTimer = () => {
    // Timer().unsubscribe(Timer());
  };

  render() {
    const { hours, min, sec } = this.state;
    return (
      <>
        <Container>
          <p>{hours > 0 ? hours : "00"}</p>
          <p>:</p>
          <p>{min > 0 ? min : "00"}</p>
          <p>:</p>
          <p>{sec > 0 ? sec : "00"}</p>
        </Container>
        <button onClick={this.startTimer}>start</button>
        <button>wait</button>
        <button onClick={this.resetTimer}>reset</button>
      </>
    );
  }
}

export default App;
