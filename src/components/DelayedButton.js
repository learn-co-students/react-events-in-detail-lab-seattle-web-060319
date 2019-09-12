// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

  handleClick = (e) => {
      e.persist();
      let funcall = this.props.onDelayedClick(e)
      console.log(this.props)
      let delay = this.props.delay;
    setTimeout(function(e){ return funcall }, delay)
  }

  render() {
    return(
      <button onClick={this.handleClick.bind(this)}>Delay Button</button>
    )
  }
}

export default DelayedButton
