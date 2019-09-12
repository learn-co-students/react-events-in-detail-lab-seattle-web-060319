// Code CoordinatesButton Component Here
import React from 'react'


class CoordinatesButton extends React.Component {

  handleClick(e) {
      e.persist();
    let array = [];
    array[0] = e.clientX
    array[1] = e.clientY
    this.props.onReceiveCoordinates(array)
  }

  render() {
    return(
       <button onClick={this.handleClick.bind(this)}>Coord Button
       </button>
    )
  }
}

export default CoordinatesButton
