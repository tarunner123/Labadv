import React from 'react';
import CharacterCard from './CharacterCard';
import './App.css';
import _ from 'lodash'

let message = 'Samurai'

const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase()
  let chars = _.shuffle(Array.from(word))
  return {
  word,
  chars,
  incorrect: 0,
  guess: [],
  completed: false
  }
 }

class App extends React.Component {

  state = prepareStateFromWord(message)

  activationHandler = (c) => {
    let guess = [...this.state.guess, c]
    this.setState({guess})
    if(guess.length == this.state.chars.length){
    if(guess.join('').toString() == this.state.word){
    this.setState({guess: [], completed: true})
    }else{
    this.setState({guess: [], incorrect: this.state.incorrect + 1})
    }
    }
   }

  render() {
    return (
      <div>
        {
          Array.from(this.state.chars).map((item, index) => (
            <CharacterCard
              value={item}
              key={index}
              activationHandler={this.activationHandler}
            />
          ))

        }
        <h2>Selected</h2>
        {
          Array.from(this.state.guess).map((item, index) => (
            <CharacterCard
              value={item}
              key={index}
              activationHandler={this.activationHandler}
            />
          ))

        }
        <div>incorrect {this.state.incorrect}</div>
        {
          this.state.completed && <h4>completed</h4>
        }
      </div>
    )
  }
}

export default App;