import React, { Component } from 'react'

export class Question extends Component {
  constructor(props){
    super(props)
    this.state={
    }
  }
  render() {
    return (
      <div className='task' >
        <h3>{this.props.question.task}</h3>
      
        <img className={this.props.answers[this.props.question.id]===1?'imgforquestion active':'imgforquestion'}
        src={"./img/"+this.props.question.id+"/"+this.props.question.img1}
       onClick = {()=> {
        this.setState({chosen1 : !this.state.chosen1})
        this.props.onAdd(this.props.question,1)}}/>
        <img className={this.props.answers[this.props.question.id]===2?'imgforquestion active':'imgforquestion'} 
        src={"./img/"+this.props.question.id+"/"+this.props.question.img2} 
        onClick = {()=> {
          this.setState({chosen2 : !this.state.chosen2})
          this.props.onAdd(this.props.question,2)}}/>
        <img className={this.props.answers[this.props.question.id]===3?'imgforquestion active':'imgforquestion'}
        src={"./img/"+this.props.question.id+"/"+this.props.question.img3} 
        onClick = {()=> {
          this.setState({chosen3 : !this.state.chosen3})
          this.props.onAdd(this.props.question,3)}}/>
        <img className={this.props.answers[this.props.question.id]===4?'imgforquestion active':'imgforquestion'}
        src={"./img/"+this.props.question.id+"/"+this.props.question.img4} 
        onClick = {()=> {
          this.setState({chosen4 : !this.state.chosen4})
          this.props.onAdd(this.props.question,4)}}/>
        <img className={this.props.answers[this.props.question.id]===5?'imgforquestion active':'imgforquestion'}
        src={"./img/"+this.props.question.id+"/"+this.props.question.img5} 
        onClick = {()=> {
          this.setState({chosen5 : !this.state.chosen5})
          this.props.onAdd(this.props.question,5)}}/>
     </div>
    )
  }
}

export default Question