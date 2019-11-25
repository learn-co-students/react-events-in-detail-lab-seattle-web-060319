// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component{
    doOnClick = (event) => {
        event.persist();
        setTimeout(() => {
          this.props.onDelayedClick(event);
        }, this.props.delay);
    }

    render(){
        console.log(this.props.onReceiveCoordinates)
        return <button onClick = {this.doOnClick}>CLICK ME BUT I'M DELAYED</button>
    }
}