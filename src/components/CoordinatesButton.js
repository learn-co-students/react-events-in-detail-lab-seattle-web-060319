// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {
    render() {
        return (
            <button onClick={this.buttonFunction}></button>
        )
    }

    buttonFunction = (event) => {
        let array = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(array)
    }
}