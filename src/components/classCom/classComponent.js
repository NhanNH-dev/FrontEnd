import React, { Component } from "react";

export default class classComponent extends Component {
  state = {
    count: 0,
    isOn: false,
    bool: false,
    x: null,
    y: null
  };

  increament = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };
  componentDidMount() {
      document.title = `you have been ${this.state.count}`;
      window.addEventListener('mousemove', this.handleMouseMove);
  }
  componentWillUnmount() {
      window.removeEventListener('mousemove', this.handleMouseMove);  
  }
  
  componentDidUpdate(){
    document.title = `you have been ${this.state.count}`
  }
  changeColor = () => {
    this.setState(prevState => ({ isOn: !prevState.isOn }));
  };
  changeColor1 = () => {
    this.setState(prevState => ({ bool: !prevState.bool }));
  };
  handleMouseMove = event =>{
      this.setState({
        x: event.pageX,
        y: event.pageY
      })
  }
  render() {
    const style1 = {
      listStyle: "none",
      color: "red"
    };

    return (
      <div>
        <button onClick={this.increament}>
          classComponent {this.state.count} clicked{" "}
        </button>
        <h2>change color</h2>
        <div
          onClick={this.changeColor}
          style={{
            height: "50px",
            width: "50px",
            backgroundColor: this.state.isOn ? "green" : "yellow",
            border: "1px solid black"
          }}
        />
        <ul onClick={this.changeColor1} style={this.state.bool ? style1 : null}>
          <li>Torres</li>
          <li>Gerrard</li>
          <li>Alonso</li>
        </ul>
        <h2>Mouse position</h2>
        <p>X position: {this.state.x}</p>
        <p>Y position: {this.state.y}</p>
      </div>
    );
  }
}
