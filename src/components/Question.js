import React, { Component } from 'react'

export class Question extends Component {
  render() {
    return (
      <div className='task'>
        <h3>{this.props.question.task}</h3>
        <img className='imgforquestion' 
        src={"./img/"+this.props.question.id+"/"+this.props.question.img1}
       onClick = {()=> this.props.onAdd('a')}/>
        <img className='imgforquestion' 
        src={"./img/"+this.props.question.id+"/"+this.props.question.img2} 
        onClick = {()=> this.props.onAdd('b')}/>
        <img className='imgforquestion' 
        src={"./img/"+this.props.question.id+"/"+this.props.question.img3} 
        onClick = {()=> this.props.onAdd('c')}/>
        <img className='imgforquestion' 
        src={"./img/"+this.props.question.id+"/"+this.props.question.img4} 
        onClick = {()=> this.props.onAdd('d')}/>
        <img className='imgforquestion' 
        src={"./img/"+this.props.question.id+"/"+this.props.question.img5} 
        onClick = {()=> this.props.onAdd('e')}/>
     </div>
    )
  }
}

export default Question