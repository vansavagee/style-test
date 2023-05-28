import React, { Component } from 'react'
export class Result extends Component {

  render() {
    return (
      <div>{this.props.answers[1]}</div>
    )
  }
}

export default Result