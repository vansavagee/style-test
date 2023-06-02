import React,{ Component } from "react";

import Result from './components/Result';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./components/Home";


export class App extends Component {

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
          task:'Какая картинка из представленных вам откликается? (ВАЖНО! Не анализировать, а поймать общее настроение. Представьте, что вы выбираете обои на телефон.)',
          img1:'1.jpg',
          img2:'2.jpg',
          img3:'3.jpg',
          img4:'4.jpg',
          img5:'5.jpg'

        },
        {
          id:6,
          task:'Какая картинка из представленных вам откликается? (ВАЖНО! Не анализировать, а поймать общее настроение. Представьте, что вы выбираете обои на телефон.)',
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
      render(){
        return(
      
          <Router>
        <Routes>
          <Route exact path='/'  element={<Home questions ={this.state.questions} onAdd={this.addToAnswer} answers={this.state.answers} Isfinished={this.state.Isfinished}/>} />
          <Route path='/result' element={<Result answers= {this.state.answers}/>} />
      </Routes>
      </Router>
  
        )
      }
        
      addToAnswer(question,answer){
        
          this.setState({answers:{...this.state.answers,
            [question.id]:answer}},()=>{
              if(Object.keys(this.state.answers).length===11){
                this.setState({Isfinished:true});
                
              }
            })
        
        
      }
    
  
}


export default App;
