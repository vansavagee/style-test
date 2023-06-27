import React, { Component } from 'react'
import {FaTheaterMasks, FaHeart, FaSuitcase, FaPalette, FaGlassCheers} from 'react-icons/fa'
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
        this.componentDidMount = this.componentDidMount.bind(this)
   }
   
   componentDidMount=()=>{
    setTimeout(() => {
      this.props.addSugg('resultpage','bye-bye');
    }, 50);
   
    
      }
    
  render() {
    return (
      <div className='result' >
        <p className='resultname'   >Результат теста</p>
        <div className='statfull'>
          <svg className='stat'>
            <rect x="50" y={500-(this.state.final[1]*50)} width="150" height={this.state.final[1]*50} fill="#ECE0C8"></rect>
            <rect x="250" y={500-(this.state.final[2]*50)} width="150" height={this.state.final[2]*50}  fill="#F5DEB3"></rect>
            <rect x="450" y={500-(this.state.final[3]*50)} width="150" height={this.state.final[3]*50}  fill="#fFE4C4"></rect>
            <rect x="650" y={500-(this.state.final[4]*50)} width="150" height={this.state.final[4]*50} fill="#F5DEC3 "></rect>
            <rect x="850" y={500-(this.state.final[5]*50)} width="150" height={this.state.final[5]*50}  fill="#f0EAD6 "></rect>
            <FaTheaterMasks x="90" y="520" fontSize="70" className= "icons" text-anchor="middle" onClick={()=>{this.props.addSugg('dramStyle','bye-bye')}}/> 
           <FaHeart x="290" y="520" fontSize="70" className= "icons" text-anchor="middle" onClick={()=>{this.props.addSugg('romStyle','bye-bye')}}/> 
           <FaSuitcase x="495" y="520" fontSize="70" className= "icons" text-anchor="middle" onClick={()=>{this.props.addSugg('ClassStyle','bye-bye')}}/> 
           <FaPalette x="695" y="520" fontSize="70" className= "icons" text-anchor="middle" onClick={()=>{this.props.addSugg('InfStyle','bye-bye')}}/> 
           <FaGlassCheers x="895" y="520" fontSize="70" className= "icons" text-anchor="middle" onClick={()=>{this.props.addSugg('OtvyazStyle','bye-bye')}}/> 
           
          </svg>
       

          <div className='list'>
          <p ><FaTheaterMasks className= "icons" onClick={()=>{this.props.addSugg('dramStyle','bye-bye')}}/> - Драматичный<br/>cтиль<br />
         <FaHeart className= "icons" onClick={()=>{this.props.addSugg('romStyle','bye-bye')}}/> - Романтический <br/>стиль<br />
          <FaSuitcase className= "icons" onClick={()=>{this.props.addSugg('ClassStyle','bye-bye')}}/> - Классический <br/>стиль<br/>
          <FaPalette className= "icons" onClick={()=>{this.props.addSugg('InfStyle','bye-bye')}}/> - Инфантильный <br/>стиль<br/>
          <FaGlassCheers className= "icons" onClick={()=>{this.props.addSugg('OtvyazStyle','bye-bye')}}/> - Отвязный <br/>стиль</p>
          <p  className='tooltip'>(На значки стилей можно нажать)</p>
        </div>

        </div>
       
        

      </div>
    )
  }


}
export default Result