import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Points from './Points';
import Advantage from './Advantage';

const DisplayPoints = ({ score }) => (
  <div className="column">
    <h2 className="title is-2">Points</h2>
    <table className="table is-bordered" style={{ width: '100%' }}>
      <tbody>
        <tr>
          <td>Player1</td>
          <td>Player2</td>
        </tr>
        <tr>
          <td>
            <Points value={score.gamePoints1} />
            <Advantage player="player1" score={score} />
          </td>
          <td>
            <Points value={score.gamePoints2} />
            <Advantage player="player2" score={score} />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

DisplayPoints.propTypes = {
  score: PropTypes.shape({
    gamePoints1: PropTypes.number.isRequired,
    gamePoints2: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => {
  const gamePoints1 = state.player1.gamePoints;
  const gamePoints2 = state.player2.gamePoints;
  return {
    score: {
      gamePoints1,
      gamePoints2,
    },
  };
};

export default connect(mapStateToProps)(DisplayPoints);
