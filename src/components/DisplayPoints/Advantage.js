import React from 'react';
import PropTypes from 'prop-types';

const Advantage = ({ player, score }) => {
  // after 40-40 we show only if a player has a point of advantage
  if (
    player === 'player1' &&
    score.gamePoints1 > 2 &&
    score.gamePoints2 > 2 &&
    score.gamePoints1 - score.gamePoints2 > 0
  ) {
    return <span>+1</span>;
  } else if (
    player === 'player2' &&
    score.gamePoints1 > 2 &&
    score.gamePoints2 > 2 &&
    score.gamePoints2 - score.gamePoints1 > 0
  ) {
    return <span>+1</span>;
  }
  return null;
};

Advantage.propTypes = {
  score: PropTypes.shape({
    gamePoints1: PropTypes.number.isRequired,
    gamePoints2: PropTypes.number.isRequired,
  }).isRequired,
  player: PropTypes.string.isRequired,
};

export default Advantage;
