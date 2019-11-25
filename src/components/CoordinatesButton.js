// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component{
    doOnClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }

    render(){
        console.log(this.props.onReceiveCoordinates)
        return <button onClick = {this.doOnClick}>CLICK ME</button>
    }
}