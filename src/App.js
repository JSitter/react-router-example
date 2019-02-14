import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Bompy from './Bompy';
import Compy from './Compy';
import Funscape from './Funscape';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to="/lumpy">Click here for Awesome!</Link>
          <Link to="/compy">Click for More Awesomenett</Link>
          <Link to="/lumpy/duckling">Fun times!</Link>
          <Route exact path="/lumpy" component={Bompy} />
          <Route path="/compy" component={Compy} />
          <Route exact path="/lumpy/duckling" component={Funscape} />
        </header>
      </div>
    );
  }
}

export default App;
