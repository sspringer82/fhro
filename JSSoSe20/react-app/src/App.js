import React, { Component } from 'react';
import './App.css';
import { List } from './list';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Klaus',
      name2: 'Peter',
    };
  }

  handleClick(e) {
    console.log(this, e);
    alert('you clicked the button');
  }

  render() {
    setTimeout(() => {
      this.setState(prevState => {
        return { ...prevState, name: 'Willi' };
      });
    }, 1000);

    return (
      <div className="App">
        <div>{this.state.name}</div>

        <List name={this.state.name} />

        <button onClick={$event => this.handleClick($event)}>click me</button>
      </div>
    );
  }
}

export default App;
