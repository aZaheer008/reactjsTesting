import React , { Component } from 'react';
// import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

 class App extends Component {
  //  constructor(props){
  //    super(props);
  //    this.state = {
  //      counter:0,
  //      error : false
  //    };
  //  }
   render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[
          { guessedWord: 'train' ,letterMatchCount:3 }
        ]} />
      </div>
      // <div data-test="component-app">
      //   { !this.state.error ? <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>:
      //   <h1 data-test="error-display" className="belowZerroError">Below 0 no decreament possible </h1>}
      //   <button 
      //     data-test="increament-button"
      //     onClick={() => this.setState({ error : false,counter : this.state.counter + 1})}
      //   >Increament Counter</button>
      //   <button 
      //     data-test="decreament-button"
      //     onClick={() => this.state.counter === 0 ? this.setState({error : true}) : this.setState({ counter : this.state.counter - 1})}
      //   >Decreament Counter</button>
      // </div>
    );
   }
};

export default App