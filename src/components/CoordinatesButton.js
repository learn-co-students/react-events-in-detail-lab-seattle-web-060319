import React, { Component } from "react";

class CoordinatesButton extends Component {
  handleClick = event => {
    let array = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(array);
  };

  render() {
    return <button onClick={this.handleClick}></button>;
  }
}

export default CoordinatesButton;
