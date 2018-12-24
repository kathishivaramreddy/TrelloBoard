import React, { Component } from 'react';
import {TrelloBoard} from './TrelloBoard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <TrelloBoard/>
      </div>
    );
  }
}

export default App;
