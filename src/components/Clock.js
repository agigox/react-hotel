import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    console.log("constructor...");
    this.state = {
      date: new Date().toLocaleString(),
      loading: false,
    };
  }
  tick() {
    this.setState({
      date: `${new Date().toLocaleString()}`,
      loading: true,
    });
    /*
        this.setState((prevState, props) => {
            console.log(prevState, props);
            return {date: `${new Date().toLocaleString()}`}
        })
        */
  }
  componentDidMount() {
    console.log("componentDidMount...");

    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  render() {
    console.log("render...");
    const { date } = this.state;
    return <div className="clock">{date}</div>;
  }
}

export default Clock;
