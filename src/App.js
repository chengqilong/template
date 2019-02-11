import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';

class App extends Component {
  componentDidMount() {
     console.log(2223333444433)
  }
  render() {
    return (
      <div className="App">
        <Child />
        <Child />
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
      </div>
    );
  }
}

export default App;
