import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from './Home'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
