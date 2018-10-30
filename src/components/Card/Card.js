import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  onClick = () => {
    this.props.onClick(this.props.index)
  }

  render() {
    const { index, ...props } = this.props

    return <div {...props} className="Card" onClick={this.onClick}><div className="CardInner" style={{backgroundImage: `url(images/${index}.jpg)`}} /></div>
  }
}

export default Card;
