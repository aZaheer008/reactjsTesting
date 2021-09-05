import React , { Component } from 'react';
import { connect } from 'react-redux';
// import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import { getSecretWord } from './actions';

 export class UnconnectedApp extends Component {
   /**
    * @method componentDidMount
    * @returns {undefined}
    */
  //  constructor(props){
  //    super(props);
  //    this.state = {
  //      counter:0,
  //      error : false
  //    };
  //  }
  componentDidMount (){
    // get the secret word
    this.props.getSecretWord();
  }
   render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <div>The secret word is {this.props.secretWord}</div>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
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

const mapStateToProps = ( state ) => {
  const { success , guessedWords, secretWord } = state;
  return { success , guessedWords, secretWord };
};

export default connect(mapStateToProps , { getSecretWord })(UnconnectedApp);