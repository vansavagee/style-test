import React, { Component } from 'react'
export class Result extends Component {
   constructor(props){
    super(props);
    this.state={
    final:{ 1:0,
          2:0,
          3:0,
          4:0,
          5:0 }
    }
        for(var s in this.props.answers){
          if (this.props.answers[s]===1)this.state.final[1]+=1;
          if (this.props.answers[s]===2)this.state.final[2]+=1;
          if (this.props.answers[s]===3)this.state.final[3]+=1;
          if (this.props.answers[s]===4)this.state.final[4]+=1;
          if (this.props.answers[s]===5)this.state.final[5]+=1;
          
        }
    
   }

  render() {
    return (
      <div className='result'>
 <svg viewBox="0 0 300 300" className='stat'>
  <rect x="10" y={100-(this.state.final[1]*10)} width="20" height={this.state.final[1]*10} fill="#f00"></rect>
  <rect x="35" y={100-(this.state.final[2]*10)} width="20" height={this.state.final[2]*10}  fill="#0f0"></rect>
  <rect x="60" y={100-(this.state.final[3]*10)} width="20" height={this.state.final[3]*10}  fill="#00f"></rect>
  <rect x="85" y={100-(this.state.final[4]*10)} width="20" height={this.state.final[4]*10} fill="#f80"></rect>
  <rect x="110" y={100-(this.state.final[5]*10)} width="20" height={this.state.final[5]*10}  fill="#ccc"></rect>
  <text x="20" y="108" font-size="10" text-anchor="middle">1</text>
  <text x="45" y="108" font-size="10" text-anchor="middle">2</text>
  <text x="70" y="108"  font-size="10" text-anchor="middle">3</text>
  <text x="95" y="108"  font-size="10" text-anchor="middle">4</text>
  <text x="120" y="108" font-size="10" text-anchor="middle">5</text>
   </svg>
   <span className='textToStat'>Текст справа от объекта</span>
      </div>

    )
  }

  
}

export default Result