import React from "react";
import Header from "./components/Header";
import Questions from "./components/Questions";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      answers:[],
      questions: [
        {
          id:1,
          task:'Какие картинки вам кажутся наиболее привлекательными?',
          img1:'1.jpg',
          img2:'2.jpg',
          img3:'3.jpg',
          img4:'4.jpg',
          img5:'5.jpg'

        },
        {
          id: 2,
          task:'Какие из представленных образов вам больше всего по душе?',
          img1:'1.jpg',
          img2:'2.jpg',
          img3:'3.jpg',
          img4:'4.jpg',
          img5:'5.jpg'

        },
        {
          id:3,
          task:'Какие принты Вам больше нравится?',
          img1:'1.jpg',
          img2:'2.jpg',
          img3:'3.jpg',
          img4:'4.jpg',
          img5:'5.jpg'

        },
        {
          id:4,
          task:'Какие принты вам больше нравится?',
          img1:'1.jpg',
          img2:'2.jpg',
          img3:'3.jpg',
          img4:'4.jpg',
          img5:'5.jpg'

        },
        {
          id:5,
          task:'Какие картинки из представленных вам откликаются? ВАЖНО! Не анализировать, а поймать общее настроение. Представьте, что вы выбираете обои на телефон?',
          img1:'1.jpg',
          img2:'2.jpg',
          img3:'3.jpg',
          img4:'4.jpg',
          img5:'5.jpg'

        },
        {
          id:6,
          task:'Какие картинки из представленных вам откликаются? ВАЖНО! Не анализировать, а поймать общее настроение. Представьте, что вы выбираете обои на телефон?',
          img1:'1.jpg',
          img2:'2.jpg',
          img3:'3.jpg',
          img4:'4.jpg',
          img5:'5.jpg'
          
        },
        {
          id:7,
          task:'На какие показы мод Вы бы пошли?',
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
      <Questions questions ={this.state.questions} onAdd={this.addToAnswer}/>
    </div>
  )
  }

  addToAnswer(answer){
    this.setState({answers:[...this.state.answers,answer]}, () =>{
      console.log(this.state.answers)
    })
  }
}

export default App;
