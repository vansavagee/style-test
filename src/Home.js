import Header from "./components/Header";
import Questions from "./components/Questions";
import React, { Component } from 'react'
import { configureStore } from "@reduxjs/toolkit";

export class Home extends Component {
    constructor(props){
        super(props)
        this.state={
          Isfinished:false,
          answers:{},
          questions: [
            {
              id:1,
              task:'Какая картинка вам кажется наиболее привлекательной?',
              img1:'1.jpg',
              img2:'2.jpg',
              img3:'3.jpg',
              img4:'4.jpg',
              img5:'5.jpg'
    
            },
            {
              id: 2,
              task:'Какой из представленных образов вам больше всего по душе?',
              img1:'1.jpg',
              img2:'2.jpg',
              img3:'3.jpg',
              img4:'4.jpg',
              img5:'5.jpg'
    
            },
            {
              id:3,
              task:'Какой принт Вам больше нравится?',
              img1:'1.jpg',
              img2:'2.jpg',
              img3:'3.jpg',
              img4:'4.jpg',
              img5:'5.jpg'
    
            },
            {
              id:4,
              task:'Какой принт вам больше нравится?',
              img1:'1.jpg',
              img2:'2.jpg',
              img3:'3.jpg',
              img4:'4.jpg',
              img5:'5.jpg'
    
            },
            {
              id:5,
              task:'Какая картинка из представленных вам откликается? ВАЖНО! Не анализировать, а поймать общее настроение. Представьте, что вы выбираете обои на телефон.',
              img1:'1.jpg',
              img2:'2.jpg',
              img3:'3.jpg',
              img4:'4.jpg',
              img5:'5.jpg'
    
            },
            {
              id:6,
              task:'Какая картинка из представленных вам откликается? ВАЖНО! Не анализировать, а поймать общее настроение. Представьте, что вы выбираете обои на телефон.',
              img1:'1.jpg',
              img2:'2.jpg',
              img3:'3.jpg',
              img4:'4.jpg',
              img5:'5.jpg'
              
            },
            {
              id:7,
              task:'На какой показ мод Вы бы пошли?',
              img1:'1.jpg',
              img2:'2.jpg',
              img3:'3.jpg',
              img4:'4.jpg',
              img5:'5.jpg'
    
            },
            {
              id:8,
              task:'Представьте, вы идете по улице в хорошую погоду. У вас нет дел, и можно поглядеть на прохожих.Кто из прохожих лучше всего одет? Чей образ вас зацепил?',
              img1:'1.jpg',
              img2:'2.jpg',
              img3:'3.jpg',
              img4:'4.jpg',
              img5:'5.jpg'
    
            },
            {
              id:9,
              task:'А здесь? Чей внешний вид находит в вас отклик?',
              img1:'1.jpg',
              img2:'2.jpg',
              img3:'3.jpg',
              img4:'4.jpg',
              img5:'5.jpg'
    
            },
            {
              id:10,
              task:'Попробуйте поймать настроение следующих картинок. Какое из настроений Вам больше по нраву?',
              img1:'1.jpg',
              img2:'2.jpg',
              img3:'3.jpg',
              img4:'4.jpg',
              img5:'5.jpg'
    
            },
            {
              id:11,
              task:'Попробуйте поймать настроение следующих картинок. Какое из настроений Вам больше по нраву?',
              img1:'1.jpg',
              img2:'2.jpg',
              img3:'3.jpg',
              img4:'4.jpg',
              img5:'5.jpg'
    
            },
          ]
        }
        this.addToAnswer = this.addToAnswer.bind(this)
      }
    
    render() {
        return (
        <div className="wrapper">
          <Header />
          <Questions questions ={this.state.questions} onAdd={this.addToAnswer} answers={this.state.answers}/>
          {this.state.Isfinished?
          <form action="/result">
          <button className="knopka">ПОЛУЧИТЬ РЕЗУЛЬТАТ </button>
          </form>:<h2>ДЛЯ ПОЛУЧЕНИЯ РЕЗУЛЬТАТА НУЖНО ОТВЕТИТЬ НА ВСЕ ВОПРОСЫ!</h2>}
          
        </div>
      )
      }

  addToAnswer(question,answer){
    this.state.answers[question.id]=answer
    console.log(Object.keys(this.state.answers).length)
    var data={};
    if(Object.keys(this.state.answers).length===11){
      this.setState({Isfinished:true})
    }
  }

}

export default Home