import Header from "./components/Header";
import Questions from "./components/Questions";
import React, { Component } from 'react'

export class Home extends Component {
   
    
    render() {
        return (
          
        <div className="wrapper">
          <Header />
          <Questions questions ={this.props.questions} onAdd={this.props.onAdd} answers={this.props.answers}/>
          {this.props.Isfinished?
          <form action="/result">
          <button className="knopka">ПОЛУЧИТЬ РЕЗУЛЬТАТ </button>
          </form>:<h2>ДЛЯ ПОЛУЧЕНИЯ РЕЗУЛЬТАТА НУЖНО ОТВЕТИТЬ НА ВСЕ ВОПРОСЫ!</h2>}
          
        </div>
      )
      }

 
}

export default Home