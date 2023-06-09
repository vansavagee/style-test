import React, { Component } from 'react'
import Question from './Question'

export class Questions extends Component {
  render() {
    return (
      <main>
        {this.props.questions.map(el =>(
          <Question key ={el.id} question ={el} onAdd ={this.props.onAdd} answers={this.props.answers}/>
        ))}
      </main>
    )
  }
}

export default Questions