import React,{ Component } from "react";

import Result from './components/Result';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import {createAssistant, createSmartappDebugger,} from "@salutejs/client";

const initializeAssistant = (getState/*: any*/) => {
  if (process.env.NODE_ENV === "development") {
    return createSmartappDebugger({
      token: process.env.REACT_APP_TOKEN ?? "",
      initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
      getState,
    });
  }
  return createAssistant({getState});
};


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
          task:'Какая картинка из представленных вам откликается?',
          img1:'1.jpg',
          img2:'2.jpg',
          img3:'3.jpg',
          img4:'4.jpg',
          img5:'5.jpg'

        },
        {
          id:6,
          task:'Какая картинка из представленных вам откликается? ',
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
          task:'Чей образ вас зацепил?',
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
          task:'Какая из картинок вам больше по нраву?',
          img1:'1.jpg',
          img2:'2.jpg',
          img3:'3.jpg',
          img4:'4.jpg',
          img5:'5.jpg'

        },
        {
          id:11,
          task:'Какая из картинок вам больше по нраву?',
          img1:'1.jpg',
          img2:'2.jpg',
          img3:'3.jpg',
          img4:'4.jpg',
          img5:'5.jpg'

        },
      ]
    }
    this.assistant = initializeAssistant(() => this.getStateForAssistant());
    this.assistant.on("data", (event/*: any*/) => {
      console.log(`assistant.on(data)`, event);
      
        const {action} = event;
        this.dispatchAssistantAction(action);
      
    });
 
    this.addToAnswer = this.addToAnswer.bind(this)
  }
  getStateForAssistant() {
    console.log('getStateForAssistant: this.state:', this.state)
    const state = {
      item_selector: {
        items: this.state.answers
      },
    };
    console.log('getStateForAssistant: state:', state)
    return state;
  }
  dispatchAssistantAction(action) {
    console.log('dispatchAssistantAction', action);
    if (action) {
      switch (action.type) {
        case 'add_ans_quest':
          return this.add_ans_quest(action);


        default:
          throw new Error();
      }
    }
  }
  add_ans_quest(action) {
    console.log('add_ans_quest', action);
    this.setState({answers:{...this.state.answers,
      [action.question]:action.answer}},()=>{
        if(Object.keys(this.state.answers).length===11){
          this.setState({Isfinished:true});
          
        }
      }
   
    )
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
        const { v4: uuidv4 } = require('uuid');

          console.log(uuidv4());
          this.setState({answers:{...this.state.answers,
            [question.id]:answer}},()=>{
              if(Object.keys(this.state.answers).length===11){
                this.setState({Isfinished:true});
                
              }
            })
        
        
      }
    
  
}


export default App;
