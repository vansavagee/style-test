import React, { Component } from 'react'

export class Question extends Component {

  render() {

    return (
      <div className='task' >
        <h3>{this.props.question.id}. {this.props.question.task}</h3>

        <img 
          className={this.props.answers[this.props.question.id]===1?'imgforquestion active':'imgforquestion'}
          src={"./img/"+this.props.question.id+"/"+this.props.question.img1}
          onClick = {()=> {
            this.props.onAdd(this.props.question,1)
          }}
        />

        <img className={this.props.answers[this.props.question.id]===2?'imgforquestion active':'imgforquestion'} 
        src={"./img/"+this.props.question.id+"/"+this.props.question.img2} 
        onClick = {()=> {
          this.props.onAdd(this.props.question,2)}}/>
        <img className={this.props.answers[this.props.question.id]===3?'imgforquestion active':'imgforquestion'}
        src={"./img/"+this.props.question.id+"/"+this.props.question.img3} 
        onClick = {()=> {
          this.props.onAdd(this.props.question,3)}}/>
        <img className={this.props.answers[this.props.question.id]===4?'imgforquestion active':'imgforquestion'}
        src={"./img/"+this.props.question.id+"/"+this.props.question.img4} 
        onClick = {()=> {
          this.props.onAdd(this.props.question,4)}}/>
        <img className={this.props.answers[this.props.question.id]===5?'imgforquestion active':'imgforquestion'}
        src={"./img/"+this.props.question.id+"/"+this.props.question.img5} 
        onClick = {()=> {
          this.props.onAdd(this.props.question,5)}}/>
        </div>

    )
  }
}

export default Question