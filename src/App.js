import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Pages/Home';
import FormPlayer from './Pages/FormPlayer'
import Question from './Pages/Question';


function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/formPlayer" exact component={FormPlayer} />
      <Route path="/formPlayer/question" exact component={Question} />
    </Router> 
  );
}

export default App;
