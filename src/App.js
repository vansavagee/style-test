import React from "react";

import Result from './Result';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./Home";


function App(props) {

  
      return(
      
        <Router>
      <Routes>
        <Route exact path='/'  element={<Home />} />
        <Route path='/result' element={<Result data={props.data}/>} />
    </Routes>
    </Router>

      )
  
}


const mapStateToProps = (state) =>{
  return{
    data: state.data
  }
}
export default connect(mapStateToProps,null)(App);
