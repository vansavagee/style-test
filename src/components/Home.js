import Questions from "./Questions";
import React, { Component } from 'react'
import {Link} from "react-router-dom";
export class Home extends Component {
   

    render() {
        return (
          
        <div className="wrapper">
          
          <Questions questions ={this.props.questions} onAdd={this.props.onAdd} answers={this.props.answers}/>
          {this.props.Isfinished?
           <Link className="knopka" to='/result' ref={this.props.buttonRef}  >ПОЛУЧИТЬ РЕЗУЛЬТАТ </Link>:<h2 className="almostknopka">ДЛЯ ПОЛУЧЕНИЯ РЕЗУЛЬТАТА НУЖНО ОТВЕТИТЬ НА ВСЕ ВОПРОСЫ!</h2>}
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      )
      }

 
}

export default Home