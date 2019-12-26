import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation.js';
import Char from './Char/Char.js';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedhandler = (event) => {
    this.setState({ userInput: event.target.value });
  }

  deleteCharHandler = (index) => {
    // console.log(index);
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render() {
    const charList = this.state.userInput.split('').map((char, index) => {
      return <Char
        character={char}
        key={index}
        clicked={() => this.deleteCharHandler(index)} />
    });

    return (
      <div className="App">
        <input type="text"
          onChange={this.inputChangedhandler}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation textLength={this.state.userInput.length} />
        {
          charList
        }
      </div>
    );
  }
}

export default App;
