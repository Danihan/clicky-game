import React from 'react';
import './ScoreBar.css';

const ScoreBar = ({ currentScore, topScore }) => (
  <div className="ScoreBar">
    <div className="ScoreBar-Left">
    Score: {currentScore}
    </div>

    <div className="ScoreBar-Right">
    Top Score: {topScore}
    </div>
  </div>
)

export default ScoreBar;