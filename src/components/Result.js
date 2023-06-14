import React, { Component } from 'react'
import {FaTheaterMasks, FaHeart, FaSuitcase, FaPalette, FaGlassCheers} from 'react-icons/fa'
export class Result extends Component {
   constructor(props){
    super(props);
    this.state={
    final:{ 1:4,
          2:5,
          3:2,
          4:1,
          5:2 }
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
        <p className='resultname'>А вот и результат!</p>
        <div className='statfull'>
          <svg className='stat'>
            <rect x="50" y={500-(this.state.final[1]*50)} width="150" height={this.state.final[1]*50} fill="#ECE0C8"></rect>
            <rect x="250" y={500-(this.state.final[2]*50)} width="150" height={this.state.final[2]*50}  fill="#F5DEB3"></rect>
            <rect x="450" y={500-(this.state.final[3]*50)} width="150" height={this.state.final[3]*50}  fill="#fFE4C4"></rect>
            <rect x="650" y={500-(this.state.final[4]*50)} width="150" height={this.state.final[4]*50} fill="#D2B48C "></rect>
            <rect x="850" y={500-(this.state.final[5]*50)} width="150" height={this.state.final[5]*50}  fill="#f0EAD6 "></rect>
           <FaTheaterMasks x="90" y="520" font-size="70" text-anchor="middle"/> 
           <FaHeart x="290" y="520" font-size="70" text-anchor="middle"/> 
           <FaSuitcase x="495" y="520" font-size="70" text-anchor="middle"/> 
           <FaPalette x="695" y="520" font-size="70" text-anchor="middle"/> 
           <FaGlassCheers x="895" y="520" font-size="70" text-anchor="middle"/> 
          </svg>
          <div className='list'>
          <p><FaTheaterMasks /> - Драматичный<br/>cтиль<br />
         <FaHeart/> - Романтический <br/>стиль<br />
          <FaSuitcase /> - Классический <br/>стиль<br/>
          <FaPalette /> - Инфантильный <br/>стиль<br/>
          <FaGlassCheers /> - Отвязный <br/>стиль</p>
        </div>

        </div>
       
        

      </div>
    )
  }


}
export default Result