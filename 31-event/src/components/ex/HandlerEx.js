import React, { Component } from 'react'

export default class HandlerEx extends Component {

    state = {
        message: "Hello World!",
      }

    handleClick = () => {
        this.setState({
            message: "Goodbye World!"
        })
     } 

  render() {
    return (
      <>
      <h1>{this.state.message}</h1>
      <button onClick={this.handleClick}>change message</button>
      </>
    )
  }
}
