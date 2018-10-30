import React, { Component } from 'react';
import Game from './components/Game/Game';
import './App.css';

const IMAGES_COUNT = 15
const CARDS_TO_SHOW = 9

class App extends Component {

  render() {
    return (
      <div className="App">
        <Game imagesCount={IMAGES_COUNT} cardsToShow={CARDS_TO_SHOW} />
      </div>
    );
  }
}

export default App;
