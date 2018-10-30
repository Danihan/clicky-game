import React, { Component } from 'react';
import Card from '../Card/Card';
import { getRandomIntInclusive } from '../utils';
import './Game.css';
import ScoreBar from '../ScoreBar/ScoreBar';
class Game extends Component {
  constructor() {
    super();

    this.state = {
      images: [],
      score: 0,
      topScore: 0,

      imagesClicked: []
    }
  }

  componentWillMount() {
    this.selectAndShuffleImages()
  }

  selectAndShuffleImages() {
    const images = new Set()

    while (images.size !== this.props.cardsToShow) {
      images.add(getRandomIntInclusive(1, this.props.imagesCount))
    }

    this.setState({ images: Array.from(images) })
  }

  onCorrectGuess(index) {
    this.setState({
      score: this.state.score + 1,
      imagesClicked: [ ...this.state.imagesClicked, index]
    })
  }

  onIncorrectGuess(index) {
    this.setState({
      topScore: this.state.score > this.state.topScore ? this.state.score : this.state.topScore,
      score: 0,
      imagesClicked: []
    })
  }

  onGuess = (index) => {
    if (this.state.imagesClicked.indexOf(index) !== -1) {
      this.onIncorrectGuess(index)
    } else {
      this.onCorrectGuess(index)
    }

    this.selectAndShuffleImages()
  }

  render() {
    return (
      <div className="Game">
        <div className="Container">
          <ScoreBar currentScore={this.state.score} topScore={this.state.topScore} />

          <div className="CardGrid">
            {this.state.images.map(index => <Card key={index} index={index} onClick={this.onGuess} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
