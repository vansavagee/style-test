import Header from "./Header";
import Questions from "./Questions";
import React, { Component } from 'react'
import {Link} from "react-router-dom";
export class Home extends Component {
   
    
    render() {
        return (
          
        <div className="wrapper">
          <Header />
          <Questions questions ={this.props.questions} onAdd={this.props.onAdd} answers={this.props.answers}/>
          {this.props.Isfinished?
           <Link className="knopka" to='/result'>ПОЛУЧИТЬ РЕЗУЛЬТАТ </Link>:<h2>ДЛЯ ПОЛУЧЕНИЯ РЕЗУЛЬТАТА НУЖНО ОТВЕТИТЬ НА ВСЕ ВОПРОСЫ!</h2>}
          <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      )
      }

 
}

export default Home